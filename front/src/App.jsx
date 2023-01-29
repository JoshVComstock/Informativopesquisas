import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/navbar";
import Portada from "./pages/Portada";
import Capsulas from "./pages/Capsulas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Centros from "./pages/Centros";
import Detallecentro from "./pages/Detallecentro";
import Informacion from "./pages/Informacion";
import Programa from "./pages/Programa";
import Redcentros from "./pages/Redcentros";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
          <Route path="portada" element={<Portada />} />
          <Route path="capsulas" element={<Capsulas />} />
          <Route path="centros" element={<Centros />} />
          <Route path="detallecentro" element={<Detallecentro />} />
          <Route path="informacion" element={<Informacion />} />
          <Route path="programa" element={<Programa />} />
          <Route path="redcentro" element={<Redcentros />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
