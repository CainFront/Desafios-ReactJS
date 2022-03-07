import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings={"hola soy el greetings"} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
