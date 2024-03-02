import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { ColourTypeContext } from "../Context/ColourType";
import { GlobelThemeContext } from "../Context/GlobelThemeContext";
import { changecanvasColourType } from "../redux/CanvasConfigSlice";
import { useEffect } from "react";

const ColourType = () => {
  const { colourType, setcolourType } = useContext(ColourTypeContext);
  const { bgTheme, setbgTheme } = useContext(GlobelThemeContext);
  const dispatch = useDispatch();

  useEffect(() => {
    setcolourType("gradient");
    setbgTheme("linear");
    dispatch(changecanvasColourType("linear"));
  }, []);
  return (
    <>
      <div
        className={`ml-4 flex h-[50px] w-[500px] flex-row items-center justify-center rounded-[6px] border-[1px] border-solid border-[#af9f9f9e] bg-[#1111116b]`}
      >
        <div
          onClick={() => {
            setcolourType("solid");
            setbgTheme("solid");
            dispatch(changecanvasColourType("solid"));
          }}
          className={`flex flex-row items-center justify-center  bg-[#1111116b] ${colourType === "solid" ? "bg-[#5b5a5a6b]" : null} m-1 h-[35px] w-[200px] cursor-pointer rounded-[4px] border-[1px] border-solid border-[#af9f9f9e]`}
        >
          Solid
        </div>
        <div
          onClick={() => {
            setcolourType("gradient");
            setbgTheme("linear");
            dispatch(changecanvasColourType("linear"));
          }}
          className={`flex flex-row items-center justify-center bg-[#1111116b] ${colourType === "gradient" ? "bg-[#5b5a5a6b]" : null} m-1 h-[35px] w-[200px] cursor-pointer rounded-[4px] border-[1px] border-solid border-[#af9f9f9e]`}
        >
          Gradient
        </div>
      </div>
    </>
  );
};

export default ColourType;
