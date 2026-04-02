# Feature Spec: Power BI for School SIS

## 1. Overview
Power BI is the primary business intelligence platform for schools heavily invested in the Microsoft 365 ecosystem. For the SwanBill School SIS, it provides a cost-effective, high-integration solution for operational reporting and data-driven decision-making.

## 2. Report Builder & Data Modeling
### Builder Features
*   **Power BI Desktop:** Free Windows-based application for authoring reports and data models.
*   **Power Query Editor:** Industry-standard ETL (Extract, Transform, Load) tool for cleaning and shaping SIS data without coding.
*   **DAX (Data Analysis Expressions):** Powerful formula language for creating measures and calculated columns (e.g., "Year-to-Date Attendance Average").
*   **Q&A (Natural Language):** Teachers can ask questions like "Show me average grades by class" and Power BI generates the visual.
*   **Paginated Reports (Report Builder):** Standalone tool for high-fidelity, printable reports (e.g., Invoices, Report Cards, Transcripts).

### Data Modeling
*   **Relationships:** Drag-and-drop relationship management between SIS tables (Students, Courses, Grades, Teachers).
*   **Row-Level Security (RLS):** Ensure teachers only see data for their students, and principals see their entire school.
*   **Data Gateways:** Connect cloud reports to on-premise SIS databases securely.

## 3. Power BI Service vs. Desktop
*   **Desktop:** For authoring, data modeling, and local development. (Free for all users).
*   **Service (Cloud):** For sharing, collaborating, and creating dashboards. Requires a paid license (Pro/Premium).
*   **Workspaces:** Collaborative areas for school departments (e.g., "Math Department," "Admissions").
*   **Apps:** Package sets of reports and dashboards for wide consumption by school staff.

## 4. Connectors & API
*   **M365 Connectors:** Excel, SharePoint, OneDrive, and Microsoft Teams.
*   **Database Connectors:** SQL Server, Azure SQL, PostgreSQL, and Dataverse.
*   **Power BI REST API:**
    *   **Automation:** Refresh datasets, manage users, and export reports via script.
    *   **Power BI Embedded:** Integrate reports directly into the SwanBill SIS web portal.
    *   **Custom Visuals:** SDK for developers to build school-specific charts.

## 5. Education Licensing (M365 Integration)
*   **Free License:** Included with most school M365 accounts. Good for individual analysis but no sharing.
*   **Power BI Pro (Education):**
    *   **Price:** ~$1.25/user/month (for students) and ~$2.30/user/month (for faculty).
    *   **Included In:** Microsoft 365 Education A5 (often "free" if the school already has A5).
*   **Power BI Premium:**
    *   **Capacity-based:** Provides dedicated resources for large districts.
    *   **Premium Per User (PPU):** ~$20/user/month (Standard) or discounted for Education.
    *   **F-SKUs (Fabric):** New flexible capacity model for schools with variable data needs.

## 6. Education Use Cases
*   **Classroom Performance:** Real-time dashboards for teachers to monitor student grades vs. targets.
*   **Attendance Tracking:** Automated alerts for students with high absenteeism.
*   **SIS Resource Management:** Analyzing teacher workloads and classroom utilization.
*   **Graduation Rate Forecasts:** Using AI visuals to predict student outcomes based on historical patterns.

## 7. Comparison: Power BI vs. Tableau for Schools
*   **Integration:** Power BI is the clear winner for "Microsoft Schools" (Teams, Outlook, Excel).
*   **Cost:** Power BI is significantly cheaper for most schools, especially those with M365 A5.
*   **Ease of Use:** Power BI feels more like Excel, reducing training time for administrative staff.
*   **Visualization:** Tableau remains the winner for "Pixel-Perfect" design and artistic data storytelling.
*   **Authoring:** Tableau Desktop runs on Mac/Windows; Power BI Desktop is Windows-only (major pain point for Mac-heavy schools).

## 8. Pain Points
*   **Windows-Only Desktop:** Mac-using analysts must use a VM or web-authoring (which is limited).
*   **DAX Complexity:** Simple DAX is easy, but advanced measures have a steep learning curve.
*   **Service vs. Desktop Confusion:** Users often struggle with what happens in "the cloud" vs. "on the machine."

## 9. Competitive Intelligence
*   **Tableau:** Superior design but 3-4x the cost for most schools.
*   **Google Looker Studio:** Free and easy for simple dashboards, but lacks the data modeling power of Power BI.
*   **Qlik Sense:** Strong in discovery but lacks the "Everywhere" presence of Power BI.
