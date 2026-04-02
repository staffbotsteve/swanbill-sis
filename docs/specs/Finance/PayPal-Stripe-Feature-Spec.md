# Feature Spec: PayPal & Stripe (Payment Processing)

## 1. Overview
PayPal and Stripe are the industry-standard payment gateways for digital transactions. In a school context, they serve as the "plumbing" for tuition payments, activity fees, and donations.

## 2. Feature List
### Shared Features
- **Credit/Debit Processing:** Support for all major card networks (Visa, Mastercard, Amex, Discover).
- **Digital Wallets:** Apple Pay, Google Pay, and Link (Stripe).
- **Bank Transfers (ACH):** Lower-fee alternative to credit cards for high-value tuition payments.
- **PCI Compliance:** Both handle sensitive data on their servers (Level 1 PCI DSS), reducing school liability.
- **Webhooks:** Real-time notifications for successful payments, refunds, and disputes to update the SIS.
- **Mobile SDKs:** Native integration for school mobile apps.

### PayPal Specifics
- **Venmo Integration:** Popular with younger parents and students.
- **Pay Later:** "Pay in 4" or PayPal Credit allows parents to pay in installments while the school gets paid upfront.
- **Consumer Trust:** High brand recognition; parents often prefer using their saved PayPal login.
- **PayPal Giving Fund:** Zero-fee processing for registered 501(c)(3) charities.

### Stripe Specifics
- **Stripe Billing:** Advanced recurring billing engine for tuition plans and subscriptions.
- **Smart Retries:** Machine learning to retry failed payments at optimal times.
- **Stripe Elements:** Customizable UI components for a seamless checkout experience within the school's portal.
- **Stripe Terminal:** Hardware for in-person payments (synchronized with online data).
- **Radar:** Advanced AI fraud detection.

## 3. Pricing (Education/Nonprofit)
| Service | Standard Rate | Nonprofit/Donation Rate |
| :--- | :--- | :--- |
| **PayPal** | 2.99% + $0.49 | 1.99% + $0.49 (for 501c3) |
| **Stripe** | 2.9% + $0.30 | 2.2% + $0.30 (for 501c3) |

*Note: Stripe's nonprofit rate often excludes tuition and ticket sales, focusing on pure donations. PayPal is generally more flexible with its charity rate.*

## 4. Integration Patterns
- **Hosted Checkout:** Quickest setup; redirects parents to a PayPal/Stripe page.
- **Embedded/Elements:** Keeps parents on the school website for a professional feel.
- **API-First:** Full control over the user journey, required for complex SIS logic (e.g., partial payments, split disbursements).

## 5. Pain Points
- **Account Holds:** PayPal is notorious for sudden account freezes/reserves during high-volume periods (e.g., tuition season).
- **Dispute Management:** Both platforms favor the consumer; schools often lose disputes unless documentation is airtight.
- **Reconciliation:** Matching a bulk deposit to 500 individual student records can be a nightmare without a direct SIS integration.

## 6. Competitive Intelligence
- **Stripe is for Developers:** Best-in-class documentation and API flexibility.
- **PayPal is for Families:** High conversion rates due to "One-Touch" login and Venmo support.
- **The Winner:** Most modern SIS platforms (like Blackbaud or Veracross) default to Stripe for its superior automation capabilities.
