# Veracross Feature Specification & Competitive Intelligence

## 1. Executive Summary
Veracross is a high-end, SaaS-based "All-in-One" School Information System (SIS) designed exclusively for independent and private K-12 schools. Its architectural cornerstone is a **single-database, "one-person, one-record" model**, which eliminates data silos across admissions, academics, development, and finance. While powerful, it is known for high costs, a steep learning curve, and a "self-directed" implementation philosophy that puts significant burden on the school's staff.

---

## 2. Complete Feature List

### 2.1 Core SIS & Academics
*   **Student Records:** Lifecycle management from prospect to alumni in a single record.
*   **Attendance:** Multi-device entry, automated reminder emails, and integration with health/security.
*   **Grading & Report Cards:** Supports numeric, narrative, and qualitative grading. Automated GPA and honor roll calculation. Custom-tailored academic documents.
*   **Scheduling:** Management of departments, courses, classes, and complex rotations.
*   **Curriculum Management:** Centralized repository for course descriptions and standards.
*   **Health Tracking:** Online tracking of immunizations, daily clinic visits, and critical alerts (Magnus Health integration).

### 2.2 CRM & Communications
*   **Foundational CRM:** Tracks every constituent (parent, student, donor, alumni, staff).
*   **Communication Tools:** Branded email templates, personalized mail merges, and recipient list segmentation.
*   **Household Management:** Complex family structure support (split households, multiple guardians).
*   **News Management:** Targeted content delivery to specific portals (extra cost).

### 2.3 Admissions & Enrollment
*   **Inquiry & Application:** Customizable online forms with account lookup to prevent duplicates.
*   **Candidate Management:** Pipeline tracking, checklist-driven workflows, and automated decision letters.
*   **Event Management:** Integrated scheduling for tours, interviews, and open houses.
*   **Online Enrollment:** Contract management, deposit collection, and seamless data flow into the SIS.

### 2.4 Business & Financials
*   **Tuition Management (VC Pay):** Automated billing, AutoPay, and multi-channel payment processing (ACH/Credit).
*   **Student Billing:** Invoicing for incidental fees, deposits, and athletics.
*   **General Ledger:** Full school accounting suite including Accounts Payable, Purchase Orders, and Purchasing/Receiving.
*   **Development/Advancement:** Fundraising management, donor tracking, and giving forms.

### 2.5 Portals
*   **Constituent-Specific:** Dedicated views for Parents, Students, Faculty, Board, and Alumni.
*   **Faculty Portal:** Attendance, gradebook, lesson planning, and student behavior logging.
*   **Parent Portal:** Real-time access to grades, calendars, news, and financial statements.

---

## 3. Pricing Model
Veracross does not publish standard pricing; it is highly customized.
*   **Structure:** Annual subscription based on student head-count and modules selected.
*   **Implementation:** Known to be expensive (often $20k - $100k+ depending on school size).
*   **Add-ons:** News management, specific integrations (e.g., Clever), and advanced modules are often priced separately.
*   **Hidden Costs:** Significant internal staff time required for "self-directed" implementation.

---

## 4. Integration Capabilities
*   **Open API:** Robust REST-based API using OAuth/JSON for read/write access.
*   **Standard Compliance:** OneRoster compliant for easy integration with LMS (Canvas, Google Classroom).
*   **Third-Party Ecosystem:** 200+ partners including Finalsite (Web), Magnus Health (Health), Paymerang (Finance), and CrisisGo (Security).
*   **SSO:** Supports SAML/OAuth for seamless login across third-party tools.

---

## 5. Mobile Capabilities
*   **Platform:** Native iOS and Android apps (often branded via Digistorm partnership).
*   **Features:** Push notifications, biometric login, digital directory, schedule/grade access, and absence reporting.
*   **Faculty Focus:** Mobile attendance and behavior logging for on-the-go teachers.

---

## 6. Compliance & Security
*   **FERPA:** Built-in controls for student record privacy and "School Official" access.
*   **GDPR:** Compliant for international/EU-based independent schools.
*   **HIPAA:** Compliant health record management via Magnus Health.
*   **Infrastructure:** SOC2 audited, 24/7 security operations center, and encryption at rest/transit.

---

## 7. Competitive Intelligence: Pain Points & Opportunities

### 7.1 Known Pain Points (The "Why Schools Leave")
1.  **Steep Learning Curve:** The system is "Axiom" (backend) heavy. Many users find the interface unintuitive and overwhelming.
2.  **Implementation Burden:** Veracross provides the "structure" but expects the school to do the "heavy lifting" of data migration and configuration.
3.  **Rigid Customization:** While "configurable," true customization often requires deep technical knowledge or paid Veracross intervention.
4.  **Reporting Complexity:** Powerful query tools exist, but they are difficult for non-technical users to master.
5.  **Cost:** Generally considered one of the most expensive options in the K-12 market.

### 7.2 All-in-One vs. Best-of-Breed Comparison
*   **The Veracross Approach (All-in-One):** Superior data integrity. No "syncing" issues because everything lives in one table. Perfect for schools that want one vendor to blame.
*   **The Replacement Opportunity:** Schools are often frustrated by the "jack of all trades, master of none" aspect of Veracross (e.g., their LMS is often replaced by Canvas). A system that offers the **data integrity of an all-in-one** with the **UI/UX and specialized depth of best-of-breed** is the "holy grail."

### 7.3 Target Market Strategy
Veracross targets "Elite" independent schools. Their sales pitch focuses on "Mission Alignment" and "Unified Vision."
*   **Opportunity:** Target the "Mid-Market" independent schools that need the power of Veracross but cannot afford the price tag or the 12-month "self-directed" implementation slog.

---

## 8. Architect's Notes for SwanBill
*   **The Database is the Product:** Veracross wins because of its schema, not its UI. Ensure SwanBill has a robust, unified person-record schema from Day 1.
*   **Automate Implementation:** If SwanBill can automate 80% of the data migration/setup that Veracross leaves to the school, it's an instant win.
*   **UI/UX as a Feature:** Veracross looks like an enterprise database from 2015. A modern, "consumer-grade" interface for teachers and parents is a major differentiator.
