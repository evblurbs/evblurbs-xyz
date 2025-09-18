import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Bookshelf from "./pages/Bookshelf";
import Photos from "./pages/Photos";
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
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
