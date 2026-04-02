# CBHS Lovable App — Comprehensive Review

**Reviewed by:** Swanbot (Project Falcon QA)  
**Date:** 2026-04-02  
**URL:** https://cbhs.lovable.app  
**Method:** Automated Playwright login + DOM scraping for all 6 roles, 26+ screens per admin role

---

## Executive Summary

The Lovable prototype is **impressive for a rapid build** — it covers a wide surface area of SIS functionality with real data, role-based navigation, and functional CRUD screens. It's a solid proof-of-concept that validates the module structure and user flows.

However, it has **critical gaps** that prevent it from being production-ready, and several design/UX issues that need to be addressed in Project Falcon. This review catalogs everything so we build the production system right the first time.

---

## 1. Role Access Audit

### ✅ Working Logins
| Role | Email | Login | Dashboard | Nav Items |
|------|-------|-------|-----------|-----------|
| Super Admin | principal@cbhs.edu | ✅ | Full admin dashboard | 26 sidebar items |
| Admin | admin@cbhs.edu | ✅ | Same as Super Admin | 26 sidebar items (identical) |
| Teacher | d.kim@cbhs.edu | ✅ | Teacher-specific dashboard | 10 sidebar items |
| Counselor | p.harris@cbhs.edu | ✅ | Counselor-specific dashboard | 14 sidebar items |

### ❌ Broken Logins
| Role | Email | Result |
|------|-------|--------|
| Student | student1@cbhs.edu | **"Invalid login credentials"** — stuck on /login |
| Parent | parent1@cbhs.edu | **"Invalid login credentials"** — stuck on /login |

**Impact:** Student and parent portals are completely untestable. These are arguably the most important user-facing roles (parents are the paying customers in private schools).

---

## 2. Navigation & Information Architecture

### Super Admin / Admin Sidebar (26 items)
```
Dashboard, Students, Staff, Enrollment, Courses, Course Catalog,
Attendance, Gradebook, Progress Reports, Report Cards, Transcripts,
Messages, Master Schedule, Registration Overview, Schedule Conflicts,
Departments, Bell Schedules, Waitlists, Reports, Honor Roll,
Graduation, College Readiness, Counselor Dashboard, Essay Review,
College Report, Settings
```

### Teacher Sidebar (10 items)
```
Dashboard, Students, Courses, My Schedule, Course Catalog,
Attendance, Gradebook, Progress Reports, Report Cards, Messages
```

### Counselor Sidebar (14 items)
```
Dashboard, Students, My Schedule, Course Catalog, Messages,
Graduation, College Readiness, Counselor Review, Registration Review,
Schedule Conflicts, Waitlists, Essay Review, College Report, Reports
```

### Issues Found

| # | Issue | Severity | Details |
|---|-------|----------|---------|
| N1 | **Super Admin = Admin (identical)** | 🟡 Medium | Both roles see exactly the same 26 nav items and same dashboard. There's no differentiation. Super Admin should have tenant/system-level settings that Admin doesn't. |
| N2 | **No role-based route protection** | 🔴 Critical | Teacher can see ALL 55 courses (entire catalog), not just their assigned sections. Teacher can also see "Add Student" button — should they be able to create students? |
| N3 | **Flat sidebar — no grouping** | 🟡 Medium | 26 items in a flat list is overwhelming. Need module grouping (Academics → Gradebook/Courses/Schedule; Enrollment → Registration/Waitlists; etc.) |
| N4 | **Bottom nav bar has only 4-5 items** | 🟡 Medium | Home, Students, Staff/Courses, Messages. The other 20+ items are sidebar-only. Mobile users lose access to most functions. |
| N5 | **Counselor sees "My Schedule" → teacher-schedule** | 🟢 Low | Shares the teacher schedule page. May need a counselor-specific schedule view (meetings, student appointments). |
| N6 | **No breadcrumbs anywhere** | 🟡 Medium | Deep pages like essay-review or college-readiness-report have no navigation context. |

---

## 3. Screen-by-Screen Functional Review

### 3.1 Dashboard (/)

