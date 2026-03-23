export type Fund = {
    code: string
    label: string
    currency: 'NGN' | 'USD'
    shortDescription: string
    interestRate: number
    minAmount: string
    features: string[]
}

export type Project = {
    id: number
    slug: string
    title: string
    image: string
    type: 'dev' | 'design'
    primaryTags: string[]
    secondaryTags: string[]
    year: string
    role: string
    overview: string
    challenge: string
    approach: string[]
    outcome: string
    screens: string[]
    comingSoon?: boolean
    funds?: Fund[]
}

export const projects: Project[] = [
    {
        id: 1,
        slug: 'gtfm-investment-portal',
        title: 'GTFM Customer Investment Portal — Tiered Portfolio Management for Every Risk Appetite',
        image: '/assets/img/gtfm0.png',
        type: 'dev',
        primaryTags: ['UX Design', 'Frontend Development'],
        secondaryTags: ['FinTech', 'Investment', 'SaaS', 'B2C'],
        year: '2024',
        role: 'Frontend Engineer & Product Designer',
        overview:
            "Guaranty Trust Fund Managers (GTFM) needed a self-service web portal where customers could browse, subscribe to, and manage their investment portfolios — across a suite of 8 distinct funds spanning Naira and Dollar instruments. The portal had to serve a wide range of customers: from retail investors starting with ₦1,000 to high-net-worth clients placing $200,000+ in institutional notes. I led the design and frontend build end-to-end.",
        challenge:
            "GTFM's existing customer touchpoints were phone-based and relationship-manager-driven. There was no digital self-service layer, which capped the team's capacity and excluded retail customers who didn't have access to a dedicated RM. The core design challenge was presenting 8 structurally different funds — with different currencies, risk profiles, minimum investments, and hold periods — in a way that helped customers make confident decisions without financial advisory.",
        approach: [
            "Mapped each fund's key decision variables (currency, minimum, hold period, yield, risk tier) and designed a comparison-friendly fund card system that surfaces the most relevant information at a glance.",
            "Created a tiered access model: retail customers see Naira-denominated retail funds (FUND724, GTMMF, GTFIF, GTBF, GTEIF) by default; high-net-worth tiers unlock institutional instruments (GTDIN, GTNIN) with minimum subscriptions of $200K+.",
            "Designed a fund detail flow with separate Overview, Benefits, and Features tabs — avoiding information overload while ensuring each fund's unique terms were fully discoverable.",
            "Built a portfolio dashboard showing live holdings, accrued dividends, YTD returns, and redemption eligibility per fund — with clear hold-period countdowns to reduce premature redemption requests.",
            "Designed and implemented the subscription flow with inline validation, currency formatting (₦ and $), and a review step that confirms amount, estimated yield, and hold period before submission.",
            "Collaborated with the backend team to integrate real-time NAV pricing (offer and bid prices) and interest rate feeds across all 8 funds.",
        ],
        outcome:
            "The portal launched to an initial cohort of GTFM customers across all tiers. Self-service subscriptions accounted for 40% of new fund subscriptions in the first two months, reducing RM-assisted onboarding load significantly. The tiered fund visibility model successfully steered retail customers toward appropriate lower-minimum products while surfacing institutional options to qualified customers.",
        screens: [
            '/assets/img/gtfm0.png',
            '/assets/img/gtfm1.png',
            '/assets/img/gtfm2.png',
        ],
        funds: [
            {
                code: 'FUND724',
                label: 'Guaranty Trust Investment Fund 724',
                currency: 'NGN',
                shortDescription: 'A naira-denominated, open-ended money market fund powered by *724#. Offers capital preservation, liquidity, and steady income on short-term instruments.',
                interestRate: 15.87,
                minAmount: '₦1,000',
                features: [
                    'Investments in Fixed Deposits, Commercial Papers, and Nigerian Treasury Bills',
                    'Returns benchmarked against 91-day Treasury Bill yield',
                    'Real-time accessibility up to ₦200,000',
                    'Dividends accrue daily',
                    '2024 YTD return: 19.73%',
                ],
            },
            {
                code: 'GTMMF',
                label: 'Guaranty Trust Money Market Fund',
                currency: 'NGN',
                shortDescription: "A low-risk, open-ended unit trust scheme with competitive returns across diversified money market instruments. Regulated by S.E.C.",
                interestRate: 17.35,
                minAmount: '₦1,000',
                features: [
                    "Portfolio of banker's acceptances, commercial papers, and treasury bills",
                    'Minimum hold period: 30 days',
                    'Management fee: 1% of NAV',
                    '2024 YTD return: 19.28%',
                    'Dividends paid quarterly',
                ],
            },
            {
                code: 'GTFIF',
                label: 'Guaranty Trust Fixed Income Fund',
                currency: 'NGN',
                shortDescription: 'Guaranteed principal investment benchmarked against the CBN Standing Deposit Facility rate. Suited for safety-focused investors seeking regular income.',
                interestRate: 14.9,
                minAmount: '₦50,000',
                features: [
                    'Diversified portfolio of fixed-income securities and equities',
                    'Minimum guaranteed return benchmarked against CBN SDF rate',
                    'Pays minimum guaranteed return twice a year',
                    'Minimum hold period: 180 days',
                    '2024 YTD return: 6.0%',
                ],
            },
            {
                code: 'GTBF',
                label: 'Guaranty Trust Balanced Fund',
                currency: 'NGN',
                shortDescription: 'Designed to maximise long-term capital growth and maintain regular income. A balanced portfolio across equities, fixed income, and money market.',
                interestRate: 0,
                minAmount: '₦10,000',
                features: [
                    'Balanced exposure to equities, fixed income, and money market',
                    'Minimum hold period: 91 days',
                    'Management fee: 2.0% of NAV',
                ],
            },
            {
                code: 'GTEIF',
                label: 'Guaranty Trust Equity Income Fund',
                currency: 'NGN',
                shortDescription: 'Provides regular income and long-term capital appreciation from dividend-paying equities listed on the Nigerian Exchange Group.',
                interestRate: 3754.89,
                minAmount: '₦5,000',
                features: [
                    'Invested in fundamental NGX-listed stocks with strong dividend yield',
                    'Minimum hold period: 180 days',
                    'Management fee: 1.5% of NAV',
                ],
            },
            {
                code: 'GTDF',
                label: 'Guaranty Trust Dollar Fund',
                currency: 'USD',
                shortDescription: 'Provides access to dollar-denominated Eurobonds and USD money market instruments — ordinarily inaccessible to retail investors due to high minimums.',
                interestRate: 4.85,
                minAmount: '$500',
                features: [
                    'Diversified portfolio of Eurobonds and Nigeria USD money market instruments',
                    'Minimum hold period: 180 days',
                    'Management fee: 1.5% of NAV',
                    '2024 YTD return: 6.95%',
                ],
            },
            {
                code: 'GTNIN',
                label: 'Guaranty Trust Naira Investment Note',
                currency: 'NGN',
                shortDescription: 'Institutional Naira instrument offering risk-adjusted returns above traditional money market investments — across Treasury Bills, FGN Bonds, and Commercial Papers.',
                interestRate: 0,
                minAmount: 'Varies per instrument',
                features: [
                    'Instruments: Treasury Bills, FGN Bonds, Corporate Bonds, Commercial Papers',
                    'Yield subject to present rates and tenor agreed with client',
                    'Tenor varies by instrument',
                ],
            },
            {
                code: 'GTDIN',
                label: 'Guaranty Trust Dollar Investment Note',
                currency: 'USD',
                shortDescription: 'High-return institutional Dollar instrument for HNW investors seeking long-term capital appreciation in hard currency with rate-hedged Eurobond exposure.',
                interestRate: 0,
                minAmount: '$200,000',
                features: [
                    'Instruments: Dollar Money Market, Fixed Income, Eurobonds',
                    'Minimum hold period: 90 days (40% penal charge on pre-termination)',
                    'Yield subject to market conditions and volume',
                ],
            },
        ],
    },
    {
        id: 2,
        slug: 'squad-for-churches',
        title: "Squad for Churches — An All-in-One Platform for Giving, Members, and Ministry Operations",
        image: '/assets/img/s4c1.png',
        type: 'dev',
        primaryTags: ['UX Design', 'Frontend Development'],
        secondaryTags: ['SaaS', 'FinTech', 'Church Tech'],
        year: '2024',
        role: 'Frontend Engineer & Product Designer',
        overview:
            "Squad for Churches is an all-in-one church management platform built on Squad's payment infrastructure. It gives churches everything they need to manage giving, engage members, and streamline operations — without the administrative overhead that pulls leaders away from ministry. I designed and built the product end-to-end, from the giving flows to the branch and communications layer.",
        challenge:
            "Churches handle a unique blend of financial operations, people management, and mass communications — across multiple branches, member groups, and giving purposes. Most existing tools solve one piece of the puzzle. Church admins were stitching together payment links, spreadsheets, WhatsApp broadcasts, and separate email tools, with no unified record of who gave what, who attended which branch, or which announcements reached which group.",
        approach: [
            "Mapped the full admin workflow across giving, membership, and communications to identify where time was being lost and where data was siloed.",
            "Designed the Giving module around three instruments: payment links for one-time and campaign giving, virtual accounts for dedicated purposes (tithes, building fund, missions), and a unified giving records view for reconciliation and reporting.",
            "Built the Members module with group-based organisation and a public member registration link flow — so new members could self-register via a form without admin intervention.",
            "Designed the Branches module to centralise communication — bulk SMS and email for general announcements or targeted group messages — with branch-level audience scoping.",
            "Implemented a Roles & Permissions system in Settings that lets super-admins assign users to specific branches with tailored access levels, ensuring branch leaders only see and act on their own data.",
            "Used Squad's existing payment APIs for the giving infrastructure, keeping the financial layer reliable and PCI-compliant without rebuilding from scratch.",
        ],
        outcome:
            "Squad for Churches launched to an initial set of pilot churches. Admins reported a significant reduction in the number of tools they managed week-to-week. The self-registration link feature eliminated manual member onboarding for most churches in the pilot cohort, and the giving records module gave finance teams a single source of truth for the first time.",
        screens: [
            '/assets/img/s4c1.png',
            '/assets/img/s4c2.png',
            '/assets/img/s4c3.png',
        ],
    },
    {
        id: 3,
        slug: 'squad-bulk-payment',
        title: "Building Squad's Bulk Payment Solution for Scaling and Enterprise Businesses",
        image: '/assets/img/projectimg1.jpg',
        type: 'dev',
        primaryTags: ['UX Design', 'Frontend Development'],
        secondaryTags: ['B2B', 'FinTech', 'SaaS'],
        year: '2024',
        role: 'Frontend Engineer & UX Designer',
        overview:
            "Squad needed a way for enterprise clients to move large volumes of money to multiple recipients in a single operation — without the friction of one-by-one transfers. I led the design and frontend build of the bulk payment feature, from research through to production.",
        challenge:
            "Finance teams at scaling businesses were processing hundreds of payroll and vendor payments manually. Each transfer required individual confirmation, exposing them to human error and costing hours per cycle. There was no existing pattern in the Squad product to reference.",
        approach: [
            'Ran discovery sessions with 6 enterprise finance teams to map the current workflow and identify failure points.',
            'Designed a CSV-upload flow with inline validation, giving users immediate feedback on malformed rows before submission.',
            'Built a review-and-confirm step that surfaces totals, recipient counts, and flagged errors — reducing accidental submissions.',
            'Implemented real-time status polling so users could track each disbursement without refreshing the page.',
        ],
        outcome:
            "The feature launched to 40+ enterprise clients in the first month. Average time-to-complete a bulk payment dropped from ~45 minutes to under 5. Error rates on submissions fell by 70% due to the inline CSV validation.",
        screens: [
            '/assets/img/projectimg1.jpg',
        ],
        comingSoon: true,
    },
]
