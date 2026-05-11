import padiSquareImage from "../assets/project-images/padisquare.png";
import pdfFreeImage from "../assets/project-images/pdffree.png";
import prodigyImage from "../assets/project-images/prodigy.png";

export type ProjectStatus = "live" | "progress";

export type Tech =
    | "react"
    | "nextjs"
    | "django"
    | "ssr"
    | "sqlite"
    | "javascript"
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
            prodigyImage,
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
            prodigyImage,
        github: "https://github.com/Dahmie87/LasuProdigy",
        demo: "https://prodigylasu.vercel.app",
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
            padiSquareImage,
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
            padiSquareImage,
        github: "https://github.com/Dahmie87/PadiSquare-next-app",
        demo: "https://padi-square-next-app.vercel.app/",
    },
    {
        id: 3,
        title: "PDFfree",
        desc: "A tool that allows users to create an entire book with standard chapters, literal content and genuine readable format using AI-powered content generation.",
        fullDescription:
            "PDFfree transforms structured prompts into long-form book drafts with chapter organization, formatting, and export capabilities. The platform helps users move from ideas to readable manuscripts in less time by combining guided prompt templates and model-driven content generation workflows.",
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
            pdfFreeImage,
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
            pdfFreeImage,
        github: "https://github.com/Dahmie87/inkter",
        demo: "https://example.com",
    },
    {
        id: 4,
        title: "Inkter",
        desc: "Inkter is a content sharing platform that allows both professional writers or average user to share text based content ",
        fullDescription:
            "Inkter is a content sharing platform that allows both professional writers or average user to share text based content ",
        stack: ["django", "sqlite", "javascript"],
        techStackDetailed: [
            {
                name: "Django",
                purpose: "This handles the core logic of the server from business logic to server side rendering",
                highlights: ["Django templates", "WSGi"],
            },
            {
                name: "sqlite",
                purpose: "This is a non persisent relaional database used here",
                highlights: ["Relational DBs", "SQL", "ORM"],
            },
            {
                name: "Javascript",
                purpose: "This handles the ui and client side",
                highlights: ["User Interface", "user experience", "Quality evaluation scripts"],
            },
        ],
        features: [
            "users can add posts with title, description",
            "users can see all added postss",
            "users can query by title, topic, author",
            "owner of a post can modify it",
            "admin gas super priviledge on all content ",
        ],
        screenshots: [
            "https://images.unsplash.com/",
            "https://images.unsplash.com/",
            "https://images.unsplash.com/",
        ],
        role:"Lead Backend Engineer",
        challenges: [
            "Controlling latency while preserving suggestion quality",
            "Reducing noisy or low-confidence completions",
            "Designing fallback behavior for offline/limited network",
        ],
        projectType: "Content Creation Playform",
        date: "2025-12",
        status: "live",
        image:
            "https://images.unsplash.com/ph",
        github: "https://github.com/Dahmie87/pdfree",
        demo: "https://inkter.onrender.com",
    },
    {
        id: 5,
        title: "Reside Hostels",
        desc: "Reside is a SaaS platform that helps students find and secure hostels directly without middlemen. It streamlines the accommodation search process by providing verified listings, location-based filtering, and direct communication with property owners",
        fullDescription:
            "Reside is a SaaS platform that helps students find and secure hostels directly without middlemen. It streamlines the accommodation search process by providing verified listings, location-based filtering, and direct communication with property owners, reducing stress and time spent during house hunting.",
        stack: ["nextjs", "typescript", "postgres"],
        techStackDetailed: [
            {
                name: "NextJS",
                purpose: "IFullstack React framework powering the SaaS platform",
                highlights: ["Server-side rendering for fast page loads  ", "API routes for backend logic", "Optimized routing and SEO"],
            },
            {
                name: "TypeScript",
                purpose: "Strong typing across frontend and backend.",
                highlights: ["Safer data handling for listings and users", "Improved maintainability and scalability"],
            },
            {
                name: "PostgreSQL",
                purpose: "tructured storage for users, listings, and transactions",
                highlights: ["Database access and schema management", "type-safe queries", "Simplified migrations"],
            },
        ],
        features: [
            "Verified hostel listings with images and detailed descriptions  ",
            "Location-based search (school proximity, budget, amenities)  ",
            "Real-time availability updates",
            "Direct chat/contact with landlords or agents",
            "Advanced filtering (price range, room type, facilities)",
        ],
        screenshots: [
            "https://images.unsplash.com/crop",
            "https://images.unsplash.com/crop",
            "https://images.unsplash.com/crop",
        ],
        role: "Frontend + Full Stack Engineer",
        challenges: [
            "Ensuring listing authenticity and reducing fake entries  ",
            "Optimizing search performance with large listing datasets",
            "Designing an intuitive UX for students under time pressure",
        ],
        projectType: "aaS Web Application (Student Accommodation Platform)",
        date: "2026-11",
        status: "progress",
        image:
            "https://images.unsplash.com/photo-",
        github: "https://github.com/Dahmie87/reside",
        demo: "",
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
            "https://images.unsplash.com/photo-1=crop",
            "https://images.unsplash.com/photo-1=crop",
            "https://images.unsplash.com/photo-1&fit=crop",
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
            "https://images.unsplash.com/photo-1",
        github: "https://github.com",
        demo: "https://example.com",
    },
];

export function getProjectById(id: number): Project | undefined {
    return projectsData.find((project) => project.id === id);
}

export default projectsData;