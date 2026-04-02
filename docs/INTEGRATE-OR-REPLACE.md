# SwanBill SIS — Integrate or Replace Recommendations

**Author:** Swanbot (Boss Agent)  
**Date:** 2026-04-02  
**Based on:** Exhaustive feature research of 50 systems across 11 categories

## Decision Framework

My recommendations are based on three factors:
1. **Can we realistically build a better version?** — Feature complexity, regulatory requirements, data moats
2. **Cost advantage** — Can we undercut the incumbent's pricing while maintaining quality?
3. **Strategic value** — Does owning this module strengthen the core platform, or is integration sufficient?

**Key principle:** Replace systems where we gain strategic control over the data model and user experience. Integrate systems that are commodities, have massive ecosystems we can't replicate, or where the switching cost for schools is too high relative to our benefit.

---

## SIS (Core Kernel)

| System | CB Uses? | CB Decision | Swanbot Recommendation | Rationale |
|--------|----------|-------------|----------------------|-----------|
| **PowerSchool** | Yes | Replace | **REPLACE** ✅ | Already built at cbhs.lovable.app. PS is hemorrhaging trust post-2024 breaches, UX is dated, pricing is opaque ($7-16/student). Our core kernel. |
| **Blackbaud Education Mgmt** | No | Replace | **REPLACE** ✅ | $15k-$150k+/yr, clunky UI, fragmented data model. Their lock-in is Raiser's Edge integration — we break that by building our own advancement module. |
| **Veracross** | No | Replace | **REPLACE** ✅ | We adopt their "one-person, one-record" architecture but with modern UX. Their weakness is steep learning curve and "jack of all trades" execution. |

---

## LMS (Learning Management)

| System | CB Uses? | CB Decision | Swanbot Recommendation | Rationale |
|--------|----------|-------------|----------------------|-----------|
| **Schoology** | Yes | Undecided | **REPLACE (as module)** 🔄 | Schoology is owned by PowerSchool — if we're replacing PS, Schoology integration will degrade. Build our own LMS module with parent portal parity. Schoology's parent engagement is the moat to beat. |
| **Google Classroom** | No | Integrate | **INTEGRATE** ✅ | Google Workspace is too deeply embedded in schools. Classroom is a workflow tool, not a real LMS. We integrate via Google Classroom API and let teachers use both. |
| **Canvas** | No | Integrate | **INTEGRATE** ✅ | Canvas is the gold standard LMS with massive LTI ecosystem. Schools that chose Canvas won't leave. Integrate via LTI 1.3 — don't fight this battle. |
| **Edpuzzle** | Yes | Integrate | **REPLACE (built-in feature)** 🔄 | Edpuzzle's 20-video free tier limit is a teacher pain point. Build interactive video directly into our LMS module as a feature, not a separate product. Huge teacher acquisition hook. |
| **Kahoot!** | Yes | Integrate | **INTEGRATE** ✅ | Fun classroom engagement tool with strong brand recognition. Not strategic to replace. LTI integration is sufficient. |
| **Turnitin** | Yes | Integrate | **INTEGRATE** ✅ | Plagiarism detection requires a massive corpus (99B+ pages). Impossible to replicate. LTI integration is the only path. |
| **Grammarly for Education** | No | Undecided | **INTEGRATE** ✅ | Writing AI is not our core competency. Grammar/style checking is a commodity that Google/Microsoft are bundling free. Integrate if schools want it, don't build it. |

---

## Advancement / Student Success

| System | CB Uses? | CB Decision | Swanbot Recommendation | Rationale |
|--------|----------|-------------|----------------------|-----------|
| **Naviance** | No | Replace | **REPLACE** ✅ | Owned by PowerSchool. $7-10/student. College planning features are well-understood and buildable. Our advantage: native integration with the SIS core (no sync issues). |
| **SCOIR** | Yes | Replace | **REPLACE** ✅ | SCOIR proves a modern UX at $4-5/student wins against Naviance. We model our college planning on SCOIR's approach but integrated into the core. |
| **Raiser's Edge** | Yes | Replace | **REPLACE** ✅ | $10k-15k+/yr for donor CRM. This is the Blackbaud lock-in mechanism. Building our own donor/advancement module breaks the entire Blackbaud dependency. Feature set is well-understood (donor management, gift processing, campaigns). |
| **Blackbaud CRM** | Yes | Replace | **SKIP** ⏭️ | $150k+/yr enterprise-grade. This is for massive universities, not K-12 private schools. We don't need to compete here. Our Raiser's Edge replacement covers the K-12 market. |
| **HubSpot** | No | Replace | **INTEGRATE (free tier) + REPLACE (school-specific)** 🔄 | HubSpot's free CRM is excellent for admissions marketing. Rather than rebuild HubSpot, build a school-specific admissions funnel module that can optionally sync with HubSpot for schools that want advanced marketing automation. |

---

## Finance