**Super Admin Dashboard:**
- Stats cards: Total Students (20), Total Staff (9), Active Courses (55), School Year (2024-2025)
- Quick action cards: Manage Students, Manage Staff, Manage Courses, Attendance, Gradebook, Reports
- ✅ Good: Clean overview with actionable shortcuts

**Teacher Dashboard:**
- Stats: My Sections (10), My Students (20), Attendance Today (0/10), Pending Grades
- Section cards with "Take Attendance" buttons for each section
- Message badge showing 9+ unread
- ✅ Good: Task-oriented, shows what needs doing today

**Counselor Dashboard:**
- Stats: Total Students (20), Seniors (5), Colleges Tracked (12), Flagged Students (4)
- Flagged student cards: Clark (Grade 12, no college list), Walker, Hall
- ✅ Good: Highlights students needing attention

| # | Issue | Severity |
|---|-------|----------|
| D1 | **No real-time data** — attendance shows 0/10 even though date is current | 🟡 |
| D2 | **School year hardcoded to 2024-2025** — should be dynamic | 🟡 |
| D3 | **No calendar widget or upcoming events** | 🟡 |
| D4 | **No recent activity feed** | 🟢 |

### 3.2 Students (/students)

- Table: Student ID, Full Name, Grade, Status, Date of Birth
- 20 students total
- Filters: Grade dropdown, Status dropdown
- "Add Student" button

| # | Issue | Severity |
|---|-------|----------|
| S1 | **Same student list for all roles** — teacher sees all 20 students, not just their assigned students | 🔴 |
| S2 | **No student detail/profile page tested** — clicking a row may open detail but we didn't test drill-down | 🟡 |
| S3 | **Teacher has "Add Student" button** — teachers shouldn't create student records | 🔴 |
| S4 | **No search bar visible** — only filter dropdowns | 🟡 |
| S5 | **Date of Birth displayed as raw format** (9/7/2009) — should be consistent formatting | 🟢 |

### 3.3 Staff (/staff)

- Table: Name, Role, Email, Department, Status
- 9 staff members
- Filters: Role, Status
- "Add Staff" button

| # | Issue | Severity |
|---|-------|----------|
| ST1 | **Name column shows initials merged with name** — "TBBrooks, Tom" | 🟡 |
| ST2 | **Visible to admin only** — ✅ correctly hidden from teacher/counselor sidebar | ✅ |

### 3.4 Enrollment (/enrollment)

- Three tabs: New Enrollment, Status Management, Grade Promotion
- New Enrollment form: First Name, Last Name, Preferred Name, Grade Level, Date of Birth
- Multi-step wizard with Back/Next buttons

| # | Issue | Severity |
|---|-------|----------|
| E1 | **Grade dropdown defaults to Grade 9** — should be blank/required | 🟢 |
| E2 | **No re-enrollment workflow visible** — only "New" | 🟡 |
| E3 | **No application/inquiry stage** — jumps straight to enrollment data entry | 🟡 |

### 3.5 Courses (/courses)

- Two tabs: Courses, Sections
- Table: Code, Course Name, Level, Credits, Status, Sections
- 55 courses total
- Levels: Standard, AP, Honors

| # | Issue | Severity |
|---|-------|----------|
| C1 | **Course description embedded in name column** — "Studio Art Foundation in visual arts including drawing..." | 🟡 |
| C2 | **55 courses for a school with 20 students** — data feels inflated for demo purposes | 🟢 |
| C3 | **Teacher sees entire course catalog** — should see only their assigned courses, or have a "My Courses" tab | 🟡 |

### 3.6 Course Catalog (/course-catalog)

- Table: Code, Course, Department, Level, Grades, Credits, Actions
- 55 courses, searchable/filterable
- Admin has "Add Course" button

✅ Good: Separate catalog view from section management

### 3.7 Attendance (/attendance)

**Admin View:**
- Three tabs: Submissions, Edit Records, Absences
- Stats: 66 Total Sections, 0 Submitted, 66 Pending
- Table: Period, Course, Teacher, Status
- "Send All Reminders (66)" button

**Teacher View:**
- Section dropdown + Date picker
- No section pre-selected

