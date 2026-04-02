# School Information System — SwanBill Platform

## Overview
Modular school information system with a core SIS kernel and add-on product modules. Co-developed with Christian Brothers High School (Sacramento, CA) as pilot customer. Intended for sale to other private schools.

## Team
- **Steven Swan** — Founder, SwanBill
- **Jason McCabe** — Developer
- **Dave Perry** — President, Christian Brothers High School (pilot customer)
- **Swanbot Agent Team** — All development

## Architecture
- **Core Kernel (SIS):** Student records, grades, attendance, transcripts — the heartbeat
- **Add-on Modules:** Cannot exist without the core. Each module maps to a category of systems being replaced or integrated.
- **Multi-tenant SaaS** — CB is tenant #1, designed for sale to other schools

## Categories & Systems
| Category | Count | Notes |
|---|---|---|
| SIS | 3 | Core — all replaced |
| LMS | 7 | Mostly integrate |
| Advancement/Student Success | 5 | All replaced |
| Finance | 10 | Mixed |
| Admissions | 2 | All replaced |
| Marketing | 5 | Mostly replaced |
| Communication | 4 | Mixed |
| IT | 5 | Mixed |
| Events | 1 | Integrate |
| Athletics | 6 | Mixed |
| Analytics | 3 | TBD |

## Existing Prototype
- cbhs.lovable.app — React + Supabase SIS prototype (Lovable-built)

## Key Links
- Spreadsheet: https://docs.google.com/spreadsheets/d/1CYeim0fUWkQKEezfz0Fr5FLIbUgDEcV7ahGCdSiTzLA
- Google Drive: https://drive.google.com/drive/folders/1jj_GLvRXCDcqYiC2hmFsGZ8HQT1bxy7N

## Status
- Phase 1: Feature research on all 50 systems (IN PROGRESS)
- Phase 2: Spec consolidation + integrate/replace decisions
- Phase 3: Core kernel architecture
- Phase 4: Build
