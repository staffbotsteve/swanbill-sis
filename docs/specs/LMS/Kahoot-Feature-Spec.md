# Kahoot! Feature Specification

**Project:** SwanBill School Information System (SIS)  
**Role:** Research Scout  
**Date:** 2026-04-02  
**Target File:** /root/.openclaw/workspace/builds/school-sis/specs/LMS/Kahoot-Feature-Spec.md

---

## 1. Executive Summary
Kahoot! is a game-based learning platform used for formative assessment, student engagement, and review. It leverages competition and "blink-of-an-eye" response times to drive classroom energy.

## 2. Core Feature Set

### 2.1 Quiz Creation & Management
*   **Question Types:** Multiple-choice, True/False, Open-ended, Word Cloud, Puzzle (sequencing), Poll, Slider, and Drop Pin.
*   **AI Question Generator:** "Kahoot! AI" can generate full quizzes from a topic, YouTube URL, PDF, or Wikipedia article.
*   **Media Integration:** Support for high-res images, GIFs, and embedded YouTube/Vimeo clips.
*   **Question Bank:** Access to millions of public "kahoots" for remixing.

### 2.2 Game Modes
*   **Classic Mode:** 1:1 competitive play.
*   **Team Mode:** Students collaborate on a single device or join teams from multiple devices.
*   **Student-Paced (Challenges):** Asynchronous mode where questions have no timer (optional) to promote accuracy over speed. Used for homework.
*   **Flashcards & Study Modes:** Personal study tools for students (Flashcards, Practice, Test).

### 2.3 Formative Assessment & Reporting
*   **Real-time Feedback:** Immediate "correct/incorrect" feedback to students.
*   **Visual Reports:** Summary dashboards showing class accuracy, "difficult questions," and students needing help.
*   **Export Options:** Reports downloadable as Excel/Google Sheets for SIS gradebook import.
*   **Pulse Checks:** Quick 1-question polls to gauge classroom mood or understanding.

## 3. Integration Capabilities
*   **Microsoft Teams:** Fully integrated tab; launch games directly within a Teams meeting or channel.
*   **Google Classroom:** Assign "Challenges" directly to Classroom streams; sync rosters.
*   **LMS (General):** Limited deep integration (mostly URL-based sharing) but supports Apple Schoolwork and Remind.
*   **API:** Enterprise-level API access for School Districts to sync data at scale.

## 4. Pricing (Kahoot! for Schools)
*   **Free (Basic):** Basic quiz types, up to 40 players.
*   **Pro (School):** ~$3/teacher/month (billed annually). Includes image library and puzzles.
*   **Premium (School):** ~$6/teacher/month. Includes advanced question types (Word Cloud, Open-ended) and student-paced challenges.
*   **Standard School/District:** $14.99/teacher/month (min 3 licenses). 800+ participants, district-wide collaboration.
*   **Pro School/District:** $24.99/teacher/month. 2000+ participants, custom branding, priority support.

## 5. Pain Points
*   **Speed vs. Depth:** Rewards fastest fingers, which can penalize deep thinkers or students with slower processing speeds.
*   **Complexity Lag:** High-density media can cause lag on older school Wi-Fi/devices.
*   **Novelty Wear-off:** Overuse leads to "Kahoot burnout" where students stop engaging with the content and focus only on the music/ranking.
*   **Pricing Complexity:** Frequent changes to plan tiers and "locking" previously free features behind paywalls.

## 6. Competitive Intelligence
| Competitor | Key Difference |
| :--- | :--- |
| **Quizizz** | Better for asynchronous, student-paced work; "teleport" feature makes adding questions easier. |
| **Blooket** | More "game-like" (tower defense, racing); extremely popular with younger K-12 students. |
| **Gimkit** | Focus on "economy" (earning money to buy power-ups); built by a student for students. |
| **Mentimeter** | Better for higher-ed and professional presentations (cleaner UI, less "noisy"). |
