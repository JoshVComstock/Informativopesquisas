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
  @media (max-width: 980px) {
   & section{
    margin-top:15px;
width: 80%;
height: 40px;
   }
& nav div{
  height: 40px;
}
& nav div li link{
font-size:1em;

}
   & button{
    margin: 1em;
  padding: 0.5em 1em;
   }
 
   }
   @media (max-width: 720px) {
   & section{
    margin-top:10px;
    width: 90%;
    height: 35px;
   }
& nav div{
  height: 35px;
  width:85%;
}
   & button{
    margin: 0.5em;
  padding: 0.4em 0.8em;
   }
 
   }
   @media (max-width:520px) {
    display:none;
    & nav div{
 
}
  }
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
const Divlogos=styled.section`
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
@media (max-width: 980px) {
    padding: 10px;
font-size:0.6em;

  }
  @media (max-width: 720px) {
    padding: 10px;
  font-size:0.5em;
  }
font-family: 'Poppins', sans-serif;
  &:hover {
    background-color: #ffffffea;
    color:#3c425c;
  };

  


`;
const Nava=styled.nav`
width:100%;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
`;