| # | Issue | Severity |
|---|-------|----------|
| A1 | **66 pending sections with 0 submitted** — demo data never has attendance taken | 🟡 |
| A2 | **Teacher attendance is section-based** — ✅ correct pattern | ✅ |
| A3 | **No period-by-period view** — admin sees flat list of all 66 sections | 🟡 |
| A4 | **"Send All Reminders" for 66 sections** — dangerous bulk action with no confirmation | 🟡 |

### 3.8 Gradebook (/gradebook)

- Three tabs: Grades, Assignments, Categories & Weights
- Spreadsheet-style view: Student × Assignment matrix
- Categories: Tests & Quizzes (30%), Homework (20%), Classwork (20%), Midterm (15%), Final (15%)
- 20 students × 21+ assignments visible
- Grade calculation: weighted average → letter grade

| # | Issue | Severity |
|---|-------|----------|
| G1 | **Admin and Teacher see identical gradebook** — admin shouldn't edit grades directly | 🟡 |
| G2 | **Horizontal scroll nightmare** — 21+ columns visible, table headers repeat | 🔴 |
| G3 | **Individual assignment scores visible** — ALG Quiz 1/50, ALG Test 1/100, etc. — good granularity | ✅ |
| G4 | **No inline editing visible** — unclear if cells are editable | 🟡 |
| G5 | **Category weights shown in header** — ✅ good transparency | ✅ |
| G6 | **Grade distribution: C average visible** — Anderson=C, Clark=B, Hall=C, Lewis=A, Moore=B | ✅ Real data |

### 3.9 Progress Reports (/progress-reports)

- Empty state: "No Progress Reports — Create your first progress report to get started"
- "New Report" button (admin only)
- Teacher sees: "No progress reports have been created yet" (no create button)

| # | Issue | Severity |
|---|-------|----------|
| PR1 | **Empty — no demo data** | 🟡 |
| PR2 | **Teacher can't create progress reports** — should they be able to? Most SIS systems allow teachers to generate reports for their students | 🟡 |

### 3.10 Report Cards (/report-cards)

- Historical report cards: 2021-2022, 2022-2023, 2023-2024 (Published)
- Current: Semester 1 — "Collecting Grades" status
- Admin: "Approve & Snapshot" + "Submissions" buttons
- Teacher: "Submit Grades" button
- "Download PDFs" for published report cards

| # | Issue | Severity |
|---|-------|----------|
| RC1 | **Good workflow** — teacher submits → admin approves → snapshot | ✅ |
| RC2 | **Grades closed date: Jan 1, 2025 1:44 AM** — stale timestamp | 🟡 |
| RC3 | **No preview before publish** | 🟡 |

### 3.11 Transcripts (/transcripts)

- Generate Transcript search
- Batch: "Generate All Senior Transcripts (5)"
- Recent requests listed with dates
- Students: Young, Elijah; Walker, Oliver (Feb 24, 2026)

✅ Good: Batch generation, individual search, request history

### 3.12 Messages (/messages)

**Admin:**
- Broadcast + New buttons
- Inbox shows multiple copies of same message (Report Card Release)
- Messages to parent groups

**Teacher:**
- New button
- Thread: "Liam's Failing Grade in Algebra II" — parent-teacher conversation
- Multiple duplicate threads visible

**Counselor:**
- Minimal messages view

| # | Issue | Severity |
|---|-------|----------|
| M1 | **Massive message duplication** — admin sees 7+ copies of the same broadcast | 🔴 |
| M2 | **Teacher sees 6+ copies of same conversation** | 🔴 |
| M3 | **No message threading/deduplication** | 🔴 |
| M4 | **Good content** — realistic parent-teacher conversation about failing grades | ✅ |
| M5 | **No message search** | 🟡 |

### 3.13 Master Schedule (/schedule)

- Period schedule grid: Period → Course → Teacher → Room
- Semester 1 selector
- Click + to add section, click section to edit
- P1: Algebra II (MATH201) David Kim, etc.

✅ Good: Visual grid schedule builder

### 3.14 Registration Overview (/registration-overview)

