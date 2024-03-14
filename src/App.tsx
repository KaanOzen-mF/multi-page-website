import MainPage from "./MainPage";
import AboutCardContainer from "./components/AboutCardComponent/AboutCardContainer";
import DesignCardContainer from "./components/DesignComponent/DesignCardContainer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <DesignCardContainer />
      <AboutCardContainer />
      <Footer />
    </>
  );
}

export default App;
