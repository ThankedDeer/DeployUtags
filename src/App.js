import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavbarUta from "./components/Navbar/Navbar";
import Bolsa from "./Pages/Bolsatrabajo";
import Exito from "./Pages/exito";
import Inter from "./Pages/Inter";
import Vacantes from "./Pages/Vacantes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SocialMedia from "./components/SocialMedia/SocialMedia";
function App() {
  return (
    <div className="app">
      <header>
        {/* <SocialMedia /> */}
        <NavbarUta />
      </header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/bolsa" element={<Bolsa/>} />
        <Route path="/exito" element={<Exito/>} />
        <Route path="/inter" element={<Inter/>} />
        <Route path="/vacantes" element={<Vacantes/>} />
      </Routes>
    </div>
  );
}

export default App;
