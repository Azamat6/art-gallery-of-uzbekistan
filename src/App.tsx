import "./scss/index.scss";

import VirtualConcept from "./components/Virtualconcept";
import AboutUs from "./components/AboutUs";
import Coins from "./components/Coins";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Photo from "./components/Photo";

function App() {
  return (
    <div className="app-container">
      <Header />
      <AboutUs />
      <Coins />
      <Photo />
      <Gallery />
      <VirtualConcept />
      <Footer />
      <div id="PmS2WwDTR"></div>
    </div>
  );
}

export default App;
