// Importing necessary components from react-router-dom for routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Importing layout and page components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import WebDesign from "./components/WebDesignPage/WebDesign";
import AppDesign from "./components/AppDesignPage/AppDesign";
import GraphicDesign from "./components/GraphicDesignPage/GraphicDesign";
import AboutPage from "./components/AboutPage/AboutPage";
import LocationsPage from "./components/LocationPage/LocationsPage";
import ContactPage from "./components/ContactPage/ContactPage";

// The main App component that sets up the routing and layout for the application
function App() {
  return (
    // Router component to enable routing within the application
    <Router>
      <Navbar /> {/* Navbar component that appears on all pages*/}
      <Routes>
        {/* Routes component to define the route configuration */}
        <Route path="*" element={<h1>Not Found</h1>} />{" "}
        {/*Catch-all route for undefined paths */}
        <Route path="/" element={<HomePage />} /> {/*Route for the home page */}
        <Route path="/web-design" element={<WebDesign />} />{" "}
        {/*Route for the Web Design page*/}
        <Route path="/app-design" element={<AppDesign />} />{" "}
        {/*Route for the App Design page*/}
        <Route path="/graphic-design" element={<GraphicDesign />} />{" "}
        {/* Route for the Graphic Design page*/}
        <Route path="/our-company" element={<AboutPage />} />{" "}
        {/*Route for the About page */}
        <Route path="/locations" element={<LocationsPage />} />{" "}
        {/*Route for the Locations page */}
        <Route path="/contact" element={<ContactPage />} />{" "}
        {/*Route for the Contact page */}
      </Routes>
      <Footer /> {/* Footer component that appears on all pages*/}
    </Router>
  );
}

export default App;
