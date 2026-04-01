import "./App.css";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import ProjectsPage from "./pages/projects.tsx";
import ContactPage from "./pages/contact";
import { BlurRevealStyles } from "./components/blur";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter> 
    <BlurRevealStyles/>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