- Stats: 6 Total Registrations, 6 Pending Review, 0 Approved, 0 Changes Requested
- Section Enrollment table: Period, Code, Course, Teacher, Room, Enrolled, Capacity, Utilization
- 66 sections shown
- Export CSV button

| # | Issue | Severity |
|---|-------|----------|
| RO1 | **All registrations pending, none approved** — demo data never progressed | 🟡 |
| RO2 | **All sections show 0 enrolled** — contradicts 20 students in system | 🔴 |

### 3.15 Schedule Conflicts (/conflicts)

- Stats: 62 Active Conflicts, 18 Errors, 44 Warnings, 0 Resolved
- Teacher conflicts: Robert Evans assigned to 2 sections in Period 5
- "Resolve" buttons per conflict
- "Re-scan" button
- Filters: Type, Severity

| # | Issue | Severity |
|---|-------|----------|
| SC1 | **62 unresolved conflicts is way too many** — indicates schedule data is broken, not a conflict detection issue | 🟡 |
| SC2 | **Good conflict types** — teacher double-booking identified correctly | ✅ |

### 3.16 Departments (/departments)

- 8 departments: Mathematics, English, Science, Social Studies, World Languages, Fine Arts, Physical Education + (implied: Computer Science, Theology)
- "No department head" for all departments
- "Add Department" button

| # | Issue | Severity |
|---|-------|----------|
| DP1 | **No department heads assigned** | 🟡 |
| DP2 | **No course/teacher count per department** | 🟡 |

### 3.17 Bell Schedules (/bell-schedules)

- Three schedules: Regular (Default, 8 periods), Assembly (9 periods), Minimum Day (7 periods)
- "New Schedule" button

✅ Good: Multiple schedule support

### 3.18 Waitlists (/waitlists)

- Empty: "No waitlist entries — Adjust filters or check back later"
- Filters: Status (Waiting), Section

### 3.19 Reports (/reports)

- Nearly empty page — just the sidebar
- No report templates, no generation interface

| # | Issue | Severity |
|---|-------|----------|
| R1 | **Reports page is effectively blank** — critical missing feature | 🔴 |

### 3.20 Honor Roll (/honor-roll)

- Stats: Total Honorees (3), High Honor Roll (3, GPA ≥ 3.80), Honor Roll (0, GPA ≥ 3.50)
- Table: Student, Grade, GPA, Status
- Thompson, Emma (9, 4.00), Martinez, Isabella (10, 4.00), Lewis, Evelyn (?, 4.00?)
- Semester/Grade filters

✅ Good: Automated honor roll calculation from GPA

### 3.21 Graduation (/graduation)

- Three tabs: Student Progress, Requirements, At-Risk (20)
- Table: Student, Grade, by-department credit tracking (English, Math, Science, etc.)
- All students show 0/X credits in all departments
- Progress and Status columns

| # | Issue | Severity |
|---|-------|----------|
| GR1 | **All students at 0 credits** — report card snapshots never populated credit data | 🔴 |
| GR2 | **At-Risk tab shows ALL 20 students** — because all have 0 credits | 🔴 |
| GR3 | **Good department breakdown** — English, Math, Science, Social Studies, World Language, Theology, Arts, PE, Electives | ✅ |

### 3.22 College Readiness (/college-readiness)

- College Scorecard integration: 2,561 colleges loaded (US Dept of Education data)
- Last synced: March 29, 2026
- College Search interface
- Student selector dropdown

| # | Issue | Severity |
|---|-------|----------|
| CR1 | **Real College Scorecard data** — impressive integration | ✅ |
| CR2 | **No student pre-selected** — have to manually choose | 🟡 |

### 3.23 Counselor Dashboard (/counselor-dashboard)

- Three tabs: Overview, Common App Prep, Essays
- Stats: 20 Total Students, 3 With College Lists, 4 Flagged, 5 Seniors, 72% Avg AI Score
- Flagged: Benjamin Clark (12th, no colleges), Abigail Hall (12th, no colleges)
- Student table: Name, Grade, GPA, Rank, Colleges, Balance, AI Score, Flags
- "Run Analysis for All Seniors" button
- Message buttons per flagged student

