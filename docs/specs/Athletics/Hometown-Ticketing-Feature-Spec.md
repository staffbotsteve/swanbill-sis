# HomeTown Ticketing Feature Spec: Event/Athletics Ticketing

## 1. Overview
HomeTown Ticketing is a professional digital ticketing solution for K-12 schools, colleges, and conferences. It is known for its **custom branding** and **flexible seating** capabilities, positioning it as a premium alternative to GoFan for districts that want a more "white-labeled" experience.

## 2. Core Features
### Professional Ticketing
- **Digital Box Office:** Branded online ticket store for each school or district.
- **Reserved Seating:** Custom seat maps for stadiums, gyms, and auditoriums (no extra cost).
- **Season Tickets & Passes:** Supports recurring access with renewal workflows.
- **Printed Tickets:** Option for fans to print their own tickets or have them printed at the gate.

### Gate Management (HomeTown Gate App)
- **Fast Scanning:** Scan digital or printed tickets via iOS or Android devices.
- **Offline Scanning:** Works in venues with poor connectivity.
- **Self-Check-in:** Option for attendees to check themselves in at the gate.
- **On-the-go Sales:** Sell tickets and concessions with cash or card via the app.

### Financial Management
- **Next-Day Deposits:** Schools receive funds as quickly as 48 hours after a sale.
- **Custom Reporting:** Real-time dashboards for ticket sales, revenue, and attendance.
- **Point of Sale (POS):** Integrated hardware for on-site credit card sales and receipts.

### Fan Experience
- **Fan App:** Central place for fans to buy and store tickets for multiple schools/colleges.
- **Mobile Sharing:** Send tickets to friends and family with a few taps.

## 3. Pricing (2026 Estimates)
- **Core Platform:** Free for schools/districts (No setup or onboarding fees).
- **Service Fees (for attendees):**
    - $1.00 per ticket (Standard).
    - $3.00 per digital season pass; $5.00 for printed season passes.
- **Processing Fees:**
    - If using Stripe: 2.9% + $0.30 per transaction.
    - $0.35 gateway fee per transaction attempt.

## 4. Integrations
- **School Data Sync:** Integrates with SIS for staff access and student/staff data.
- **Payment Processors:** Stripe and Bluefin for secure transactions.
- **Marketing:** Integrates with major email marketing and social media platforms.

## 5. Pain Points
- **Processing Fees:** Fans see both a service fee ($1) and a processing fee (2.9%+), which can be more complex than GoFan's flat model.
- **Setup Time:** Creating custom seat maps and branded portals can take longer than the "turnkey" GoFan approach.
- **Market Share:** While growing, it has fewer state association partnerships than GoFan.

## 6. Competitive Intelligence
- **Primary Rival:** GoFan (simpler flat fees, part of the PlayOn Sports ecosystem).
- **Edge:** Better for performing arts and reserved seating (often used for school musicals and graduation).
- **API Status:** RESTful API with documentation for partners; focuses on school/district-level data access.

---
*Target path: /root/.openclaw/workspace/builds/school-sis/specs/Athletics/Hometown-Ticketing-Feature-Spec.md*