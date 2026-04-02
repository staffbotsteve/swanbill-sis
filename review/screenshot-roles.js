const { chromium } = require('playwright');

const BASE = 'https://cbhs.lovable.app';
const PASSWORD = 'Password1!';

const ROLES = [
  { role: 'super-admin', email: 'principal@cbhs.edu' },
  { role: 'admin', email: 'admin@cbhs.edu' },
  { role: 'teacher', email: 'd.kim@cbhs.edu' },
  { role: 'counselor', email: 'p.harris@cbhs.edu' },
  { role: 'student', email: 'student1@cbhs.edu' },
  { role: 'parent', email: 'parent1@cbhs.edu' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const { role, email } of ROLES) {
    console.log(`\n=== ${role} (${email}) ===`);
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();

    try {
      // Go to login page
      await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: `review/${role}-01-login.png`, fullPage: true });

      // Try to find login form
      const emailInput = await page.$('input[type="email"], input[name="email"], input[placeholder*="email" i], input[placeholder*="Email" i]');
      const passInput = await page.$('input[type="password"], input[name="password"]');

      if (emailInput && passInput) {
        await emailInput.fill(email);
        await passInput.fill(PASSWORD);
        await page.screenshot({ path: `review/${role}-02-filled.png`, fullPage: true });

        // Find and click submit button
        const submitBtn = await page.$('button[type="submit"], button:has-text("Sign In"), button:has-text("Log In"), button:has-text("Login")');
        if (submitBtn) {
          await submitBtn.click();
          await page.waitForTimeout(3000);
          await page.waitForLoadState('networkidle').catch(() => {});
        }
      } else {
        console.log('  Could not find login form inputs');
        // Maybe there are links or other login methods
        const html = await page.content();
        const textContent = await page.textContent('body');
        console.log('  Page text (first 500):', textContent?.substring(0, 500));
      }

      // Screenshot dashboard
      await page.screenshot({ path: `review/${role}-03-dashboard.png`, fullPage: true });
      console.log(`  URL after login: ${page.url()}`);

      // Get all nav links and screenshot key pages
      const navLinks = await page.$$eval('a[href], nav a, aside a, [role="navigation"] a', links =>
        links.map(l => ({ href: l.getAttribute('href'), text: l.textContent?.trim() }))
          .filter(l => l.href && l.href.startsWith('/') && l.text)
      );
      console.log(`  Nav links found: ${navLinks.length}`);
      navLinks.forEach(l => console.log(`    ${l.text} → ${l.href}`));

      // Visit up to 6 nav pages
      let pageNum = 4;
      const visited = new Set();
      for (const link of navLinks.slice(0, 8)) {
        if (visited.has(link.href)) continue;
        visited.add(link.href);
        try {
          await page.goto(`${BASE}${link.href}`, { waitUntil: 'networkidle', timeout: 15000 });
          await page.waitForTimeout(1500);
          await page.screenshot({
            path: `review/${role}-${String(pageNum).padStart(2, '0')}-${link.text.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30)}.png`,
            fullPage: true
          });
          console.log(`  Captured: ${link.text} (${link.href})`);
          pageNum++;
        } catch (e) {
          console.log(`  Failed to capture ${link.href}: ${e.message}`);
        }
      }
    } catch (e) {
      console.log(`  Error for ${role}: ${e.message}`);
      await page.screenshot({ path: `review/${role}-error.png`, fullPage: true }).catch(() => {});
    }

    await context.close();
  }

  await browser.close();
  console.log('\nDone!');
})();
