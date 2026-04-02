# PowerSchool SIS Feature Specification

This document provides a comprehensive overview of the features, technical capabilities, and market positioning of PowerSchool SIS. It is intended to serve as a reference for architecting a replacement system.

## 1. Core Feature Set

### 1.1 Grades & Academic Management
*   **PowerTeacher Pro Gradebook:** A modern, HTML5-based web gradebook (replacing the older Java-based PowerTeacher).
    *   Supports traditional (letter/numeric) and Standards-Based Grading (SBG).
    *   Multi-section assignment management (one-to-many assignment creation).
    *   Grade scales: Customizable alpha/numeric scales per course/section.
    *   Calculation Methods: Weighted GPA, Simple, Weighted Percent, etc.
*   **Historical Grades:** Stores final/permanent grades used for transcripts and report cards.
*   **Transcripts & Report Cards:** Built-in PDF generation for official records.
*   **Standards Management:** Alignment of assignments to state/district standards with mastery tracking.

### 1.2 Attendance
*   **Flexible Tracking:** Daily, section, or time-based (by the minute) attendance.
*   **Multiple Entry Points:** Teachers (via portal), Admins (single/bulk entry), and Parents (reporting absences).
*   **Automated Notifications:** Threshold-based triggers for truant/excessive absences (e.g., auto-generating letters).
*   **Concurrent Attendance:** Consolidates roll calls for overlapping sections/classes.
*   **Remote/Hybrid Support:** Specific codes and tracking for remote learners and cohorts.

### 1.3 Scheduling
*   **Automated Master Schedule Builder:** Balances courses, teachers, and rooms against student requests.
*   **Visual Scheduler:** Drag-and-drop interface for administrators to visualize the master schedule.
*   **Walk-in Scheduling:** Real-time individual student schedule modification.
*   **Student Course Requests:** Online portal for students/families to submit requests for the upcoming year.

### 1.4 Reporting
*   **Ad Hoc Reports:** Custom report builder for filtering by demographics, attendance, behavior, and health.
*   **State/Provincial Reporting:** Specialized, pre-built reports for compliance and funding (updated per state regulations).
*   **Enterprise Reporting:** High-level analytics across multiple schools/districts.
*   **Data Validation:** Integrated tools to check for errors before submitting state reports.

## 2. Portals & Mobile Capabilities

### 2.1 Teacher Portal (PowerTeacher)
*   **Classroom Management:** Taking attendance, seating charts, and student demographics access.
*   **Quick Lookup:** One-click access to student schedules, grades, and parent contact info.
*   **Internal Communication:** Tools for emailing students/parents directly from class lists.

### 2.2 Parent & Student Portal
*   **Real-time Visibility:** Dashboard for current grades, attendance, and assignment due dates.
*   **Financials:** View fee balances and meal fund balances.
*   **Daily Bulletins:** Centralized school announcements and newsfeeds.

### 2.3 Mobile App (iOS/Android/Apple Watch)
*   **Push Notifications:** Instant alerts for grade changes, assignment scores, and absences.
*   **Biometric Login:** Support for FaceID/TouchID.
*   **Multi-Student Support:** Single account login for parents with children in multiple schools.

## 3. Data & Integrations

### 3.1 API Capabilities
*   **REST API:** Comprehensive endpoints for student, staff, and course data (OAuth 2.0).
*   **SOAP/XML Web Services:** Supported for legacy integrations.
*   **Plugin Framework:** Allows developers to inject custom pages (using PSHTML) and extend the UI.
*   **Database Access:** ODBC/JDBC access available for direct queries (often restricted in cloud/hosted environments).

### 3.2 Integration Standards
*   **LTI (Learning Tools Interoperability):** 1.1 and 1.3 Advantage support for LMS (Canvas, Schoology, Blackboard).
*   **Ed-Fi:** Certified for Data Standard v4/v5 for interoperable data exchange.
*   **OneRoster:** 1.1 REST API for automated rostering and grade passback.

### 3.3 Data Import/Export
*   **AutoComm:** Scheduled SFTP/remote imports for bulk data (students, courses, staff).
*   **AutoSend:** Scheduled SFTP exports to third-party vendors.
*   **Data Export Manager (DEM):** Manual tool for exporting specific tables/fields to CSV.

## 4. Compliance & Configuration

### 4.1 Security & Compliance
*   **FERPA/COPPA:** Compliant data handling; signatory of the Student Privacy Pledge 2020.
*   **State Compliance:** Dedicated teams update reporting modules to match state funding requirements.

### 4.2 Customization
*   **Custom Fields:** Unlimited user-defined fields for Students, Sections, and Staff.
*   **Custom Page Manager:** Ability to overwrite stock pages or create new ones within the "Site Structure."
*   **Localization:** Support for multi-language portals and report cards.

## 5. Competitive Intelligence

### 5.1 Pricing Model
*   **Per-Student Model:** Estimated at **$7 – $16 per student annually**.
*   **Opaque Pricing:** Tiers are not public; requires direct sales contact for quotes.
*   **Hidden Costs:** Significant add-on fees for implementation, data migration, and training.

### 5.2 Common Pain Points
*   **Usability:** Often described as "unintuitive" and "clunky"; high learning curve for new staff.
*   **Technical Stability:** Reports of frequent glitches, app crashes, and system downtime.
*   **Security Trust:** Massive data breaches (Dec 2024) have severely damaged reputation, leading some states (e.g., North Carolina) to exit.
*   **Vendor Lock-in:** Complex database schemas and proprietary "PSHTML" make it difficult to migrate away.

### 5.3 Retention Factors (Why Schools Stay/Leave)
*   **Stay:** Deeply entrenched workflows; "Good enough" state reporting; High cost of migration (data mapping is painful).
*   **Leave:** Security concerns (breaches); Desire for modern, user-friendly UI (e.g., Infinite Campus); Poor handling of support requests.

### 5.4 Market Positioning
PowerSchool is the "Legacy Leader"—it has the largest market share and the most robust compliance features, but is increasingly seen as a "bloated" and "insecure" system compared to modern alternatives like Infinite Campus or specialized niche SIS platforms.
