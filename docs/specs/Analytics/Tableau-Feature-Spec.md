# Feature Spec: Tableau for School SIS

## 1. Overview
Tableau is the industry-leading visual analytics platform for the SwanBill School SIS. It provides high-fidelity, interactive dashboards for complex data storytelling across student achievement, enrollment, and institutional research.

## 2. Dashboard Builder & Visualization
### Builder Features
*   **Drag-and-Drop Canvas:** Intuitive "VizQL" engine translates mouse clicks into data queries.
*   **Visual Storytelling:** "Story Points" feature allows schools to build narrative sequences (e.g., "The Path to Improved Literacy Rates").
*   **Calculated Fields:** Powerful logic engine for creating new metrics (e.g., "Predicted At-Risk Score" based on attendance/grades).
*   **High-Resolution Mapping:** Geographic analysis for school district zoning, student commute patterns, and alumni locations.
*   **Dynamic Filtering:** Global filters (e.g., by Grade, Year, or Campus) apply across all charts in a dashboard.

### Visualization Library
*   **Standard:** Heatmaps, Treemaps, Gantt Charts (for project/schedule planning).
*   **Advanced:** Sankey Diagrams (for student flow/retention), Box Plots (for grade distribution analysis), and Bullet Graphs (for tracking KPIs vs. targets).

## 3. Data Connectors
*   **SIS Databases:** Connect directly to SQL Server, PostgreSQL, or Oracle databases.
*   **Cloud Services:** Google BigQuery, Snowflake, and AWS Redshift.
*   **Flat Files:** Seamlessly blend Excel, CSV, and PDF data with live database feeds.
*   **Web Data Connectors (WDC):** For pulling data from APIs (e.g., SurveyMonkey, Canvas LMS).

## 4. Tableau Server vs. Cloud vs. Public
*   **Tableau Desktop:** The "Authoring" tool for creating workbooks on Windows/Mac.
*   **Tableau Cloud (SaaS):** Fully managed by Salesforce. Best for schools wanting zero-infrastructure overhead. Faster updates and AI-driven insights.
*   **Tableau Server (Self-Hosted):** For institutions with strict data residency or on-premise requirements. Offers maximum control over configuration and security.
*   **Tableau Public:** Free, community-driven platform. Useful for sharing non-sensitive district data (e.g., public graduation rates) but cannot be used for student-level private data.

## 5. Education Use Cases
*   **Enrollment Management:** Real-time funnel analysis from inquiry to enrollment.
*   **Student Retention:** Identifying "at-risk" students by blending attendance, behavior, and academic data.
*   **Institutional Research:** Long-term trend analysis for accreditation and state reporting.
*   **Fundraising/Alumni:** Mapping donor density and tracking capital campaign progress.

## 6. Tableau API & Embedding
*   **REST API:** Programmatically manage users, workbooks, and data sources.
*   **Embedding API:** Integrate Tableau dashboards directly into the SwanBill SIS Portal with single sign-on (SSO).
*   **Prep Conductor:** Automate data cleaning and preparation pipelines via API.

## 7. Education Pricing
*   **Tableau Academic Programs:**
    *   **Students:** Free 1-year license (renewable).
    *   **Instructors:** Free 1-year license for teaching/research.
*   **Institutional Pricing:**
    *   **Creator:** ~$75/user/month (for analysts/admins).
    *   **Explorer:** ~$42/user/month (for staff who interact with data).
    *   **Viewer:** ~$15/user/month (for read-only access for teachers/principals).
*   **Education Discounts:** Often 25-50% off standard commercial rates for site-wide licenses.

## 8. Pain Points
*   **Learning Curve:** Deep functionality (LOD expressions, complex joins) requires significant training.
*   **Cost:** High initial cost for Creator/Explorer licenses compared to Power BI.
*   **Hardware:** Tableau Desktop can be resource-intensive on older school laptops.

## 9. Competitive Intelligence
*   **Power BI:** Tableau’s biggest rival. Power BI wins on price and M365 integration, but Tableau wins on design flexibility and complex data blending.
*   **Google Looker:** Better for web-native data but lacks the deep desktop-authoring power of Tableau.
*   **Qlik:** Strong in data associative engines but lacks Tableau’s visual polish and massive education community.
