# Turnitin Feature Specification

**Project:** SwanBill School Information System (SIS)  
**Role:** Research Scout  
**Date:** 2026-04-02  
**Target File:** /root/.openclaw/workspace/builds/school-sis/specs/LMS/Turnitin-Feature-Spec.md

---

## 1. Executive Summary
Turnitin is the industry standard for academic integrity, primarily focused on plagiarism detection and AI-writing identification. It has evolved into a full feedback and grading suite through acquisitions like Gradescope.

## 2. Core Feature Set

### 2.1 Originality Checking
*   **Similarity Report:** Compares submissions against 99+ billion web pages, 1.8+ billion student papers, and 200+ million scholarly articles.
*   **iThenticate:** Specialized version for researchers and publishers to check manuscripts before submission.
*   **Source Management:** Allows instructors to exclude quotes, bibliographies, or small matches to refine accuracy.

### 2.2 AI Writing Detection
*   **Detection Model:** Identifies patterns characteristic of LLMs (GPT-3.5, GPT-4, etc.).
*   **Percentage Score:** Provides a separate "AI Score" alongside the Similarity Score.
*   **Integrity Alerts:** Flagging of "text manipulation" (e.g., replaced characters, hidden text) intended to bypass filters.

### 2.3 Feedback Studio & Grading
*   **QuickMark:** Drag-and-drop library of standard comments for faster grading.
*   **Voice Comments:** Up to 3 minutes of audio feedback per student.
*   **Rubrics:** Interactive rubrics for consistent criterion-based grading.
*   **PeerMark:** Facilitates student-to-student peer review workflows.

### 2.4 Gradescope
*   **Paper-based Grading:** Scan and grade handwritten exams with AI-assisted answer grouping.
*   **Code Grading:** Specialized environment for computer science assignments (autograding).
*   **Dynamic Rubrics:** Modify rubrics mid-grading and have changes retroactively apply to all previously graded items.

## 3. Integration Capabilities
*   **LTI 1.3:** The gold standard for LMS integration (Canvas, Blackboard, Moodle, D2L).
*   **Canvas Integration:** Deep integration allows Turnitin to appear as an "External Tool" or "Plagiarism Framework" within Canvas assignments.
*   **Grade Passback:** Automatically syncs scores from Turnitin/Gradescope back to the LMS gradebook.
*   **Roster Sync:** Automatically pulls student lists from the LMS.

## 4. Pricing (K-12 vs. Higher Ed)
*   **Model:** Institutional licensing only (FTE - Full-Time Equivalent pricing). No individual teacher/student accounts.
*   **K-12:** Often bundled at a district level; prices range from $2–$5 per student per year depending on the suite (Basic vs. Feedback Studio).
*   **Higher Ed:** Significantly higher; often negotiated contracts in the tens of thousands for mid-sized universities.
*   **Gradescope:** Sold as a separate add-on or standalone; has a "Basic" free tier for individual instructors.

## 5. Pain Points
*   **AI False Positives:** Significant controversy regarding the "AI Score" flagging non-native English speakers or very formal human writing.
*   **Punitive Vibe:** Focus on "catching" students rather than teaching them can create a culture of distrust.
*   **Self-Plagiarism:** Flagging students for submitting their own drafts or previous work if not configured correctly.
*   **Black Box:** The proprietary nature of the detection algorithm makes it difficult for students to "prove" they didn't cheat if flagged.

## 6. Competitive Intelligence
| Competitor | Key Difference |
| :--- | :--- |
| **Copyleaks** | Faster AI detection updates; better at detecting "paraphrased" AI content. |
| **Originality.ai** | Heavily focused on web publishers; generally considered more "aggressive" (higher false positive risk). |
| **Unicheck** | Often cheaper; simpler UI; now owned by Turnitin (gradually being phased out/integrated). |
| **SafeAssign** | Blackboard's native tool; free with Blackboard but less comprehensive database than Turnitin. |
