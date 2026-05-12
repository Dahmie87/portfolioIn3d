export type BlogPost = {
  id: number;
  title: string;
  category: string;
  slug: string | null;
  content: string;
  created_at: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Python's Big Three for Web Development: FastAPI, Django, and Flask",
    category: "Python",
    slug: "python-big-three-web-frameworks",
    created_at: "2026-05-12",
    content:
      "When people talk about building web applications with Python, three frameworks come up again and again: Flask, Django, and FastAPI. They exist because Python alone can handle simple web responses, but modern applications need routing, validation, authentication, database integration, and deployment-friendly structure. These frameworks provide that foundation so developers can focus less on repetitive plumbing and more on product logic.\n\nAlthough they solve the same general problem, each one serves a different purpose. Flask is lightweight and deliberately unopinionated. It gives you the essentials for request handling and lets you decide how the rest of the application should be structured. That flexibility makes Flask a strong choice for small projects, prototypes, and teams that want complete control over architecture. The trade-off is that as the project grows, the lack of built-in conventions can make the codebase harder to coordinate and maintain.\n\nDjango takes the opposite approach. It is a batteries-included framework that ships with a large set of built-in tools for authentication, admin dashboards, ORM support, security features, and template rendering. If the goal is to move quickly from idea to a full-featured product, Django is hard to ignore. Its opinionated structure helps teams build consistently, but that same structure can feel rigid when a project needs highly customized behavior. Django works best when you value completeness, stability, and a proven monolithic workflow.\n\nFastAPI represents the modern asynchronous side of the Python web ecosystem. It is built on ASGI, which supports asynchronous request handling and makes it well suited for high-concurrency applications, APIs, and microservices. FastAPI is known for performance, type hints, automatic validation, and clean API documentation. Like Flask, it gives developers a high degree of freedom; like Django, it scales well when the system becomes more complex. Its strength is that it encourages modular, service-oriented design rather than forcing everything into one large application structure.\n\nThe practical difference between the three is not just speed or syntax. It is philosophy. Flask gives you freedom. Django gives you completeness. FastAPI gives you modern async performance and strong API ergonomics. If you are building a small app or experimenting with an idea, Flask may be enough. If you want a full-stack product with a lot of features available out of the box, Django is often the better fit. If you are building APIs, microservices, or performance-sensitive backends, FastAPI is usually the strongest choice.\n\nIn the end, there is no universal winner. The best framework depends on the shape of the problem you are solving, the size of the team, and how much structure the project needs. Python remains attractive precisely because the ecosystem gives you options without forcing a single style of architecture. Understanding the strengths and limits of Flask, Django, and FastAPI makes framework choice less about hype and more about fit." ,
  },
];

export const blogPostCount = blogPosts.length;