import "./App.css";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import ProjectsPage from "./pages/projects.tsx";
import ProjectDetailsPage from "./pages/project-details";
import ContactPage from "./pages/contact";
import { BlurRevealStyles } from "./components/blur";
import PortfolioFooter from "./components/footer";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AdminApp from "./admin/App.jsx";


function AppRoutes() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/.admin");

  return (
    <>
      <Routes>
        <Route path="/.admin/*" element={<AdminApp />} />
        <Route path="/" element={<HomePage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/projects/:id" element={<ProjectDetailsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      {!isAdminRoute && <PortfolioFooter />}
    </>
  );
}

function App() {
  return (
    <>
    <BrowserRouter> 
    <BlurRevealStyles/>
      <AppRoutes />
   </BrowserRouter>
    </>
  );
}

export default App;
