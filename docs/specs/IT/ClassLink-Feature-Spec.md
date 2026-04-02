# ClassLink Feature Spec: SSO & App Management

## 1. Overview
ClassLink is a robust, cloud-based platform for schools that provides **Single Sign-On (SSO)**, **Roster Syncing**, and **Analytics**. While it competes with Clever, it is a paid service and is often favored by larger districts for its deeper analytics and more customizable management tools.

## 2. Core Features
### LaunchPad (SSO)
- **Personalized Portal:** Access to all apps, files, and folders from any device.
- **My Files:** Integrated cloud storage (Google Drive, OneDrive, Dropbox) and network folders in a single view.
- **OneClick SSO:** Simplifies access to thousands of web and Windows applications.
- **Security:** Support for Multi-Factor Authentication (MFA) and third-party security audits.

### Roster Server (Rostering)
- **OneRoster® Standard:** Uses the open OneRoster® data standard for interoperability.
- **Automated Daily Syncs:** Streamlines class rosters from SIS to digital learning resources.
- **DataGuard:** Masks Personally Identifiable Information (PII) to enhance student privacy.
- **Daily & Custom Sync Schedules:** Ensures accurate identity data for all users.

### Analytics & Analytics+
- **Actionable Insights:** Tracks logins, users, and engagement for every app in LaunchPad.
- **Analytics+ (Paid):** Extends tracking to all web usage on school-owned devices, even if accessed outside of ClassLink.
- **Impact Measurement (Fall 2026):** Connecting edtech usage data directly with student assessment results.
- **Automated Reporting:** Schedule reports to be delivered to stakeholders.

### Identity Management (OneSync)
- **Account Provisioning:** Automates account creation and lifecycle management in Google Workspace, Microsoft AD, and Entra ID.

## 3. Pricing (2026 Estimates)
- **Core Platform:** Volume-banded annual per-user pricing (Custom quote).
- **Setup & Training:** One-time fees (~$2,500 - $5,000+ depending on district size).
- **Analytics+:** ~$0.25 per user / year (min. $100/year).
- **Roster Server Hosting:** Banded annual hosting costs (Custom quote).

## 4. Integrations
- **SIS Partners:** Works with all major SIS providers via OneRoster® or custom connectors.
- **Identity:** Google, Microsoft, Okta, and on-premise Active Directory.
- **Learning Tools:** Integrates with Canvas, Moodle, and thousands of edtech apps.

## 5. Pain Points
- **Cost:** Unlike Clever's core service, ClassLink is a significant annual investment for districts.
- **Implementation:** More complex setup than Clever, often requiring more IT intervention.
- **Premium Model:** Many of the most useful features (Analytics+, OneSync) are paid add-ons.

## 6. Competitive Intelligence
- **Primary Rival:** Clever (free, simpler, but less powerful analytics and file management).
- **Edge:** Favored by districts with complex IT environments and a need for deep "all-day" analytics across devices.
- **API Status:** RESTful API with OAuth2 support; provides an API Sandbox for testing.

---
*Target path: /root/.openclaw/workspace/builds/school-sis/specs/IT/ClassLink-Feature-Spec.md*