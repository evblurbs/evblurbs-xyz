import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Bookshelf from "./pages/Bookshelf";
import Photos from "./pages/Photos";
import Projects from "./pages/Projects";
import TenYC from "./pages/10YC";
import SaturdayHoops from "./pages/SaturdayHoops";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="bookshelf" element={<Bookshelf />} />
          <Route path="photos" element={<Photos />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/10yc" element={<TenYC />} />
          <Route path="projects/saturday-hoops" element={<SaturdayHoops />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
