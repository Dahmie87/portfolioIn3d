import "./App.css";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import { BlurRevealStyles } from "./components/blur";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter> 
    <BlurRevealStyles/>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
      </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
