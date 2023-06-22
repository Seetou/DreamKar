import React from "react";
import styled from "styled-components";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { car1, car2, car3, car4, car5 } from "../images";

const Header = () => {
  return (
    <HeaderSection>
      <Splide className="slider--container" options={{ rewind: true }}>
        <SplideSlide>
          <img src={car1} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={car2} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={car3} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={car4} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={car5} alt="" />
        </SplideSlide>
      </Splide>
    </HeaderSection>
  );
};

const HeaderSection = styled.section`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;

  .slider--container {
    width: 100%;
    max-height: 100vh;
    overflow: hidden;
  }
`;

export default Header;
