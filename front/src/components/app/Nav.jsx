import React from "react";
import styled from "styled-components";
import { Link , Outlet } from "react-router-dom";
const Nav = () => {
  return (
    <>
    <Bodydiv>
        <Divlogo>
          <Divlogos>
            <Imglogo src="https://unifranz.edu.bo/wp-content/themes/unifranz/dist/images/logo_583717f4.png" alt="Logo 1" />
            <Imglogo src="https://www.biotech.com.bo/Administrador/images/logo.png" alt="Logo 2" />
            <Imglogo src="https://www.minsalud.gob.bo/images/web/SedesSanta.jpg" alt="Logo 3" />
            
          </Divlogos>
          </Divlogo>
        <Nava>
          <Divnav>
            <li><Links to="/">Inicio</Links></li>
            <li><Links to="/programas">Programas</Links></li>
            <li><Links to="/informaciones">Informaciones</Links></li>
            <li><Links to="/centross">Centros</Links></li>
            <li><Links to="/quienlorealiza">¿Quien lo realiza?</Links></li>
            <li><Links to="/colaboraciones">Colaboracion</Links></li>
            <li><Links to="/contactanos">Contactanos</Links></li>
            <li><Links to="/ingresar">ingresar</Links></li>

          </Divnav>
     
        </Nava>
 
    </Bodydiv>
    <Outlet/>
</>


  );
};

export default Nav;

const Bodydiv = styled.div`
  position:absolute;
  width:100%;
  display: flex;
  flex-direction: column;

`;
const Divnav = styled.div`
  display: flex;
  list-style: none;
  margin: 0;
  width: 70%;
  background: #4b829f99;
  padding: 15px;
 
`;
const Divlogo = styled.div`
 width: 100%;
 display: flex;
  justify-content: center;
 
  
  
`;
const Divlogos=styled.div`
width: 80%;
background: #ffffff57;
opacity:0.8;
display: flex;
justify-content: space-between;
&:hover{
  transition: 0.2s;
scale:(2);
background: #ffffffc0;
}
`;
const Imglogo = styled.img`
   height: 70%;
  width: 60px;
`;


const Links = styled (Link)`
 color:#fff;
text-decoration: none;
padding: 20px;
transition: 0.5s;
&:hover{
  transition: 0.5s;
scale:(0.8);
background: #0066ff;
}
`;
const Nava=styled.div`
width:100%;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
`;