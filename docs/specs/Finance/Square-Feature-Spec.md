# Feature Spec: Square (POS & In-Person Payments)

## 1. Overview
Square is the market leader for omnichannel school payments. While Stripe/PayPal dominate online, Square owns the "last mile" for physical school touchpoints: concession stands, school stores, and on-campus events.

## 2. Feature List
### POS Hardware
- **Square Register:** Fully integrated dual-screen terminal for high-volume concession stands.
- **Square Terminal:** All-in-one handheld for mobile ticket sales or roaming merchandise staff.
- **Square Stand:** Turns an iPad into a professional POS for the main school store.
- **Contactless/Chip Readers:** Affordable $59 readers for volunteers to use with their personal phones.

### Online & Invoicing
- **Square Online:** Simple drag-and-drop builder for a school storefront (uniforms, spirit wear).
- **Square Invoices:** Digital invoicing for tuition or field trips with Apple/Google Pay support.
- **Checkout Links:** Quick "Pay Now" links for SMS or email distribution to parents.

### Operations
- **Inventory Management:** Basic (Free) and Plus ($49/mo) plans for tracking school store stock.
- **Team Management:** Permissions for student workers or parent volunteers to use the POS without seeing sensitive financial data.
- **Reporting:** Real-time dashboard for athletic directors to see game-day revenue as it happens.

### Education Use Cases
- **Concessions:** "Quick Tap" payments at football/basketball games.
- **School Store:** Inventory sync across online and in-person sales.
- **After-School Programs:** Recurring billing for childcare or clubs.

## 3. Pricing
| Service | Rate |
| :--- | :--- |
| **In-Person (Tap/Chip)** | 2.6% + $0.10 |
| **Online (Checkout/Links)** | 2.9% + $0.30 |
| **Manual Keyed Entry** | 3.5% + $0.15 |
| **Invoicing (ACH)** | 1% (min $1 fee) |

*Note: Square does not typically offer a public nonprofit rate, but custom pricing is available for schools processing >$250k/year.*

## 4. Integration Patterns
- **Square API:** Robust RESTful APIs for catalog, customers, and payments.
- **Sandbox:** High-quality developer environment for testing SIS integrations.
- **Webhooks:** Instant updates for stock levels and payment status.

## 5. Pain Points
- **Hardware Cost:** Unlike Stripe/PayPal (which are software-first), Square requires upfront hardware investment.
- **Reporting Gaps:** Square's reporting is excellent for retail but lacks the student-centric "Family Ledger" view required by many SIS users.
- **Limited Customization:** The Square Online store is less flexible than a custom-built Stripe integration.

## 6. Competitive Intelligence
- **Square is for Speed:** Fastest setup for in-person events. No developer required to start selling hot dogs at a game.
- **Inventory Sync:** Better than PayPal/Stripe for physical merchandise (uniforms).
- **The Winner:** Best for physical campus sales where speed and simplicity for volunteers are the top priorities.
