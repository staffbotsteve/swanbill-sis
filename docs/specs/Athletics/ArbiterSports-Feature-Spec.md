# ArbiterSports (FamilyID) Feature Spec: Athletic Registration

## 1. Overview
ArbiterSports (now incorporating **FamilyID**) is a leading athletic management platform for K-12 schools. It provides a "connected" experience, linking registration, scheduling, compliance, and payments into a single ecosystem.

## 2. Core Features
### Online Registration (FamilyID)
- **Centralized Data:** Parents create a single family account to register multiple children for sports, clubs, and field trips.
- **Data Reuse:** Information is saved from year to year; only updates and new signatures are needed for each season.
- **Electronic Signatures:** Support for digital signing of state and district-required forms.
- **Multilingual Support:** Registration in 10+ languages (e.g., Chinese, Italian, Somali, Spanish).

### Compliance & Eligibility
- **Physical Document Management:** Parents can upload photos/scans of student physical exams for school review.
- **Eligibility Tracking:** Real-time dashboards to see which students are "cleared" to play based on forms and physicals.
- **Audit Trails:** Time-stamped logs of every registration and status change for accountability.
- **Emergency Cards:** Instant access for coaches via mobile app to student health alerts and emergency contacts.

### Scheduling & Official Management
- **ArbiterGame:** Centralized scheduling for games and practices across all sports and levels.
- **ArbiterPay:** Integrated electronic payment system for paying officials and event workers.
- **Conflict Detection:** Automated alerts for venue or schedule conflicts.

### Attendance & Communication
- **Attendance Tracking:** Coaches can take attendance for practices and games via the mobile app.
- **Absence Notifications:** Automated email/text alerts to parents when a student is absent.
- **Mass Messaging:** Communicate with specific teams, parents, or all athletes at once.

## 3. Pricing (2026 Estimates)
- **Core Platform:** Starts at ~$1,295 per year for Arbiter Registration (FamilyID).
- **AribterGame (Scheduling):** Free for many state association member schools; ~$110 - $225 for others.
- **ArbiterPay Fees:** Small transaction fees for processing official payments (e.g., $1.50 per payment).
- **Payment Processing:** Standard rates (e.g., PayPal 2.9% + $0.30) for online fee collection.

## 4. Integrations
- **SIS Integration:** Syncs rosters and student data with PowerSchool, Infinite Campus, and others.
- **Payment Partners:** PayPal, Stripe, and MySchoolBucks.
- **Arbiter Ecosystem:** Seamless flow between Registration, Game Scheduling, and Pay.

## 5. Pain Points
- **System Consolidation:** Merging FamilyID into the Arbiter ecosystem has caused some transitional friction for long-time users.
- **Complexity:** The "all-in-one" nature can be overwhelming for smaller schools that only need registration.
- **Mobile Experience:** While improved, some parents still find the mobile registration process slightly cumbersome.

## 6. Competitive Intelligence
- **Primary Rival:** FinalForms (simpler pricing, more focused on form compliance), DragonFly Max.
- **Edge:** The standard for "official assigning" and "scheduling" — most schools already use Arbiter for their game officials.
- **API Status:** REST API with OAuth2 support; focuses on roster and schedule synchronization.

---
*Target path: /root/.openclaw/workspace/builds/school-sis/specs/Athletics/ArbiterSports-Feature-Spec.md*