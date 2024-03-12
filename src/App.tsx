import Button from "./components/Button";
import MainPage from "./MainPage";

function App() {
  return (
    <>
      <MainPage />
      <Button children={"LEARN MORE"} className="bg-orange-50" />
      <Button
        children={"LEARN MORE"}
        className="bg-orange-500 text-orange-50"
      />
    </>
  );
}

export default App;
