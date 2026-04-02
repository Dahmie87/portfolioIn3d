export type ProjectStatus = "live" | "progress";

export type Tech =
    | "react"
    | "nextjs"
    | "django"
    | "fastapi"
    | "typescript"
    | "python"
    | "postgres"
    | "langchain";

export interface Project {
    id: number;
    title: string;
    desc: string;
    fullDescription: string;
    stack: Tech[];
    techStackDetailed: {
        name: string;
        purpose: string;
        highlights: string[];
    }[];
    features: string[];
    screenshots: string[];
    role: string;
    challenges: string[];
    projectType: string;
    date: string;
    status: ProjectStatus;
    image: string;
    github: string;
    demo: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "ProdigyAI For Students",
        desc: "An academic tool designed to empower students by providing a seamless platform to assess themselves, organize schedules, track assignments, and collaborate on projects, making academic life simpler and more productive.",
        fullDescription:
            "ProdigyAI is an academic productivity platform built to support students from planning through execution. It combines personalized assessment, assignment tracking, and collaborative project spaces in one focused interface. The product was designed around low-friction onboarding and consistent feedback loops, helping users stay organized while getting practical support for coursework and deadlines.",
        stack: ["django", "typescript", "postgres"],
        techStackDetailed: [
            {
                name: "Django",
                purpose: "Core backend and API orchestration",
                highlights: ["Modular services", "Auth and permissions", "Secure admin tooling"],
            },
            {
                name: "TypeScript + React",
                purpose: "Type-safe frontend for dashboards and workflows",
                highlights: ["Reusable UI primitives", "Predictable state management", "Fast page transitions"],
            },
            {
                name: "PostgreSQL",
                purpose: "Relational storage for users, tasks, and assessments",
                highlights: ["Query optimization", "Data integrity constraints", "Scalable indexing strategy"],
            },
        ],
        features: [
            "Smart assignment planner with due-date risk alerts",
            "Course-by-course performance tracking",
            "Collaborative project boards for study groups",
            "Weekly learning summaries and momentum reports",
            "Instructor-friendly export for progress review",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=900&fit=crop",
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1400&h=900&fit=crop",
            "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1400&h=900&fit=crop",
        ],
        role: "AI/Full-stack Engineer",
        challenges: [
            "Building adaptive scheduling logic without overwhelming users",
            "Balancing analytics depth with clean student-facing UI",
            "Maintaining performance with growing assessment datasets",
        ],
        projectType: "EdTech SaaS Platform",
        date: "2025-10",
        status: "live",
        image:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
    },
    {
        id: 2,
        title: "PadiSquare StoreFront",
        desc: "An e-commerce platform that allows traders to create their own online marketspace called storefront. PadiSquare enables dynamic management of trades, orders, and payments.",
        fullDescription:
            "PadiSquare StoreFront is a commerce platform that helps traders launch and manage digital storefronts quickly. It provides catalog management, order handling, and payment flow tracking with an emphasis on clarity for non-technical business owners. The system supports multiple merchants while preserving a consistent shopping and checkout experience for end users.",
        stack: ["nextjs", "react", "fastapi"],
        techStackDetailed: [
            {
                name: "Next.js",
                purpose: "Merchant and customer-facing web experience",
                highlights: ["SEO-ready pages", "Server rendering for speed", "Route-based code splitting"],
            },
            {
                name: "React",
                purpose: "Interactive storefront widgets and admin components",
                highlights: ["Component-driven architecture", "Form and table tooling", "Live inventory indicators"],
            },
            {
                name: "FastAPI",
                purpose: "Transactional APIs for catalog, orders, and payments",
                highlights: ["Typed contracts", "High-throughput endpoints", "Clean OpenAPI docs"],
            },
        ],
        features: [
            "Custom storefront themes for each trader",
            "Order lifecycle dashboard with fulfillment stages",
            "Integrated payment status reconciliation",
            "Product variants and stock management",
            "Sales insights for top products and repeat customers",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1460925895917-adf4e4be4f3f?w=1400&h=900&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=900&fit=crop",
            "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1400&h=900&fit=crop",
        ],
        role: "Lead Product Engineer",
        challenges: [
            "Designing a simple UX for users with varying technical literacy",
            "Ensuring payment flow reliability across edge cases",
            "Keeping admin dashboard responsive on lower-end devices",
        ],
        projectType: "Multi-tenant E-commerce",
        date: "2025-06",
        status: "live",
        image:
            "https://images.unsplash.com/photo-1460925895917-adf4e4be4f3f?w=800&h=500&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
    },
    {
        id: 3,
        title: "Prompt2PDF",
        desc: "A tool that allows users to create an entire book with standard chapters, literal content and genuine readable format using AI-powered content generation.",
        fullDescription:
            "Prompt2PDF transforms structured prompts into long-form book drafts with chapter organization, formatting, and export capabilities. The platform helps users move from ideas to readable manuscripts in less time by combining guided prompt templates and model-driven content generation workflows.",
        stack: ["langchain", "fastapi", "python"],
        techStackDetailed: [
            {
                name: "LangChain",
                purpose: "Prompt orchestration and generation pipelines",
                highlights: ["Chain composition", "Context management", "Model abstraction layer"],
            },
            {
                name: "FastAPI",
                purpose: "Backend APIs for generation jobs and exports",
                highlights: ["Async processing", "Typed validation", "Background task queue integration"],
            },
            {
                name: "Python",
                purpose: "Core generation and document formatting engine",
                highlights: ["PDF assembly", "Template rendering", "Content quality checks"],
            },
        ],
        features: [
            "Prompt templates for fiction, non-fiction, and technical books",
            "Auto-generated chapter outlines and summaries",
            "Editable generation history per chapter",
            "One-click PDF export with consistent typography",
            "Versioning to compare draft iterations",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1400&h=900&fit=crop",
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1400&h=900&fit=crop",
            "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1400&h=900&fit=crop",
        ],
        role: "AI Engineer",
        challenges: [
            "Keeping chapter tone and style consistent across long outputs",
            "Reducing hallucinations in factual content",
            "Optimizing generation latency for large manuscripts",
        ],
        projectType: "AI Writing Tool",
        date: "2026-01",
        status: "progress",
        image:
            "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=500&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
    },
    {
        id: 4,
        title: "Inkter",
        desc: "Inkter is a content sharing platform that allows both professional writers or average user to share text based content ",
        fullDescription:
            "Inkter is a content sharing platform that allows both professional writers or average user to share text based content ",
        stack: ["typescript", "langchain", "python"],
        techStackDetailed: [
            {
                name: "TypeScript",
                purpose: "Extension host logic and UI integration",
                highlights: ["VS Code API usage", "Command orchestration", "Lightweight panel rendering"],
            },
            {
                name: "LangChain",
                purpose: "Prompt routing and context-aware completion chains",
                highlights: ["Few-shot templates", "Context chunking", "Tool invocation policies"],
            },
            {
                name: "Python",
                purpose: "Model-side services for ranking and diagnostics",
                highlights: ["Inference adapters", "Telemetry processing", "Quality evaluation scripts"],
            },
        ],
        features: [
            "Inline code suggestions tuned to open-file context",
            "Issue hints with quick-fix style recommendations",
            "Command palette actions for refactors and docs",
            "Configurable assistant behavior by project type",
            "Usage telemetry dashboard for improvement loops",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&h=900&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&h=900&fit=crop",
            "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1400&h=900&fit=crop",
        ],
        role: "ML + Developer Tools Engineer",
        challenges: [
            "Controlling latency while preserving suggestion quality",
            "Reducing noisy or low-confidence completions",
            "Designing fallback behavior for offline/limited network",
        ],
        projectType: "Developer Productivity Tool",
        date: "2025-12",
        status: "live",
        image:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
    },
    {
        id: 5,
        title: "DataViz Dashboard",
        desc: "A real-time analytics dashboard for visualizing complex datasets with interactive charts, filters, and custom reports for business intelligence.",
        fullDescription:
            "DataViz Dashboard is a business intelligence interface for monitoring key metrics, trends, and anomalies in near real-time. It supports flexible filtering and role-specific reporting views, helping teams move from raw data to operational decisions with less friction.",
        stack: ["react", "typescript", "postgres"],
        techStackDetailed: [
            {
                name: "React",
                purpose: "Interactive analytics views and control panels",
                highlights: ["Chart composition", "Responsive layouts", "Reusable filter components"],
            },
            {
                name: "TypeScript",
                purpose: "Reliable domain models and API contracts",
                highlights: ["Typed metrics pipeline", "Safer refactors", "Better editor support"],
            },
            {
                name: "PostgreSQL",
                purpose: "Analytical data storage with aggregated views",
                highlights: ["Materialized views", "Index tuning", "Historical data partitioning"],
            },
        ],
        features: [
            "Live KPI widgets with threshold alerts",
            "Drill-down reports by team, region, and timeframe",
            "Saved filter presets for recurring analysis",
            "Exportable PDF and CSV summaries",
            "Role-based access for sensitive metrics",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=900&fit=crop",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&h=900&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop",
        ],
        role: "Frontend + Data Platform Engineer",
        challenges: [
            "Rendering high-volume datasets without UI lag",
            "Maintaining visual consistency across many chart types",
            "Aligning metric definitions across business teams",
        ],
        projectType: "Business Intelligence Dashboard",
        date: "2024-11",
        status: "progress",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
    },
    {
        id: 6,
        title: "Mobile Weather App",
        desc: "A cross-platform mobile application providing real-time weather updates, forecasts, and severe weather alerts with beautiful animations.",
        fullDescription:
            "Mobile Weather App delivers accurate short-term and weekly forecasts in a lightweight interface optimized for quick checks. It combines location-aware weather data with clear visual hierarchy so users can instantly understand current conditions and upcoming changes.",
        stack: ["react", "nextjs", "fastapi"],
        techStackDetailed: [
            {
                name: "React",
                purpose: "Cross-platform style component architecture",
                highlights: ["Reusable weather cards", "State-driven animations", "Accessible controls"],
            },
            {
                name: "Next.js",
                purpose: "Web companion app and content endpoints",
                highlights: ["Fast initial load", "SEO landing pages", "Edge-ready deployment"],
            },
            {
                name: "FastAPI",
                purpose: "Forecast normalization and alert APIs",
                highlights: ["Caching strategy", "Provider failover", "Geo-based request handling"],
            },
        ],
        features: [
            "Current condition cards with hourly timeline",
            "7-day forecast with precipitation and wind layers",
            "Severe weather alert system by location",
            "Saved locations and quick switching",
            "Lightweight animations tuned for battery efficiency",
        ],
        screenshots: [
            "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1400&h=900&fit=crop",
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1400&h=900&fit=crop",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1400&h=900&fit=crop",
        ],
        role: "Full-stack Product Engineer",
        challenges: [
            "Handling inconsistent weather provider payloads",
            "Balancing animation polish with mobile performance",
            "Designing clear risk alerts for non-technical users",
        ],
        projectType: "Consumer Weather Application",
        date: "2025-03",
        status: "live",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
    },
];

export function getProjectById(id: number): Project | undefined {
    return projectsData.find((project) => project.id === id);
}

export default projectsData;