| # | Issue | Severity |
|---|-------|----------|
| CD1 | **AI Score column** — what model/criteria? Not documented | 🟡 |
| CD2 | **"Balance" column** — unclear what this means (reach/match/safety balance?) | 🟡 |
| CD3 | **Good flagging logic** — identifies seniors without college lists | ✅ |

### 3.24 Essay Review (/essay-review)

- Alert: Thompson, Emma — AI score 35/100, needs attention
- Table: Student, Grade, Prompt, Draft #, AI Score, Last Updated, Review Status
- Two students: Thompson (35, Not Reviewed), Lewis (92, ?)
- Filters: Grade, Status

| # | Issue | Severity |
|---|-------|----------|
| ER1 | **AI essay scoring** — good feature, but needs transparency on scoring criteria | 🟡 |
| ER2 | **Only 2 essays in system** — minimal demo data | 🟢 |

### 3.25 College Readiness Report (/college-readiness-report)

- Stats: 1 Senior w/ Lists, 1.0 Avg per Senior, 20% Seniors w/ Safety, 3/6/3 Tier Breakdown
- 12 Total Saved colleges
- Table: Student, Grade, GPA, SAT, ACT, Colleges, Balance
- 5 seniors listed, most with 0 colleges and no test scores

✅ Good: Comprehensive senior readiness tracking

### 3.26 Settings (/settings)

- Six tabs: General, Academic Year, Grading Scale, Attendance Codes, Assignment Categories, Schedule
- General: School Logo, School Name, Phone, Address
- Upload logo (PNG/JPG up to 2MB)

✅ Good: Comprehensive school configuration

---

## 4. Data Quality Issues

| # | Issue | Impact |
|---|-------|--------|
| DQ1 | **20 students, 55 courses, 66 sections** — ratio is unrealistic (3.3 sections per course with only 20 students) | Demo credibility |
| DQ2 | **0 enrolled in registration overview** despite 20 active students | Data integrity |
| DQ3 | **0 credits earned for all students** despite gradebook data existing | Report card → graduation pipeline broken |
| DQ4 | **62 schedule conflicts** — schedule data is internally inconsistent | Data integrity |
| DQ5 | **Duplicate messages everywhere** — 6-7 copies of same conversation | Data integrity |
| DQ6 | **All departments have no head** | Incomplete seed data |
| DQ7 | **School year stuck at 2024-2025** | Stale data |

---

## 5. Missing Features (vs. PowerSchool/Blackbaud)

### Critical (Must-Have for Launch)

| Feature | Notes |
|---------|-------|
| **Student Portal** | Login broken. Students need: my grades, my schedule, my attendance, assignments |
| **Parent Portal** | Login broken. Parents need: child's grades, attendance, teacher messaging, report cards |
| **Student Detail/Profile Page** | Individual student view with all data consolidated |
| **Report Generation** | Reports page is blank. Need: enrollment reports, grade distribution, attendance summaries, custom queries |
| **GPA Calculation Engine** | Honor roll works but graduation credits don't — indicates GPA/credit pipeline is incomplete |
| **Permissions/Authorization** | Teacher sees all students, has "Add Student" button, sees full course catalog |
| **Data Import/Export** | No CSV import for bulk student/staff data, no PowerSchool migration tools |
| **API / Integrations** | No documented API for LMS, payment systems, or third-party tools |

### Important (Need Before Scale)

| Feature | Notes |
|---------|-------|
| **Audit Log** | No tracking of who changed what and when |
| **Multi-Year Academic History** | Transcript generation needs historical grade data |
| **Parent-Student Linking** | Parent accounts need to be linked to specific students |
| **Notification System** | Email/push notifications for grades, attendance, messages |
| **Document Management** | Upload/store student documents (IEPs, health records, etc.) |
| **Custom Fields** | Schools need to add their own data fields |
| **Batch Operations** | Bulk grade entry, bulk attendance, mass communications |
| **Print/PDF** | Report cards, transcripts, progress reports as downloadable PDFs |

---

## 6. Design & UX Observations

