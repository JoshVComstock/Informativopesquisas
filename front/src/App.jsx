

import Navbar from "./components/navbar";
import Portada from "./pages/Portada";
import Capsulas from "./pages/Capsulas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Centros from "./pages/Centros";
import Detallecentro from "./pages/Detallecentro";
import Informacion from "./pages/Informacion";
import Programa from "./pages/Programa";
import Redcentros from "./pages/Redcentros";
import Nav from "./components/app/Nav";
import Programas from "./components/app/Programas";
import Inicio from "./components/app/Inicio";
import Informaciones from "./components/app/Informaciones";
import Centross from "./components/app/Centross";
import Quienlorealiza from "./components/app/Quienlorealiza";
import Colaboraciones from "./components/app/Colaboraciones";
import Contactanos from "./components/app/Contactanos";
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {
  return (
    <div>
<SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Nav/>}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/programas" element={<Programas/>}/>
          <Route path="/informaciones" element={<Informaciones/>}/>
          <Route path="/centross" element={<Centross/>}/>
          <Route path="/quienlorealiza" element={<Quienlorealiza/>}/>
          <Route path="/colaboraciones" element={<Colaboraciones/>}/>
          <Route path="/contactanos" element={<Contactanos/>}/>
          {/* <Route path="/ingresar" element={<ingresar/>}/> */}

         
          </Route>
          <Route path="/ingresar" element={<Navbar/>}>
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
      </SkeletonTheme>
    </div>
  );
}

export default App;