| System | CB Uses? | CB Decision | Swanbot Recommendation | Rationale |
|--------|----------|-------------|----------------------|-----------|
| **FACTS Tuition** | Yes | Integrate | **REPLACE** 🔄 | Tuition billing is core school infrastructure. FACTS charges per-family fees ($25-50). Building tuition management into our finance module gives us revenue control and eliminates per-family fees for schools. |
| **Smart Tuition (FACTS)** | No | Undecided | **REPLACE** 🔄 | Same as FACTS — now merged under Blackbaud. Replace both with our tuition module. |
| **TADS** | No | Undecided | **REPLACE** 🔄 | Same category as FACTS. Our tuition module replaces all three (FACTS, Smart Tuition, TADS). |
| **QuickBooks** | No | Undecided | **INTEGRATE** ✅ | General accounting is a commodity. Schools already use QB. Export journal entries from our finance module to QB via API. Don't build an accounting system. |
| **Sage Intacct** | No | Undecided | **INTEGRATE** ✅ | Enterprise fund accounting for large multi-campus. Same as QB — integrate, don't replace. Our finance module handles school-specific billing; GL stays in their accounting system. |
| **PayPal / Stripe** | No | Undecided | **INTEGRATE (Stripe)** ✅ | Stripe is our payment processor. Period. We build on Stripe's APIs for tuition billing, event payments, donations. PayPal as optional alternative. |
| **Square** | Yes | Integrate | **INTEGRATE** ✅ | POS hardware for concessions/school stores. Not our domain. Integrate transaction data into our finance module. |
| **Permission Click** | No | Undecided | **REPLACE (built-in feature)** 🔄 | Permission slips + activity fee collection is a simple feature. Build it into our communication module. Schools shouldn't need a separate vendor for this. |
| **Acceptiva** | No | Undecided | **REPLACE (built-in feature)** 🔄 | Donation processing forms. Our advancement module handles this natively with Stripe as the payment backend. |
| **TicketSpice** | No | Replace | **REPLACE** ✅ | Event ticketing is simple to build. Our events/athletics module handles this with Stripe processing. No need for a third-party ticketing vendor taking a cut. |

---

## Admissions

| System | CB Uses? | CB Decision | Swanbot Recommendation | Rationale |
|--------|----------|-------------|----------------------|-----------|
| **SchoolAdmin (Finalsite)** | Yes | Replace | **REPLACE** ✅ | Admissions is too strategically important to outsource. Application workflows, enrollment contracts, re-enrollment — all this feeds directly into the SIS core. Opaque pricing, and Finalsite's acquisition made it worse. |
| **Finalsite Enrollment** | Yes | Replace | **REPLACE** ✅ | Same product as SchoolAdmin post-acquisition. Our admissions module replaces both. |

---

## Marketing

| System | CB Uses? | CB Decision | Swanbot Recommendation | Rationale |
|--------|----------|-------------|----------------------|-----------|
| **Finalsite (CMS)** | Yes | Undecided | **REPLACE** ✅ | School website CMS is a natural extension of the platform. Build a simple, modern CMS module. Schools pay Finalsite $15k-$40k+/yr for a website — that's absurd. |
| **Blackbaud Website** | No | Replace | **REPLACE** ✅ | Tied to Blackbaud ecosystem. If we're replacing Blackbaud, this goes too. |
| **Edlio** | No | Replace | **REPLACE** ✅ | Mid-tier school CMS. Our CMS module covers this. |
| **Constant Contact** | No | Replace | **INTEGRATE** 🔄 | Email marketing is a commodity with massive competition. Rather than build an email engine, integrate with SendGrid/Mailgun for transactional email and offer basic newsletter capabilities. Schools wanting advanced campaigns can use Constant Contact/Mailchimp alongside. |
| **Mailchimp** | No | Replace | **INTEGRATE** 🔄 | Same rationale as Constant Contact. Build basic email/newsletter into the platform, integrate for advanced use cases. |

---

## Communication

| System | CB Uses? | CB Decision | Swanbot Recommendation | Rationale |
|--------|----------|-------------|----------------------|-----------|
| **ParentSquare** | No | Replace | **REPLACE** ✅ | Parent-school messaging is core infrastructure. Build it into the communication module with translation, alerts, permission slips (replacing Permission Click too). This is a huge value-add that touches every family daily. |
| **Remind** | No | Replace | **REPLACE** ✅ | Teacher-parent messaging. Simpler than ParentSquare. Our communication module handles both use cases. |
| **Zoom** | Yes | Integrate | **INTEGRATE** ✅ | Video conferencing is not our domain. Zoom/Meet/Teams are entrenched. Integrate meeting links into calendar/classes. |
| **Slack** | No | Integrate | **INTEGRATE** ✅ | Staff communication. Slack and Teams are entrenched. Not strategic to replace. |

---

## IT / Infrastructure

