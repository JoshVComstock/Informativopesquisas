import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Containerdiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Divtitulo = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
`;
export const Divcrudf = styled.div`
  min-height: calc(100% - 50px);
  display: flex;
  justify-content: space-around;
`;
export const Divformulario = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  padding: 30px;
  border-radius: 10px;
`;
export const Divinput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px 0px;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  height: 25px;
`;
export const Textarea = styled.textarea`
  height: 60px;
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  border: none;
`;
export const Botonagregar = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #0066ff;
  color: #fff;
  &:hover{
    transition :0.2 s;
    background: #114378;
  }
`;
export const Botonfile = styled.button`
  display: inline-block;
  position: relative;
  background-color: #186cc3;
  color: #fff;
  border: 0;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: ease-out 120ms background-color;
  &:active{
    background-color: #114378;
  }
  &:hover{
    background-color: #16579B;
  }
`;
export const Inputfile =styled.input`
 border: none;
`;
export const Label =styled.label`
    font-size: 17px;
    color: rgba(0,0,0,.8);

`;
export const Divh1 =styled.div`
 
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    border-bottom:2px solid #000 ;

`;
export const Divtabla = styled.div`
  width: 50%;
`;
export const Tabla=styled.table`
  width: 100%;
  border: 1px solid #000;
`;
export const Tablahead=styled.thead`
background: #359bd6;
  margin-bottom: 15px;
  color: white;
  height: 40px;

`;
export const Td=styled.td`
  
`;
export const Botonesacciones=styled.button`
  padding: 5px;
  margin-left: 4px;
  border: none;
 
  border-radius: 5px; background: #0066dd;
  color: #fff;
  cursor: pointer;
`;
export const Img=styled.img`
  width: 50px;
  height: 50px;
`;