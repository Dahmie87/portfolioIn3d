import { Link } from "react-router-dom";

export default function PortfolioFooter() {
  return (
    <footer className="bg-white border-t border-slate-200 px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-slate-500">
        <p>
          Copyright {new Date().getFullYear()} Omotayo Damilare. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/projects" className="hover:text-slate-900 transition-colors">
            Projects
          </Link>
          <Link to="/blog" className="hover:text-slate-900 transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-slate-900 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