### What Works Well
1. **Clean card-based layout** — consistent use of cards for stats and content
2. **Sidebar navigation** — collapsible, icon + text
3. **Role-based nav filtering** — different roles see different menus (even if permissions are weak)
4. **Realistic demo data** — actual student names, grades, conversations
5. **Spreadsheet gradebook** — familiar pattern for teachers
6. **College readiness module** — unique differentiator, real College Scorecard data
7. **Bell schedule management** — practical feature many SIS systems lack

### What Needs Work
1. **No visual brand** — generic white/gray, no school colors, no CB identity
2. **Horizontal scroll on gradebook** — 21+ columns is painful
3. **Flat sidebar** — 26 items need grouping into modules
4. **No loading states visible** — pages either show data or don't
5. **Initials avatar rendering** — "TBBrooks, Tom" merge issue in staff table
6. **Mobile readiness** — bottom nav only has 4-5 items, rest is desktop-only
7. **No dark mode** — our design system is dark-first
8. **Message threading** — duplicate messages are a UX disaster

---

## 7. Architecture Implications for Project Falcon

Based on this review, here's what we need to build differently:

### Auth & Permissions
- **Role-based access control (RBAC)** with granular permissions per route AND per data scope
- Teacher sees ONLY their students, their sections, their gradebook
- Parent sees ONLY their linked children
- Student sees ONLY their own data
- Admin ≠ Super Admin — Super Admin gets tenant config, user management, SSO settings

### Data Model
- **Proper enrollment pipeline:** Inquiry → Application → Accepted → Enrolled → Active
- **Credit accumulation:** Report card snapshots must feed graduation tracking
- **Message deduplication:** Thread-based messaging with proper participants
- **Multi-year:** Academic year as a first-class entity, historical data preserved

### Module Architecture
- **Core SIS** (students, staff, enrollment, courses, sections, scheduling)
- **Academics** (gradebook, assignments, report cards, transcripts, GPA)
- **Counseling** (college readiness, essay review, student flags, meeting scheduling)
- **Communication** (messaging, broadcasts, notifications)
- **Reporting** (standard reports, custom queries, data export)
- **Settings** (school config, academic year, grading scales, bell schedules, departments)
- **Admin** (user management, audit log, integrations, tenant settings)

### What to Keep from Lovable
- Course/section model
- Attendance tracking pattern (section-based, period-aware)
- Gradebook structure (weighted categories, assignment types)
- College Scorecard integration concept
- Bell schedule management
- Conflict detection system
- Essay AI scoring concept

### What to Rebuild from Scratch
- Authentication & authorization
- Student/Parent portals
- Messaging system
- Reports engine
- Enrollment workflow
- Graduation/credit tracking
- Data import/migration tools

---

## 8. Severity Summary

| Severity | Count | Examples |
|----------|-------|---------|
| 🔴 Critical | 7 | Student/Parent login broken, no permissions, reports blank, message duplication, 0 enrollment data, 0 graduation credits |
| 🟡 Medium | 20 | Flat navigation, stale dates, missing features, data inconsistencies |
| 🟢 Low | 5 | Date formatting, demo data ratios, empty states |
| ✅ Working Well | 12 | Gradebook, college readiness, attendance pattern, report cards workflow, bell schedules |

---

## 9. Recommendation

The Lovable prototype successfully **validates the module structure and user experience patterns**. It proves:
1. The sidebar + card + table layout works for SIS
2. Role-based views are the right approach
3. College readiness/essay review are genuine differentiators
4. Teachers want task-oriented dashboards (take attendance, enter grades)

**For Project Falcon**, we should:
1. Use this as the **functional reference** (what screens exist, what data they show)
2. Apply our **dark design system** (DESIGN-SYSTEM.md)
3. **Rebuild auth/permissions from scratch** with proper RBAC
4. **Fix data pipeline** — enrollment → scheduling → attendance → grades → report cards → transcripts → graduation
5. **Add the missing 50%** — student portal, parent portal, reporting, integrations, audit trail
6. **Send the GitHub repo** so I can review the actual code architecture and data models

---

*Steven — send me the GitHub repo and I'll do the code-level review next. Also, student1@cbhs.edu and parent1@cbhs.edu both return "Invalid login credentials" — those accounts may not exist in Supabase or their passwords differ.*
