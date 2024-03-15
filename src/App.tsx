import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import WebDesign from "./components/WebDesignPage/WebDesign";
import AppDesign from "./components/AppDesignPage/AppDesign";
import GraphicDesign from "./components/GraphicDesignPage/GraphicDesign";
import AboutPage from "./components/AboutPage";
import LocationsPage from "./components/LocationPage/LocationsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/app-design" element={<AppDesign />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />

        <Route path="/our-company" element={<AboutPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
