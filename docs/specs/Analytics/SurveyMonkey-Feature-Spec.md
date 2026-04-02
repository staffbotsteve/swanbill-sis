# Feature Spec: SurveyMonkey for School SIS

## 1. Overview
SurveyMonkey is a leading cloud-based survey platform used in education for gathering feedback from students, parents, staff, and alumni. It serves as a critical "Voice of the Stakeholder" component for the SwanBill SIS.

## 2. Survey Builder & Question Types
### Builder Features
*   **AI-Powered Guidance:** "Build with AI" feature generates surveys from prompts or uploaded documents.
*   **Question Bank:** Access to 100+ certified templates and pre-written questions for educational settings (K-12 and Higher Ed).
*   **Customization:** Themes, branding (logos/colors), and custom CSS for high-fidelity school identity.
*   **Collaboration:** Shared asset library for schools to standardize survey headers/footers and common questions.

### Question Types
*   **Standard:** Multiple Choice, Checkboxes, Dropdown, Star Rating, Slider.
*   **Matrix/Grid:** Likert scales for student satisfaction or teacher evaluations.
*   **Advanced:** File Upload (for documents/assignments), Ranking, Net Promoter Score (NPS), Click Maps.
*   **Specialized:** Image Choice, Demographic, and A/B Testing questions.

## 3. Logic & Branching
*   **Skip Logic:** Skip respondents to specific pages/questions based on an answer.
*   **Question/Page Randomization:** Reduces order bias in academic research or testing.
*   **Advanced Branching:** Complex paths based on multiple conditions (e.g., "If Grade = 10 AND Attendance < 80%").
*   **Carry Forward:** Use selected answers from one question as options in the next.
*   **Disqualification:** Filter out respondents who don't meet criteria (e.g., non-parents taking a parent survey).

## 4. Distribution Methods
*   **Email Invitations:** Track who responded and send automated reminders.
*   **Web/Social:** Embed in School Portal or share via X, Facebook, and LinkedIn.
*   **SMS & QR Codes:** Mobile-first collection for events (e.g., Parent-Teacher night).
*   **Offline App:** "SurveyMonkey Anywhere" for collecting data in remote areas or field trips without Wi-Fi.
*   **Mobile SDK:** Embed surveys directly into the SwanBill Mobile App.

## 5. Analytics & Reporting
*   **Real-time Dashboards:** Instant visualization of response data.
*   **AI Analysis Suite:**
    *   **Sentiment Analysis:** Gauges emotional tone of open-ended student feedback.
    *   **Thematic Analysis:** Automatically categorizes text responses into key themes (e.g., "Food Quality," "Safety").
*   **Crosstab Reports:** Compare responses by student demographics (e.g., Gender, GPA).
*   **Export Formats:** PDF, PPT, XLS, CSV, and SPSS for academic research.

## 6. Integrations
*   **CRM:** Salesforce (sync survey data to student records).
*   **Productivity:** Microsoft Teams/Slack (notifications on new responses).
*   **Data BI:** Tableau/Power BI (push survey data for deeper cross-SIS analysis).
*   **LMS:** Integration with Canvas/Moodle via Zapier or API.

## 7. Education Use Cases
*   **Student Success:** Course evaluations and climate surveys.
*   **Admissions:** Application forms and prospective student interest tracking.
*   **Alumni:** Tracking post-graduation outcomes and donation interest.
*   **Staff:** Professional development feedback and burnout monitoring.

## 8. Pricing Tiers (Education Context)
*   **Basic (Free):** Very limited (10 questions, 100 responses/month).
*   **Individual Advantage:** ~$39/mo (annual). Includes logic, file uploads, and quotas.
*   **Team Premier:** ~$75/user/mo (min 3 users). Shared libraries, full logic, and multi-user collaboration.
*   **Enterprise:** Custom pricing. Includes HIPAA compliance, SSO, and advanced admin controls.

## 9. Pain Points
*   **Cost Scaling:** Per-response overages can be expensive for large school districts.
*   **Free Version Limits:** Almost unusable for professional institutional use.
*   **UI Clutter:** Advanced features can overwhelm non-technical teachers.

## 10. Competitive Intelligence
*   **Google Forms:** Free, but lacks advanced logic and professional reporting.
*   **Qualtrics:** The "Gold Standard" for high-end research but 10x the price of SurveyMonkey.
*   **Typeform:** Better UI/UX for engagement, but weaker deep-analytics compared to SurveyMonkey.
*   **Microsoft Forms:** Included in M365, but lacks the advanced distribution and sentiment analysis of SurveyMonkey.
