import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";
import Tools from "./pages/Tools";
import WorkExperience from "./pages/WorkExperience";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <>
      <div className="noise"></div>
      <Header></Header>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/experience" element={<WorkExperience />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
