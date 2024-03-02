import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { GlobelThemeContext } from "../Context/GlobelThemeContext";
import { GradientTypeContext } from "../Context/GradientTypeContext";
import { changecanvasColourType } from "../redux/CanvasConfigSlice";

const GradientType = () => {
  const { gradientType, setgradientType } = useContext(GradientTypeContext);
  const { bgTheme, setbgTheme } = useContext(GlobelThemeContext);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`flex flex-row justify-center items-center bg-[#1111116b] border-[1px] border-solid border-[#af9f9f9e] ml-[9px] h-[52px] w-[330px] rounded-[6px]`}
      >
        <div
          onClick={() => {
            setgradientType("linear");
            setbgTheme("linear");
            dispatch(changecanvasColourType("linear"));
          }}
          className={`flex flex-row justify-center items-center  bg-[#1111116b] ${gradientType === "linear" ? "bg-[#5b5a5a6b]" : null} border-[1px] border-solid border-[#af9f9f9e] h-[38px] w-[155px] m-1 rounded-[4px] cursor-pointer`}
        >
          Linear
        </div>
        <div
          onClick={() => {
            setgradientType("radial");
            setbgTheme("radial");
            dispatch(changecanvasColourType("radial"));
          }}
          className={`flex flex-row justify-center items-center bg-[#1111116b] ${gradientType === "radial" ? "bg-[#5b5a5a6b]" : null} border-[1px] border-solid border-[#af9f9f9e] h-[38px] w-[155px] m-1 rounded-[4px] cursor-pointer`}
        >
          Radial
        </div>
      </div>
    </>
  );
};

export default GradientType;
