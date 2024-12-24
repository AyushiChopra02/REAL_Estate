import "./App.css";
import Companies from "./components/Companies/companies";
import Contact from "./components/Contact/Contact";
import Extra from "./components/Extra/Extra";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Residencies from "./components/Residencies/Residencies";
import Values from "./components/Value/Value";


function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Extra />
      </div>
      <Companies />
      <Residencies />
      <Values />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;