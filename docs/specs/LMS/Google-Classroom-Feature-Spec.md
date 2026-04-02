# Google Classroom Feature Spec

## Overview
Google Classroom is a lightweight classroom management service that streamlines the creation, distribution, and grading of assignments within the Google Workspace for Education ecosystem.

## Core Features
- **Assignment Workflow:** Paperless distribution of Google Docs/Slides; automated folder organization in Google Drive.
- **Grading:** Simple point-based or weighted category grading. Includes rubrics and a "comment bank" for fast feedback.
- **Guardian Summaries:** Automated email updates to parents regarding missing/upcoming work and class announcements.
- **Originality Reports:** Built-in plagiarism detection comparing student work against billions of web pages and (in paid tiers) a private repository of past submissions.
- **Add-ons Marketplace:** Direct integration of 3rd party tools (Edpuzzle, Kahoot, Pear Deck) inside the Classroom interface.
- **Organization:** "Classwork" page allows grouping by "Topics" with drag-and-drop reordering.
- **Mobile App:** Highly rated iOS/Android apps; includes a "Student Selector" tool for in-class cold calling.

## Integration Capabilities
- **Classroom API:** Robust REST API for automated rostering, course creation, and grade syncing.
- **Workspace Integration:** Native links to Meet, Calendar, Drive, and YouTube.
- **Grade Export:** Supports export to Google Sheets or CSV; limited native "passback" to non-Google SIS without 3rd party bridges.

## Pricing
- **Fundamentals:** Free for qualifying educational institutions.
- **Education Standard:** ~$3/student/year (Adds security/analytics).
- **Teaching and Learning Upgrade:** ~$4/license/month (Adds advanced Meet/Originality features).
- **Education Plus:** ~$5/student/year (Full feature set + priority support).

## Pain Points
- **Administrative Oversight:** Very difficult for principals/admins to see across all classes without being added as a co-teacher.
- **LMS Limitations:** Lacks sophisticated features like mastery-based tracking, advanced quizzes, or conditional release (modules).
- **Organization:** The "Stream" can become cluttered and hard to search.
- **Parent Access:** Parents cannot see the "Classwork" page directly; they only receive email summaries.

## Competitive Intelligence
- **Vs. Canvas/Schoology:** Google Classroom is significantly easier to adopt but lacks the "enterprise" controls required for district-wide data reporting.
- **Market Position:** Dominant in Chromebook-heavy districts.
- **Strategic Note:** We should focus on *integrating* with Google Classroom via API rather than replacing it, as the "Docs workflow" is a core habit for many teachers.
