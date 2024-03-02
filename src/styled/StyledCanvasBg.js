import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const StyledBackground = styled.div`
  .canThemeSolid {
    display: flex;
    max-height: unset;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    border-radius: 0;
    background: ${(props) => props.backgroundColour};
    padding: ${(props) => props.Padding};
  }

  .canThemeLinear {
    display: flex;
    max-height: unset;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    border-radius: 0;
    background: ${(props) => props.gradientStart};
    background: ${(props) =>
      `linear-gradient(${props.gradientAngle}deg, ${props.gradientStart}, ${props.gradientEnd})`};
    padding: ${(props) => props.Padding};
  }

  .canThemeRadial {
    display: flex;
    max-height: unset;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    border-radius: 0;
    background: ${(props) => props.gradientStart};
    background: ${(props) =>
      `radial-gradient(circle, ${props.gradientStart}, ${props.gradientEnd})`};
    padding: ${(props) => props.Padding};
  }

  .outerCanvas {
    display: flex;
    overflow-x: auto;
    max-height: unset;
    background: "white";
    justify-content: center;
    align-items: center;
    min-height: 100px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    width: ${(props) => props.withOfCanvas};
  }
`;

export { StyledBackground };
