import React, { useContext, useState } from 'react'
import { ColourTypeContext } from '../Context/ColourType'
import { GlobelThemeContext } from '../Context/GlobelThemeContext';

const ColourType = () => {

  const {colourType,setcolourType} = useContext(ColourTypeContext);
  const {bgTheme,setbgTheme} = useContext(GlobelThemeContext);
  return (
    <>
      <div className={`flex flex-row justify-center items-center bg-[#1111116b] border-[1px] border-solid border-[#af9f9f9e] ml-4 h-[50px] w-[500px] rounded-[6px]`}>
            <div onClick={()=>{setcolourType('solid');setbgTheme('solid');}} className={`flex flex-row justify-center items-center  bg-[#1111116b] ${colourType==='solid' ? 'bg-[#5b5a5a6b]' : null} border-[1px] border-solid border-[#af9f9f9e] h-[35px] w-[200px] m-1 rounded-[4px] cursor-pointer`}>Solid</div>
            <div onClick={()=>{setcolourType('gradient');setbgTheme('linear');}} className={`flex flex-row justify-center items-center bg-[#1111116b] ${colourType==='gradient' ? 'bg-[#5b5a5a6b]' : null} border-[1px] border-solid border-[#af9f9f9e] h-[35px] w-[200px] m-1 rounded-[4px] cursor-pointer`}>Gradient</div>
      </div>
    </>
  )
}

export default ColourType;