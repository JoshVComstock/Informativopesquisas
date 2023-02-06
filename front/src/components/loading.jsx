import React from "react";
import styled, { keyframes } from "styled-components";

const loading = () => {
  return (
    <Container>
      <Loading></Loading>
    </Container>
  );
};

export default loading;
export const spin = keyframes`
to{
    transform: rotate(360deg);
}
`;
const Loading = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid white;
  border-top-color: #000;
  animation: ${spin} 1.2s linear infinite;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100vh;
  display: flex;
  justify-content: center;
`;
