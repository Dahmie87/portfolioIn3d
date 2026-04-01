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
    stack: Tech[];
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
        stack: ["django", "typescript", "postgres"],
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
        stack: ["nextjs", "react", "fastapi"],
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
        stack: ["langchain", "fastapi", "python"],
        status: "progress",
        image:
            "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=500&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
    },
    {
        id: 4,
        title: "AI Code Assistant",
        desc: "A VS Code extension that leverages machine learning to provide intelligent code suggestions, auto-completion, and bug detection in real-time.",
        stack: ["typescript", "langchain", "python"],
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
        stack: ["react", "typescript", "postgres"],
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
        stack: ["react", "nextjs", "fastapi"],
        status: "live",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        github: "https://github.com",
        demo: "https://example.com",
    },
];

export default projectsData;