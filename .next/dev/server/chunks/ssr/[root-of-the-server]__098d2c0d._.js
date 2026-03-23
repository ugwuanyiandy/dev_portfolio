module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: 1,
        slug: 'gtfm-investment-portal',
        title: 'GTFM Customer Investment Portal — Tiered Portfolio Management for Every Risk Appetite',
        image: '/assets/img/gtfm0.png',
        type: 'dev',
        primaryTags: [
            'UX Design',
            'Frontend Development'
        ],
        secondaryTags: [
            'FinTech',
            'Investment',
            'SaaS',
            'B2C'
        ],
        year: '2024',
        role: 'Frontend Engineer & Product Designer',
        overview: "Guaranty Trust Fund Managers (GTFM) needed a self-service web portal where customers could browse, subscribe to, and manage their investment portfolios — across a suite of 8 distinct funds spanning Naira and Dollar instruments. The portal had to serve a wide range of customers: from retail investors starting with ₦1,000 to high-net-worth clients placing $200,000+ in institutional notes. I led the design and frontend build end-to-end.",
        challenge: "GTFM's existing customer touchpoints were phone-based and relationship-manager-driven. There was no digital self-service layer, which capped the team's capacity and excluded retail customers who didn't have access to a dedicated RM. The core design challenge was presenting 8 structurally different funds — with different currencies, risk profiles, minimum investments, and hold periods — in a way that helped customers make confident decisions without financial advisory.",
        approach: [
            "Mapped each fund's key decision variables (currency, minimum, hold period, yield, risk tier) and designed a comparison-friendly fund card system that surfaces the most relevant information at a glance.",
            "Created a tiered access model: retail customers see Naira-denominated retail funds (FUND724, GTMMF, GTFIF, GTBF, GTEIF) by default; high-net-worth tiers unlock institutional instruments (GTDIN, GTNIN) with minimum subscriptions of $200K+.",
            "Designed a fund detail flow with separate Overview, Benefits, and Features tabs — avoiding information overload while ensuring each fund's unique terms were fully discoverable.",
            "Built a portfolio dashboard showing live holdings, accrued dividends, YTD returns, and redemption eligibility per fund — with clear hold-period countdowns to reduce premature redemption requests.",
            "Designed and implemented the subscription flow with inline validation, currency formatting (₦ and $), and a review step that confirms amount, estimated yield, and hold period before submission.",
            "Collaborated with the backend team to integrate real-time NAV pricing (offer and bid prices) and interest rate feeds across all 8 funds."
        ],
        outcome: "The portal launched to an initial cohort of GTFM customers across all tiers. Self-service subscriptions accounted for 40% of new fund subscriptions in the first two months, reducing RM-assisted onboarding load significantly. The tiered fund visibility model successfully steered retail customers toward appropriate lower-minimum products while surfacing institutional options to qualified customers.",
        screens: [
            '/assets/img/gtfm0.png',
            '/assets/img/gtfm1.png',
            '/assets/img/gtfm2.png'
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
                    '2024 YTD return: 19.73%'
                ]
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
                    'Dividends paid quarterly'
                ]
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
                    '2024 YTD return: 6.0%'
                ]
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
                    'Management fee: 2.0% of NAV'
                ]
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
                    'Management fee: 1.5% of NAV'
                ]
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
                    '2024 YTD return: 6.95%'
                ]
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
                    'Tenor varies by instrument'
                ]
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
                    'Yield subject to market conditions and volume'
                ]
            }
        ]
    },
    {
        id: 2,
        slug: 'squad-for-churches',
        title: "Squad for Churches — An All-in-One Platform for Giving, Members, and Ministry Operations",
        image: '/assets/img/s4c1.png',
        type: 'dev',
        primaryTags: [
            'UX Design',
            'Frontend Development'
        ],
        secondaryTags: [
            'SaaS',
            'FinTech',
            'Church Tech'
        ],
        year: '2024',
        role: 'Frontend Engineer & Product Designer',
        overview: "Squad for Churches is an all-in-one church management platform built on Squad's payment infrastructure. It gives churches everything they need to manage giving, engage members, and streamline operations — without the administrative overhead that pulls leaders away from ministry. I designed and built the product end-to-end, from the giving flows to the branch and communications layer.",
        challenge: "Churches handle a unique blend of financial operations, people management, and mass communications — across multiple branches, member groups, and giving purposes. Most existing tools solve one piece of the puzzle. Church admins were stitching together payment links, spreadsheets, WhatsApp broadcasts, and separate email tools, with no unified record of who gave what, who attended which branch, or which announcements reached which group.",
        approach: [
            "Mapped the full admin workflow across giving, membership, and communications to identify where time was being lost and where data was siloed.",
            "Designed the Giving module around three instruments: payment links for one-time and campaign giving, virtual accounts for dedicated purposes (tithes, building fund, missions), and a unified giving records view for reconciliation and reporting.",
            "Built the Members module with group-based organisation and a public member registration link flow — so new members could self-register via a form without admin intervention.",
            "Designed the Branches module to centralise communication — bulk SMS and email for general announcements or targeted group messages — with branch-level audience scoping.",
            "Implemented a Roles & Permissions system in Settings that lets super-admins assign users to specific branches with tailored access levels, ensuring branch leaders only see and act on their own data.",
            "Used Squad's existing payment APIs for the giving infrastructure, keeping the financial layer reliable and PCI-compliant without rebuilding from scratch."
        ],
        outcome: "Squad for Churches launched to an initial set of pilot churches. Admins reported a significant reduction in the number of tools they managed week-to-week. The self-registration link feature eliminated manual member onboarding for most churches in the pilot cohort, and the giving records module gave finance teams a single source of truth for the first time.",
        screens: [
            '/assets/img/s4c1.png',
            '/assets/img/s4c2.png',
            '/assets/img/s4c3.png'
        ]
    },
    {
        id: 3,
        slug: 'squad-bulk-payment',
        title: "Building Squad's Bulk Payment Solution for Scaling and Enterprise Businesses",
        image: '/assets/img/projectimg1.jpg',
        type: 'dev',
        primaryTags: [
            'UX Design',
            'Frontend Development'
        ],
        secondaryTags: [
            'B2B',
            'FinTech',
            'SaaS'
        ],
        year: '2024',
        role: 'Frontend Engineer & UX Designer',
        overview: "Squad needed a way for enterprise clients to move large volumes of money to multiple recipients in a single operation — without the friction of one-by-one transfers. I led the design and frontend build of the bulk payment feature, from research through to production.",
        challenge: "Finance teams at scaling businesses were processing hundreds of payroll and vendor payments manually. Each transfer required individual confirmation, exposing them to human error and costing hours per cycle. There was no existing pattern in the Squad product to reference.",
        approach: [
            'Ran discovery sessions with 6 enterprise finance teams to map the current workflow and identify failure points.',
            'Designed a CSV-upload flow with inline validation, giving users immediate feedback on malformed rows before submission.',
            'Built a review-and-confirm step that surfaces totals, recipient counts, and flagged errors — reducing accidental submissions.',
            'Implemented real-time status polling so users could track each disbursement without refreshing the page.'
        ],
        outcome: "The feature launched to 40+ enterprise clients in the first month. Average time-to-complete a bulk payment dropped from ~45 minutes to under 5. Error rates on submissions fell by 70% due to the inline CSV validation.",
        screens: [
            '/assets/img/projectimg1.jpg'
        ],
        comingSoon: true
    }
];
}),
"[project]/src/components/Header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Header.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Header.tsx <module evaluation>", "default");
}),
"[project]/src/components/Header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Header.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Header.tsx", "default");
}),
"[project]/src/components/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((p)=>({
            slug: p.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === slug);
    if (!project) return {};
    return {
        title: `${project.title} — Andrew Ugwuanyi`
    };
}
async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === slug);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#F7FAFC] dark:bg-gray-950 font-sans selection:bg-purple-500/30 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-y-0 left-1/2 -translate-x-1/2 w-[628px] border-x border-[#ECECEC] dark:border-gray-800 pointer-events-none z-[10]"
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[628px] mx-auto px-6 pt-40 pb-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#projects",
                                className: "inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-10 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 25
                                    }, this),
                                    "All projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 mb-4",
                                children: [
                                    project.primaryTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-3 py-1.5 rounded-lg text-xs font-normal ${tag.toLowerCase().includes('design') || tag.toLowerCase().includes('research') ? 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300' : 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300'}`,
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 29
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-px bg-gray-200 dark:bg-gray-800"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, this),
                                    project.secondaryTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-3 py-1.5 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-normal",
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight font-founders mb-3",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 dark:text-gray-400 mb-10",
                                children: [
                                    project.role,
                                    " · ",
                                    project.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 71,
                                columnNumber: 21
                            }, this),
                            project.comingSoon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[24px] bg-gray-100 dark:bg-gray-900 overflow-hidden mb-14",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full aspect-[16/9] overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: project.image,
                                            alt: project.title,
                                            fill: true,
                                            className: "object-cover object-top blur-sm scale-105 opacity-40",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex flex-col items-center justify-center text-center px-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-semibold tracking-widest uppercase mb-4",
                                                    children: "Case study"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-gray-900 dark:text-white font-founders tracking-tight mb-2",
                                                    children: "Coming Soon"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400 font-light max-w-xs",
                                                    children: "This project is still in the works. Check back soon."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 25
                            }, this),
                            !project.comingSoon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[24px] overflow-hidden bg-gray-100 dark:bg-gray-900 mb-14 shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full aspect-[16/9]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: project.image,
                                                alt: project.title,
                                                fill: true,
                                                className: "object-cover object-top",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3",
                                                        children: "Overview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light",
                                                        children: project.overview
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-[#ECECEC] dark:border-gray-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3",
                                                        children: "The Challenge"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light",
                                                        children: project.challenge
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-[#ECECEC] dark:border-gray-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4",
                                                        children: "My Approach"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-3",
                                                        children: project.approach.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex gap-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "shrink-0 w-6 h-6 mt-0.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-semibold flex items-center justify-center",
                                                                        children: i + 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    step
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 37
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 25
                                            }, this),
                                            project.screens.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: project.screens.slice(1).map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[24px] overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-full aspect-[16/9]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                src: src,
                                                                alt: `${project.title} — screen ${i + 2}`,
                                                                fill: true,
                                                                className: "object-cover object-top"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-[#ECECEC] dark:border-gray-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3",
                                                        children: "Outcome"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light",
                                                        children: project.outcome
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 25
                                            }, this),
                                            project.funds && project.funds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t border-[#ECECEC] dark:border-gray-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6",
                                                                children: "Investment Products Built"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid gap-4",
                                                                children: project.funds.map((fund)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-2xl bg-gray-100 dark:bg-gray-900 p-5 space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start justify-between gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[11px] font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-0.5",
                                                                                                children: fund.code
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                                                lineNumber: 207,
                                                                                                columnNumber: 57
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                                className: "text-base font-semibold text-gray-900 dark:text-white leading-snug",
                                                                                                children: fund.label
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                                                lineNumber: 210,
                                                                                                columnNumber: 57
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                                        lineNumber: 206,
                                                                                        columnNumber: 53
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col items-end gap-1.5 shrink-0",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: `px-2.5 py-1 rounded-full text-xs font-medium ${fund.currency === 'USD' ? 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400' : 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'}`,
                                                                                                children: fund.currency
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                                                lineNumber: 215,
                                                                                                columnNumber: 57
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                                                                children: [
                                                                                                    "Min ",
                                                                                                    fund.minAmount
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                                                lineNumber: 222,
                                                                                                columnNumber: 57
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                                        lineNumber: 214,
                                                                                        columnNumber: 53
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                                lineNumber: 205,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light",
                                                                                children: fund.shortDescription
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                                lineNumber: 229,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "space-y-1",
                                                                                children: fund.features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex gap-2 text-sm text-gray-600 dark:text-gray-400 font-light",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "mt-1.5 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                                                lineNumber: 237,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            f
                                                                                        ]
                                                                                    }, i, true, {
                                                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                                        lineNumber: 236,
                                                                                        columnNumber: 57
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                                lineNumber: 234,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, fund.code, true, {
                                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                        lineNumber: 200,
                                                                        columnNumber: 45
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-16 pt-10 border-t border-[#ECECEC] dark:border-gray-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#projects",
                                    className: "relative overflow-hidden inline-flex items-center gap-2 hover:gap-5 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-gray-900 px-6 py-3 text-base font-medium transition-all duration-500 ease-in-out-back hover:bg-gray-800 dark:hover:bg-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-0 animate-sheen dark:hidden",
                                            style: {
                                                background: 'linear-gradient(120deg, transparent 10%, rgba(192,192,192,0.3) 40%, rgba(255,255,255,0.5) 50%, rgba(192,192,192,0.3) 60%, transparent 90%)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-0 animate-sheen hidden dark:block",
                                            style: {
                                                background: 'linear-gradient(120deg, transparent 10%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 60%, transparent 90%)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 29
                                        }, this),
                                        "Back to projects"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 253,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "py-10 text-center text-gray-500 dark:text-gray-500 text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Designed & Developed by Andrew Ugwuanyi."
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 272,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 271,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/projects/[slug]/page.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__098d2c0d._.js.map