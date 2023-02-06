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
  z-index:2;

`;
const Divnav = styled.div`
  display: flex;
  list-style: none;
  margin: 0;
  width: 70%;
  background: #5e636d9e;
  padding: 15px;
  justify-content: center;
    align-items: center;
`;
const Divlogo = styled.div`
 width: 100%;
 display: flex;
  justify-content: center;
 
  
  
`;
const Divlogos=styled.div`
margin-top:30px;
width: 80%;
height: 60px;
background: #ffffff4b;
opacity:0.8;
display: flex;
justify-content: space-around;
align-items: center;

`;
const Imglogo = styled.img`
   height: 55%;
  background-size: cover;
  transition: all 2s;
  &:hover {
    transform: scale(1.5);
  }
`;


export const Links = styled (Link)`
 color:#fff;
text-decoration: none;
padding: 20px;
transition: all 0.5s;

font-family: 'Poppins', sans-serif;

  /* border-radius: 5px; */
  &:hover {
    background-color: #ffffffea;
    color:#3c425c
  }
`;
const Nava=styled.div`
width:100%;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
`;