| System | CB Uses? | CB Decision | Swanbot Recommendation | Rationale |
|--------|----------|-------------|----------------------|-----------|
| **Jamf** | No | — | **INTEGRATE** ✅ | Apple MDM is deeply specialized hardware management. Absolutely do not build this. Integrate device data if needed. |
| **Google Workspace** | No | Integrate | **INTEGRATE** ✅ | The oxygen of school IT. SSO, Drive, Gmail. Integrate deeply (provisioning, SSO, Classroom API). Never compete. |
| **Microsoft 365** | Yes | Integrate | **INTEGRATE** ✅ | Same as Google — integrate via Graph API. Some schools are Microsoft shops, some Google. Support both. |
| **Clever** | No | Replace | **REPLACE** ✅ | SSO + rostering middleware. Our SIS IS the roster source. We can provide SSO directly (SAML/OIDC) and OneRoster feeds natively. Schools pay Clever because their SIS can't do this well — ours will. |
| **ClassLink** | No | Replace | **REPLACE** ✅ | Same rationale as Clever. Our SSO/rostering is native to the core. |

---

## Events

| System | CB Uses? | CB Decision | Swanbot Recommendation | Rationale |
|--------|----------|-------------|----------------------|-----------|
| **Eventbrite** | No | Integrate | **INTEGRATE** ✅ | General event platform with massive consumer adoption. For school-specific events (open houses, fundraisers), our events module handles it. For public-facing events that need broad reach, Eventbrite integration makes sense. |

---

## Athletics

| System | CB Uses? | CB Decision | Swanbot Recommendation | Rationale |
|--------|----------|-------------|----------------------|-----------|
| **GoFan** | No | Replace | **REPLACE** ✅ | Digital ticketing with convenience fees ($1-1.50/ticket) passed to fans. Our athletics module does this with Stripe — we can offer lower fees or let schools keep the margin. |
| **Hometown Ticketing** | No | Replace | **REPLACE** ✅ | Same as GoFan. Our ticketing module replaces both. |
| **ArbiterSports (FamilyID)** | No | Undecided | **REPLACE** ✅ | Athletic registration forms + compliance tracking. Build into our athletics module. FamilyID's digital forms are exactly what Final Forms does too — consolidate. |
| **MaxPreps** | Yes | Integrate | **INTEGRATE** ✅ | CBS Sports-backed stats platform with college recruiting exposure. Schools need the visibility MaxPreps provides. Push stats from our system to MaxPreps via their API. |
| **Hudl** | Yes | Integrate | **INTEGRATE** ✅ | Video analysis with 200k+ teams. Massive moat in video storage/analysis. Integrate, don't compete. |
| **Final Forms** | No | — | **REPLACE** ✅ | Athletic compliance forms ($3-5/student/yr). Simple digital forms — our athletics module handles registration, physicals, emergency contacts, eligibility natively. |

---

## Analytics

| System | CB Uses? | CB Decision | Swanbot Recommendation | Rationale |
|--------|----------|-------------|----------------------|-----------|
| **SurveyMonkey** | No | — | **INTEGRATE** ✅ | Survey building is a commodity. Build basic surveys/feedback into the platform. For advanced needs, integrate with SurveyMonkey or Typeform. |
| **Tableau** | No | — | **INTEGRATE** ✅ | Enterprise data viz. Build dashboards natively into every module (our competitive advantage). For schools that want Tableau-level analysis, provide data exports/API access. |
| **Power BI** | No | — | **INTEGRATE** ✅ | Same as Tableau. Native dashboards in-platform, export to Power BI for power users. Microsoft schools may already have it via M365 A5. |

---

## Summary Scorecard

| Decision | Count | Systems |
|----------|-------|---------|
| **REPLACE** | 28 | PowerSchool, Blackbaud EM, Veracross, Schoology, Edpuzzle, Naviance, SCOIR, Raiser's Edge, FACTS, Smart Tuition, TADS, Permission Click, Acceptiva, TicketSpice, SchoolAdmin, Finalsite Enrollment, Finalsite CMS, Blackbaud Website, Edlio, ParentSquare, Remind, Clever, ClassLink, GoFan, Hometown, ArbiterSports, Final Forms, HubSpot (partial) |
| **INTEGRATE** | 21 | Google Classroom, Canvas, Kahoot, Turnitin, Grammarly, QuickBooks, Sage Intacct, Stripe/PayPal, Square, Constant Contact, Mailchimp, Zoom, Slack, Jamf, Google Workspace, M365, Eventbrite, MaxPreps, Hudl, SurveyMonkey, Tableau, Power BI |
| **SKIP** | 1 | Blackbaud CRM (enterprise, not K-12 relevant) |

**Bottom line:** We're building a platform that replaces ~28 systems with a unified, modular product. We integrate with ~21 systems that are either commodities (payment processors, accounting), massive ecosystems (Google, Microsoft), or have irreplaceable data moats (Turnitin's corpus, Hudl's video, MaxPreps' recruiting network). This is ambitious but achievable because the systems we're replacing are mostly overpriced, UX-challenged, and fragmented — exactly the gap a modern unified platform fills.
