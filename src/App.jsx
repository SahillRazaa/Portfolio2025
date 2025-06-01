import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import ScrollToTop from "./utils/ScrollToTop";
import MyResume from "./pages/MyResume";
import SingleProject from "./pages/SingleProject";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
        <Route path='/projects/:id' element={<SingleProject/>}></Route>
        <Route path='/my-resume' element={<MyResume/>}></Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
