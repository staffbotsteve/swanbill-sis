# Clever Feature Spec: SSO & Rostering for K-12

## 1. Overview
Clever is a unified portal and data integration platform that connects K-12 students, teachers, and staff to all their digital learning resources. It is widely known for its **Single Sign-On (SSO)** and **Secure Sync Rostering** services, which are free for US and Canadian schools/districts.

## 2. Core Features
### Secure Sync (Rostering)
- **Automated Data Transfer:** Seamlessly syncs student, teacher, and class data from a school's SIS to authorized learning applications.
- **Data Scoping:** Administrators can precisely control which data is shared with each application (e.g., specific schools, grades, or classes).
- **Daily & Manual Syncs:** Ensures class rosters are always up-to-date in digital tools.

### Single Sign-On (SSO) Portal
- **One Login:** A central portal where users can access all their software without multiple usernames/passwords.
- **Clever Badges (K-2):** QR code-based login for younger students; no typing required.
- **Teacher Pages:** Educators can customize their students' portals with specific apps, links, and messages.

### Clever Library
- **Edtech Discovery:** A curated catalog where teachers can find and adopt new, vetted educational apps for their classrooms.
- **One-Click Setup:** Instant account creation for students in new apps directly from the Library.

### Clever Goals & Analytics
- **Clever Analytics:** Free visibility into edtech usage (logins, popular apps, active users).
- **Clever Goals (Paid):** Allows setting and monitoring student learning targets across different software.

## 3. Pricing (2026 Estimates)
- **Core Platform:** Free for K-12 schools/districts in the US/Canada. (Funded by app partners).
- **Clever IDM (Identity Management):** Paid add-on; automates account creation in Google/Active Directory.
- **Classroom MFA:** Paid add-on; multi-factor authentication without a second device.
- **Clever Goals:** Paid premium product (custom pricing based on enrollment).
- **Services:** Live training (~$500/session) and technical consulting (~$1,200/engagement).

## 4. Integrations
- **SIS Partners:** Works with 80+ SIS providers (PowerSchool, Infinite Campus, Skyward, etc.).
- **App Partners:** Thousands of learning apps (Khan Academy, Seesaw, DreamBox, etc.).
- **Identity:** Integrates with Google Workspace, Microsoft Entra ID, and Active Directory.

## 5. Pain Points
- **Adoption:** Requires SIS administrators to manage the data sync; can be a bottleneck if not configured correctly.
- **Third-Party Dependency:** If Clever is down, access to all integrated apps can be disrupted.
- **Complexity at Scale:** Large districts may find the free version's support and features insufficient without the premium add-ons.

## 6. Competitive Intelligence
- **Primary Rival:** ClassLink (paid, but deeper analytics and more advanced features in the base version).
- **Edge:** The "de facto" standard in US K-12 due to its free-to-schools model and massive app partner network.
- **API Status:** Robust REST API (v3.x) with district-app and SSO bearer tokens; extensively used by edtech developers.

---
*Target path: /root/.openclaw/workspace/builds/school-sis/specs/IT/Clever-Feature-Spec.md*