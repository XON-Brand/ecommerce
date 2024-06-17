import { styled } from "styled-components";
import boom from "../../assets/images/backgrounds/boom.png"

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: white;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 70px;
  z-index: -1;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* padding-left: 70px; */
  /* padding-top: 50px; */
  gap: 20px;
  z-index: 1;
  /* height: 800px; */
  /* width: 860px; */
  /* background: url(${boom}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Boom = styled.img`
position: absolute;
left: 0;
top: -160%;
width: 1100px;
height: 800px;
z-index: -0.5;
`