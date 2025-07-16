import "./scss/index.scss";
import { lazy } from "react";

import Header from "./components/Header";

const VirtualConcept = lazy(() => import("./components/Virtualconcept"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Coins = lazy(() => import("./components/Coins"));
const Footer = lazy(() => import("./components/Footer"));
const Photo = lazy(() => import("./components/Photo"));
const Gallery = lazy(() => import("./components/Gallery"));

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
