import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/navbar";
import Portada from "./pages/Portada";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
