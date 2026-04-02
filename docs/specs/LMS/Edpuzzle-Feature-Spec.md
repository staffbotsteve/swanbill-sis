# Edpuzzle Feature Spec

## Overview
Edpuzzle is a specialized video-instruction tool that allows teachers to turn any video into an interactive lesson by embedding questions and tracking student comprehension.

## Core Features
- **Video Editing:** Basic "Cutter" tool to trim videos. Supports YouTube, Vimeo, and teacher uploads.
- **Embedded Questions:** Multiple-choice (auto-graded), open-ended, and "Notes" (text/audio) can be placed at specific timestamps.
- **Prevent Skipping:** Mandatory setting that prevents students from fast-forwarding through the video.
- **Student Tracking:** Real-time analytics showing which students watched the video, how many times they re-watched segments, and their score.
- **Live Mode:** Allows a teacher to project a video to the whole class while students answer questions on their own devices simultaneously.
- **Content Library:** Millions of pre-made "Edpuzzles" created by other teachers, searchable by subject and grade level.
- **Screen Recording:** Browser extension for teachers to record their own lessons and instantly turn them into interactive videos.

## Integration Capabilities
- **LMS Integrations:** Native "Grade Passback" for Google Classroom, Canvas, Schoology, and Moodle.
- **Embedding:** Allows embedding interactive videos into any website/LMS via iframe.
- **YouTube API:** Relies heavily on YouTube; issues arise if school networks block YouTube at the domain level.

## Pricing
- **Basic (Free):** Storage for 20 videos.
- **Pro Teacher:** ~$12.50/month (billed annually) for unlimited storage.
- **Pro School/District:** Custom quoted. Offers unlimited storage for all teachers, admin dashboards, and centralized billing (Example: ~$45k/year for a large district).

## Pain Points
- **Storage Limits:** The 20-video limit on the free plan is a major barrier for power users.
- **Editing Limitations:** You cannot "merge" two videos or perform advanced post-production inside the tool.
- **Network Dependency:** If a school blocks YouTube, the majority of Edpuzzle's library becomes inaccessible.
- **Communication:** No built-in way for students to ask questions *about* a specific timestamp in the video.

## Competitive Intelligence
- **Alternatives:** Nearpod (Video Feature), PlayPosit (more complex/enterprise), Kaltura (Higher Ed).
- **Market Position:** Edpuzzle is the "Gold Standard" for K-12 video instruction due to its simplicity and vast community library.
- **Strategic Note:** SwanBill should focus on *incorporating* similar "timestamped assessment" logic into its core video player, as Edpuzzle's pricing and 20-video limit are significant teacher pain points.
