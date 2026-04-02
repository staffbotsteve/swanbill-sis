# Grammarly for Education Feature Specification

**Project:** SwanBill School Information System (SIS)  
**Role:** Research Scout  
**Date:** 2026-04-02  
**Target File:** /root/.openclaw/workspace/builds/school-sis/specs/LMS/Grammarly-Education-Feature-Spec.md

---

## 1. Executive Summary
Grammarly for Education is a writing support ecosystem that moves beyond spell-check into stylistic coaching, plagiarism detection, and institutional analytics. It aims to improve student writing quality while providing administrators with data on writing trends.

## 2. Core Feature Set

### 2.1 Writing Assistance
*   **Grammar & Style:** Real-time correction of grammar, punctuation, and spelling.
*   **Clarity & Conciseness:** AI-driven suggestions to remove fluff and improve readability.
*   **Tone Detection:** Analyzes the "emotional" impact of the writing (e.g., confident, formal, friendly).
*   **Vocabulary Enhancement:** Context-aware synonym suggestions.

### 2.2 Grammarly Authorship
*   **Transparency Tool:** Shows a "playback" of the writing process (time spent, sources used).
*   **AI vs. Human Breakdown:** Categorizes text as "Student Typed," "AI Generated," or "External Paste."
*   **Citation Support:** Automatic citation generation for various styles (APA, MLA, Chicago).

### 2.3 Academic Integrity
*   **Plagiarism Checker:** Compares against ProQuest databases and billions of web pages.
*   **AI Use Detection:** Integrated into the Authorship report to show where generative AI was used.

### 2.4 Analytics Dashboard (for Teachers/Admins)
*   **Writing Progress:** Aggregate data on common mistakes across a class or institution.
*   **Engagement Metrics:** Tracks how many students are active and improving their "Performance Score."
*   **Tone Trends:** Insights into the prevailing tones used in student assignments.

## 3. Integration Capabilities
*   **LMS (Canvas):** Fully integrated via LTI; appears within the Canvas editor for students and the SpeedGrader for teachers.
*   **Browser Extensions:** Works across Google Docs, Gmail, and web-based LMS editors.
*   **Desktop Apps:** Native apps for Windows and macOS that work within MS Word and other local applications.
*   **Google Workspace:** Deep integration with Google Docs and Slides.

## 4. Pricing & Licensing
*   **Institutional Licensing:** Custom quotes only; usually based on the number of students/staff.
*   **Grammarly for Education Tiers:**
    *   **Group/Department:** Small scale (e.g., 5–10 seats).
    *   **Site License:** Campus-wide access with SSO (Single Sign-On) support.
*   **Education Discount:** Individual students/teachers can often get ~40% off the standard "Pro" price via verification (SheerID).
*   **Free Version:** Basic grammar and spelling only; no plagiarism or style coaching.

## 5. Pain Points
*   **"Homogenized" Writing:** Can make all student writing sound like a standard business memo, stripping away personal voice.
*   **Generative AI Conflict:** Some teachers ban it because the "Generative" features can write whole paragraphs, blurring the line between "assisting" and "cheating."
*   **Context Blindness:** Sometimes suggests "fixes" that change the technical meaning in specialized subjects (e.g., science or law).
*   **Performance Overhead:** The browser extension can significantly slow down web applications or LMS editors.

## 6. Competitive Intelligence
| Competitor | Key Difference |
| :--- | :--- |
| **ProWritingAid** | Much deeper "technical" reports (20+ types); preferred by creative writers and long-form authors. |
| **Quillbot** | Focused on "paraphrasing" and "summarizing"; often seen by teachers as a tool for "spinning" content. |
| **Hemingway** | Purely focused on readability/conciseness; no grammar or plagiarism tools. |
| **Microsoft Editor** | Built into Office 365; "free" for many schools but less advanced AI/analytics than Grammarly. |
