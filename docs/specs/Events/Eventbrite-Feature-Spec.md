# Eventbrite Feature Spec: Event Registration for Education

## 1. Overview
Eventbrite is a global event management and ticketing platform widely used by schools for community events, parent-teacher nights, and school musicals. It is favored for its ease of use and ability to manage both free and paid events.

## 2. Core Features
### Event Creation & Registration
- **Event Dashboard:** Central hub for event details, dates, and locations.
- **Custom Order Questions:** Allows schools to collect specific data (e.g., student name, grade, allergies) during registration.
- **Ticket Types:** Free, paid, and donation-based options.
- **Reserved Seating:** Customizable seat maps for school auditoriums and theaters.

### Promotion & Engagement
- **Eventbrite Ads & Marketing:** Built-in email marketing and Facebook integration.
- **Widget Integration:** Embed the booking experience directly into school websites.
- **Automated Emails:** Send confirmations, reminders, and post-event follow-ups.

### Analytics & Reporting
- **Real-time Sales & Registration:** Track attendee counts and revenue on the go.
- **Custom Reports:** Export attendee lists and financial summaries in various formats.

### Check-in & Gate Management
- **Organizer Mobile App:** Scan QR codes on tickets for fast entry via iOS or Android.
- **Manual Check-in:** Search for attendees by name/email on a laptop or tablet.
- **Guest Lists:** Create and manage scannable guest lists for VIPs or staff.

## 3. Pricing (2026 Estimates)
- **Free Events:** No fees to publish and manage free events of any size.
- **Paid Events:** Service fee of 3.7% + $1.79 per ticket and a 2.9% payment processing fee per order (US).
- **Pro Plan (Optional):** Starts at $15/month for extended email marketing reach (2,000+ emails/day) and 24/7 chat support.
- **Nonprofits:** Potential discounts or fee waivers for qualifying 501(c)(3) organizations.

## 4. Integrations
- **Video Conferencing:** Deep integration with Zoom and Google Meet for online events.
- **Marketing Tools:** Mailchimp, HubSpot, and Salesforce.
- **API:** RESTful API for pushing/pulling event and attendee data (requires API key).

## 5. Pain Points
- **No Direct API Registration:** Third-party apps cannot directly register attendees via the API; users must go through the Eventbrite checkout.
- **Branding:** Limited customization of the checkout experience without the premium "Plus" or custom enterprise plans.
- **Cost for Small Schools:** The per-ticket fees can add up quickly for small-scale paid events.

## 6. Competitive Intelligence
- **Primary Rival:** TicketSpice (lower fees, more customization), RSVPify (better for private events).
- **Edge:** "Search and Discovery" — many parents already have Eventbrite accounts, making the registration process familiar and fast.
- **API Status:** Mature REST API (JSON/OAuth2); extensively documented for event lifecycle management.

---
*Target path: /root/.openclaw/workspace/builds/school-sis/specs/Events/Eventbrite-Feature-Spec.md*