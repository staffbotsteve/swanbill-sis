# SwanBill SIS

**Modular School Information System** — Core kernel + add-on products for K-12 private schools.

## Architecture

```
┌─────────────────────────────────────────────────┐
│                 SwanBill SIS Core                │
│   Students • Grades • Attendance • Transcripts   │
│   Scheduling • Compliance • Single-Record Model  │
├──────┬──────┬──────┬──────┬──────┬──────┬───────┤
│ LMS  │ Adv  │ Fin  │ Adm  │ Mkt  │ Comm │ Ath   │
│      │      │      │      │      │      │       │
│Course│Donor │Tuit- │Enroll│CMS & │Parent│Ticket │
│Mgmt  │CRM   │ion & │ment  │Email │Msg & │ing &  │
│Assign│Fund- │Billing│Apps │Mktg  │Alerts│Stats  │
│Grade │raise │Pay   │      │      │      │       │
└──────┴──────┴──────┴──────┴──────┴──────┴───────┘
```

## Monorepo Structure

```
swanbill-sis/
├── core/                  # SIS kernel — the heartbeat
├── modules/
│   ├── lms/               # Learning Management
│   ├── advancement/       # Donor CRM, College Planning
│   ├── finance/           # Tuition, Billing, Payments
│   ├── admissions/        # Enrollment & Applications
│   ├── marketing/         # CMS, Email, Campaigns
│   ├── communication/     # Parent/Staff Messaging
│   ├── athletics/         # Ticketing, Stats, Compliance
│   ├── analytics/         # Dashboards & Reporting
│   └── events/            # Event Management
├── dashboard/             # Agent work dashboard
├── docs/specs/            # Competitive research specs
├── infra/                 # Deployment & infrastructure
└── .github/workflows/     # CI/CD
```

## Pilot Customer

**Christian Brothers High School** — Sacramento, CA

## Team

- Steven Swan (SwanBill)
- Jason McCabe (Developer)
- Dave Perry (CB President)
- Swanbot Agent Team (AI Development)

## Status

Phase 1: Competitive research — feature specs for 50 existing systems across 11 categories.
