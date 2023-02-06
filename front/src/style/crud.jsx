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
  margin-top: 35px;
  margin-left: 70px;
  align-content: center;
  font-size: 22px;
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
  border: 1px solid rgba(0,0,0,.2);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;
export const Divinput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px 0px;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  outline: none;
  height: 25px;
  padding: 5px;
  font-size: 16px;
`;
export const Textarea = styled.textarea`
  height: 200px;
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  border: none;
`;
export const Textarea1 = styled.textarea`
  height: 100px;
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  border: none;
`;
export const Botonagregar = styled.button`
  padding: 10px;
  border-radius: 12px;
  border: none;
  background: #2d6a4f;
    color: #fff;
    transition: .5s;
  &:hover {
    transition: .5s;
    background: #40916c;
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
  &:active {
    background-color: #114378;
  }
  &:hover {
    background-color: #16579b;
  }
`;
export const Inputfile = styled.input`
  border: none;
  width: 135px;
`;
export const Label = styled.label`
  font-size: 17px;
  color: #216869;
`;
export const Divh1 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #216869;
  border-radius: 50%;
`;
export const Divtabla = styled.div`
  width: 50%;

`;
export const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;
export const Tr=styled.tr`
  background-color: #40916c;
  color: #ffff;
  text-align: left;
`;
export const Trbody=styled.tr`
  border-bottom: 1px solid #dddddd;
  font-weight: bold;
  color: #009879;
  &:nth-of-type(even){
    background-color: #f3f3f3;
  }
  &:last-of-type{
    border-bottom: 2px solid #009879;
  }
`;
export const Tablahead = styled.thead`
  
`;
export const Td = styled.td`
padding: 12px 15px;
`;
export const Th=styled.th`
  padding: 12px 15px;
`;
export const Botonesacciones = styled.button`
  padding: 0px;
  margin-left: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
export const Imgeditar = styled.img`
  filter: invert(22%) sepia(99%) saturate(2159%) hue-rotate(170deg) brightness(96%) contrast(104%);
`;
export const Imgeliminar = styled.img`
filter: invert(42%) sepia(36%) saturate(1237%) hue-rotate(307deg) brightness(89%) contrast(86%);
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
`;

