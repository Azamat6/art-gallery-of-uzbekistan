import { Routes, Route } from "react-router-dom";
import ExhibitionPage from "./ExhibitionPage";
import ExhibitionDetails from "./ExhibitionDetails";

const App = () => (
  <Routes>
    <Route path="/" element={<ExhibitionPage />} />
    <Route path="/:slug" element={<ExhibitionDetails />} />
  </Routes>
);

export default App;
