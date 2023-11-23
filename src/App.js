import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavbarUta from "./components/Navbar/Navbar";
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
      </Routes>
    </div>
  );
}

export default App;
