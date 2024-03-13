import MainPage from "./MainPage";
import AboutCardContainer from "./components/AboutCardContainer";
import DesignCardContainer from "./components/DesignComponent/DesignCardContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <DesignCardContainer />
      <AboutCardContainer />
    </>
  );
}

export default App;
