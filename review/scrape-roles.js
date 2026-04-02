const { chromium } = require('playwright');

const BASE = 'https://cbhs.lovable.app';
const PASSWORD = 'Password1!';
const fs = require('fs');

const ROLES = [
  { role: 'super-admin', email: 'principal@cbhs.edu',
    pages: ['/', '/students', '/staff', '/enrollment', '/courses', '/course-catalog', '/attendance', '/gradebook', '/progress-reports', '/report-cards', '/transcripts', '/messages', '/schedule', '/registration-overview', '/conflicts', '/departments', '/bell-schedules', '/waitlists', '/reports', '/honor-roll', '/graduation', '/college-readiness', '/counselor-dashboard', '/essay-review', '/college-readiness-report', '/settings'] },
  { role: 'teacher', email: 'd.kim@cbhs.edu',
    pages: ['/', '/students', '/courses', '/teacher-schedule', '/attendance', '/gradebook', '/progress-reports', '/report-cards', '/messages'] },
  { role: 'counselor', email: 'p.harris@cbhs.edu',
    pages: ['/', '/students', '/counselor-dashboard', '/college-readiness', '/registration-review', '/conflicts', '/waitlists', '/essay-review', '/college-readiness-report', '/messages', '/graduation', '/reports'] },
  { role: 'student', email: 'student1@cbhs.edu',
    pages: ['/'] },
  { role: 'parent', email: 'parent1@cbhs.edu',
    pages: ['/'] },
];

async function login(page, email) {
  await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  const emailInput = await page.$('input[type="email"], input[name="email"], input[placeholder*="email" i]');
  const passInput = await page.$('input[type="password"]');
  if (emailInput && passInput) {
    await emailInput.fill(email);
    await passInput.fill(PASSWORD);
    const submitBtn = await page.$('button[type="submit"], button:has-text("Sign In"), button:has-text("Log In")');
    if (submitBtn) {
      await submitBtn.click();
      await page.waitForTimeout(3000);
      await page.waitForLoadState('networkidle').catch(() => {});
    }
  }
  return page.url();
}

async function extractPage(page, url) {
  try {
    await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(1500);
    
    // Get page title
    const title = await page.title();
    
    // Get main heading
    const h1 = await page.$eval('h1, h2, [class*="title"]', el => el.textContent?.trim()).catch(() => 'N/A');
    
    // Get all visible text content structured
    const content = await page.evaluate(() => {
      const result = {};
      
      // Sidebar nav items
      const navItems = document.querySelectorAll('nav a, aside a, [role="navigation"] a');
      result.navItems = [...navItems].map(a => a.textContent?.trim()).filter(Boolean).slice(0, 30);
      
      // Cards
      const cards = document.querySelectorAll('[class*="card"], [class*="Card"]');
      result.cards = [...cards].map(c => ({
        text: c.textContent?.trim().substring(0, 200)
      })).slice(0, 20);
      
      // Tables
      const tables = document.querySelectorAll('table');
      result.tables = [...tables].map(t => {
        const headers = [...t.querySelectorAll('th')].map(th => th.textContent?.trim());
        const rowCount = t.querySelectorAll('tbody tr').length;
        const firstRow = [...(t.querySelector('tbody tr')?.querySelectorAll('td') || [])].map(td => td.textContent?.trim());
        return { headers, rowCount, firstRow };
      });
      
      // Buttons
      const buttons = document.querySelectorAll('button');
      result.buttons = [...buttons].map(b => b.textContent?.trim()).filter(Boolean).slice(0, 15);
      
      // Stats/metrics
      const statElements = document.querySelectorAll('[class*="stat"], [class*="metric"], [class*="count"], [class*="Stat"]');
      result.stats = [...statElements].map(s => s.textContent?.trim()).slice(0, 10);
      
      // Forms
      const inputs = document.querySelectorAll('input, select, textarea');
      result.formFields = [...inputs].map(i => ({
        type: i.type || i.tagName.toLowerCase(),
        name: i.name,
        placeholder: i.placeholder,
        label: i.closest('label')?.textContent?.trim() || document.querySelector(`label[for="${i.id}"]`)?.textContent?.trim()
      })).slice(0, 15);
      
      // Tabs
      const tabs = document.querySelectorAll('[role="tab"], [class*="tab"]');
      result.tabs = [...tabs].map(t => t.textContent?.trim()).filter(Boolean);
      
      // Full text for context
      result.fullText = document.body?.innerText?.substring(0, 2000);
      
      return result;
    });
    
    return { url, title, h1, ...content };
  } catch (e) {
    return { url, error: e.message };
  }
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const allData = {};

  for (const { role, email, pages } of ROLES) {
    console.log(`\n=== ${role} (${email}) ===`);
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    
    const loginUrl = await login(page, email);
    console.log(`  Logged in → ${loginUrl}`);
    
    allData[role] = { email, loginUrl, pages: {} };
    
    if (loginUrl.includes('/login')) {
      console.log('  LOGIN FAILED - stuck on login page');
      // Get error message if any
      const errorText = await page.$eval('[class*="error"], [class*="alert"], [role="alert"]', el => el.textContent?.trim()).catch(() => 'No error message found');
      allData[role].loginError = errorText;
      allData[role].pageHtml = await page.content();
    } else {
      for (const url of pages) {
        const data = await extractPage(page, url);
        allData[role].pages[url] = data;
        console.log(`  ${url} → ${data.error || 'OK'} (${data.cards?.length || 0} cards, ${data.tables?.length || 0} tables)`);
      }
    }
    
    await context.close();
  }

  fs.writeFileSync('review/app-content.json', JSON.stringify(allData, null, 2));
  console.log('\nSaved to review/app-content.json');
  await browser.close();
})();
