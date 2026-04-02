# Blackbaud Education Management Feature Specification

## 1. Executive Summary
Blackbaud Education Management is an integrated, cloud-based suite designed specifically for K-12 private and independent schools. It functions as a "Total School Solution," combining Student Information System (SIS), Learning Management System (LMS), Enrollment Management, and Tuition/Financial Management into a unified platform. While robust and deeply entrenched in the market, it is frequently criticized for its "clunky" user interface, high cost, and fragmented underlying architecture (a result of various acquisitions).

---

## 2. Core Feature Modules

### 2.1 Student Information System (SIS)
The central hub for all student data, providing a "360-degree view" of the student lifecycle.
*   **Student Records:** Holistic profiles including academic history, attendance, medical records, and behavioral logs.
*   **Scheduling:** Tools for complex master scheduling, course requests, and automated conflict resolution.
*   **Attendance:** Class-based and daily attendance tracking with bulk entry and parent notification capabilities.
*   **Grading & Transcripts:** Customizable grading scales (numeric, letter, narrative), GPA calculation, and automated transcript generation.
*   **Compliance Reporting:** Built-in tools for state/federal reporting (e.g., IPEDS for higher ed) and internal audits.

### 2.2 Learning Management System (LMS)
Designed to reduce teacher workload and centralize the classroom experience.
*   **Assignment Center:** Unified view of homework, assessments, and discussions with "missing work" alerts.
*   **Digital Gradebook:** Features shortcuts, rubrics, and automated grading for online assessments.
*   **Course Pages:** Responsive pages for content hosting, interactive discussions, and file sharing.
*   **AI Question Generator:** Tools to help teachers generate assessment questions from course materials.
*   **Athletic & Group Management:** Dedicated portals for team rosters, game schedules, and extracurricular activity tracking.

### 2.3 Enrollment Management System (Admissions)
Manages the "funnel" from inquiry to registered student.
*   **Customizable Applications:** Drag-and-drop form builders with conditional logic.
*   **Candidate Portal:** Self-service tracking for families to monitor checklist progress and upload documents.
*   **Interview Scheduling:** Automated self-scheduling for tours and interviews.
*   **Committee Review Hub:** Centralized interface for admissions committees to score and comment on applicants.
*   **Contract Management:** Digital enrollment contracts with integrated deposit payments.

### 2.4 Billing & Tuition Management
Handles the financial relationship between the school and the family.
*   **Payment Plans:** Flexible installment options and automated recurring payments (ACH/Credit Card).
*   **Tuition Management Portal:** Mobile-friendly interface for families to view statements and pay bills.
*   **Financial Aid Integration:** Awards flow directly from the Financial Aid module onto enrollment contracts.
*   **Subledger Accounting:** A "true" accounts receivable subledger that syncs with General Ledger systems (specifically Financial Edge NXT).

---

## 3. Integration & Tech Stack

### 3.1 SKY API & Webhooks
*   **SKY API:** A RESTful API platform allowing developers to access data across Core, School, Enrollment, and Billing modules.
*   **Webhooks:** Support for real-time data triggers for external system synchronization.
*   **OneRoster:** Implementation of IMS Global OneRoster standards for roster syncing with third-party tools.

### 3.2 Single Sign-On (SSO)
*   **Blackbaud ID (BBID):** Centralized identity management using OAuth 2.0.
*   **Third-party IdP:** Support for Google, Microsoft (Azure AD), and SAML-based identity providers.

### 3.3 Mobile Capabilities
*   **"School Journey" App:** The primary mobile application for K-12, providing tailored views for:
    *   **Parents:** Schedules, grades, tuition payments, and school news.
    *   **Students:** Assignment tracking, online submissions, and athletic updates.
    *   **Teachers:** Attendance taking, gradebook access, and communication tools.

---

## 4. Customization & Compliance

### 4.1 Customization vs. Configuration
*   **Configuration:** Defining the "skeleton" (roles, terms, grade levels, buildings).
*   **Customization:** Branding (logos, colors), custom fields on forms, and unique grading formulas.
*   **Limitations:** While highly configurable, deep code-level customization is restricted as it is a SaaS product.

### 4.2 Compliance & Security
*   **FERPA:** Role-based access control (RBAC) specifically designed to meet FERPA requirements (e.g., restricting medical data to nurse roles).
*   **Medical Privacy:** Granular controls for parents to authorize who sees specific health info.
*   **Data Hosting:** Cloud-based hosting with enterprise-grade security and disaster recovery.

---

## 5. Competitive Intelligence

### 5.1 Pricing Model & Contract Structure
*   **Model:** Quote-based subscription pricing. Not transparent.
*   **Structure:** Annual or multi-year contracts.
*   **Hidden Costs:** Implementation fees (often high), training costs, and "per-family" administration fees (~$25-$50).
*   **Estimated Ranges:** 
    *   Small Schools (<500 students): ~$15k - $30k/year.
    *   Mid-to-Large Schools: $50k - $150k+/year depending on module count.

### 5.2 Market Position: "The Integrated Giant"
*   **Strength:** Deep integration with Raiser's Edge (Fundraising) and Financial Edge (Accounting). If a school uses the "Full Stack," the data flow is unmatched.
*   **Weakness:** The "Full Stack" is expensive and hard to leave. Individual modules are often outperformed by niche competitors (e.g., Canvas for LMS, OpenApply for Admissions).

### 5.3 Common Pain Points (The "Why They Leave" List)
1.  **Clunky UI:** Navigation is described as non-intuitive and requiring too many clicks.
2.  **Support Lag:** Slow response times for complex technical issues.
3.  **Fragmented Data:** Despite being "integrated," users report discrepancies between "Database View" (old) and "Web View" (NXT).
4.  **Steep Learning Curve:** New staff require significant training to be productive.
5.  **Cost Hikes:** Annual price increases with perceived lack of innovation.

### 5.4 Key Competitors
*   **Veracross:** The primary "premium" alternative. Known for a superior "one-record" data architecture.
*   **Alma:** Favored for its modern, easy-to-use interface and better reporting tools.
*   **Toddle:** Gaining ground in IB (International Baccalaureate) schools for its superior pedagogical tools.

---

## 6. Comparison: Education Management vs. Standalone Products

| Feature | Education Management (EM) | Raiser's Edge / Financial Edge (RE/FE) |
| :--- | :--- | :--- |
| **Primary Goal** | Running the school (Teaching/Learning) | Institutional Sustainability (Money/Ops) |
| **Key Users** | Teachers, Students, Parents | Development Officers, CFOs, Accountants |
| **Data Focus** | Attendance, Grades, Schedules | Donors, Gifts, Grants, General Ledger |
| **Relationship** | EM feeds data into RE/FE | RE/FE provides the financial "back-office" |

---
*End of Specification*
