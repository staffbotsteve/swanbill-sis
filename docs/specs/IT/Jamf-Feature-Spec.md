# Jamf Feature Spec: Apple MDM for Education

## 1. Overview
Jamf is the industry standard for managing Apple devices (Mac, iPad, iPhone, Apple TV) in educational environments. For schools, Jamf offers two primary paths: **Jamf School** (optimized for K-12 with teacher/parent tools) and **Jamf Pro** (for large-scale enterprise-grade deployments).

## 2. Core Features
### Device Enrollment (DEP/ADE)
- **Zero-Touch Deployment:** Automated enrollment via Apple School Manager (ASM). Devices are configured out-of-the-box without IT touching them.
- **DEP/ADE Packages:** Install critical apps and profiles before the device even leaves the "Remote Management" setup screen.
- **Non-Removable MDM:** Prevents students from deleting the management profile.

### App Management
- **VPP Integration:** Bulk purchase and distribution of apps via Apple School Manager.
- **Automated Patching:** Keeps apps up-to-date without user intervention.
- **Self Service:** A customized portal where students/staff can download approved apps and run maintenance scripts.
- **Teacher Requests:** In-app workflow for teachers to request new apps for their classrooms.

### Classroom & OS Management
- **Jamf Teacher:** Allows teachers to lock student iPads into specific apps, clear passcodes, and restrict web browsing during lessons.
- **Jamf Student/Parent/Assessment:** Dedicated apps for student resource access, parental controls (at home), and secure exam proctoring.
- **Shared iPad:** Support for multiple students using one iPad with personalized data (via Managed Apple IDs).
- **OS Updates:** Remote scheduling and enforcement of macOS/iOS updates across the fleet.

### Inventory & Security
- **Smart Groups:** Dynamically organize devices based on criteria (e.g., "OS version < 17.0" or "Battery < 20%").
- **Remote Commands:** Wipe, lock, or clear passcodes remotely.
- **Lost Mode:** Enable location tracking and lock screen messages for missing devices.

## 3. Pricing (2026 Estimates)
- **Jamf School:** ~$5.50 per device / year. (Subscription model, device minimums apply).
- **Jamf Pro (Higher Ed/Enterprise):** Volume-based pricing, often negotiated. Estimates range from ~$13.65/device/month for full business suites to custom EDU bundles.
- **Add-ons:** Jamf Connect (~$5/year), Jamf Protect (~$12/year), Jamf Safe Internet (~$2-4/year).

## 4. Integrations
- **Apple School Manager (ASM):** Mandatory for roster syncing and DEP.
- **Identity Providers:** Microsoft Entra ID (Azure AD), Google Workspace, Okta.
- **SIS:** Syncs class rosters via ASM or direct CSV/API.

## 5. Pain Points
- **Learning Curve:** Jamf Pro is highly complex; Jamf School is simpler but occasionally lacks the granular "power user" controls of Pro.
- **Apple Only:** Does not manage Windows or Android devices (requires separate tools like Intune).
- **Minimums:** Small schools may struggle to meet device minimums for preferred pricing.

## 6. Competitive Intelligence
- **Primary Rivals:** Mosyle (lower cost), Kandji (modern/sleek), Microsoft Intune (cross-platform).
- **Edge:** Jamf's "Apple-first" ecosystem and deep integration with Classroom/Teacher apps make it hard to beat for iPad-heavy 1:1 programs.
- **API Status:** Robust REST API (Classic and Pro) with Bearer Token auth; supports extensive automation for asset management.

---
*Target path: /root/.openclaw/workspace/builds/school-sis/specs/IT/Jamf-Feature-Spec.md*