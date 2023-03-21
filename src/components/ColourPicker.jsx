import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changecanvasBackGround } from '../redux/CanvasConfigSlice';

const ColourBox = styled.div`
  .inputTheme{
    background: rgba(40, 37, 37, 0.42);
    border: 0.5px solid rgba(98, 83, 83, 0.82);
    height:20px;
    padding:12px;
    border-radius:5px;
    font-size:13px;
  }

  .forInputTypeColour{
    input[type="color"] {
    -webkit-appearance: none;
    border: none;
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
        border: none;
    }
  }
`

const ColourPicker = () => {

    const [color, setColor] = useState('#6B5ED9');
    const [showPicker, setShowPicker] = useState(false);
    const dispatch = useDispatch();

    const handleChangeForPicker = (e)=> {
        setColor(e.target.value);
        console.log(e.target.value);
        dispatch(changecanvasBackGround(color));
    }

    const handleChangeForInput = (e)=>{
        console.log(e.target.value);
        setColor(e.target.value);
        dispatch(changecanvasBackGround(color));
    }


    useEffect(()=>{
      dispatch(changecanvasBackGround(color));
    },[color]);

  return (
    <div className='flex'>
      <ColourBox>
        <input className='h-[20px] w-[20px] ml-3 mr-3 border-none p-0 border-[2px] forInputTypeColour' type='color' value={color} onChange={handleChangeForPicker}></input>
        <input className='w-[100px] bg inputTheme' type='text' onChange={handleChangeForInput}  value={color}></input>
      </ColourBox>
    </div>
  )
}

export default ColourPicker
