import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavbarUta from "./components/Navbar/Navbar";
import Bolsa from "./Pages/Bolsatrabajo";
import Exito from "./Pages/exito";
import Inter from "./Pages/Inter";
import Vacantes from "./Pages/Vacantes";
import Becas from "./Pages/Becas";
import TSU from "./Pages/TSU";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Estadias from "./Pages/Estadias";
import Admisiones from "./Pages/Admisiones";
function App() {
  return (
    <div className="app">
      <header>
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
        <Route path="/estadias" element={<Estadias/>} />
        <Route path="/admisiones" element={<Admisiones/>} />
        <Route path="/becas" element={<Becas/>} />
        <Route path="/tsu" element={<TSU/>} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
