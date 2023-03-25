import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changecanvasBackGround, changecanvasBackgroundEnd, changecanvasBackgroundStart } from '../redux/CanvasConfigSlice';

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

const ColourPicker = (props) => {

  const canvasGradientBackgroundStart= useSelector((state)=>state.canvasStyle.canvasGradientBackgroundStart);
  const canvasGradientBackgroundEnd= useSelector((state)=>state.canvasStyle.canvasGradientBackgroundEnd);
  const canvasGradientBackgroundAngle= useSelector((state)=>state.canvasStyle.canvasGradientBackgroundAngle);
  const canvasBackGround=useSelector((state)=>state.canvasStyle.canvasBackGround);

    const [color, setColor] = useState(canvasBackGround);
    const [colorStart, setcolorStart] = useState(canvasGradientBackgroundStart);
    const [colorEnd, setcolorEnd] = useState(canvasGradientBackgroundEnd);
    // const [showPicker, setShowPicker] = useState(false);
    const [themeChecker, setthemeChecker] = useState(props.bgType);
    const dispatch = useDispatch();

    const handleChangeForPicker = (e)=> {

      if(props.bgType==='solid'){
        setColor(e.target.value);
        console.log(e.target.value);
        dispatch(changecanvasBackGround(color));
      }
      else if(props.bgType==='linear 0' || props.bgType==='radial 0'){
        setcolorStart(e.target.value);
        console.log(e.target.value);
        dispatch(changecanvasBackgroundStart(colorStart));
      }
      else if(props.bgType==='linear 1' || props.bgType==='radial 1'){
        setcolorEnd(e.target.value);
        console.log(e.target.value);
        dispatch(changecanvasBackgroundEnd(colorEnd));
      }
    }

    const handleChangeForInput = (e)=>{
      if(props.bgType==='solid'){
        setColor(e.target.value);
        console.log(e.target.value);
        dispatch(changecanvasBackGround(color));
      }
      else if(props.bgType==='linear 0' || props.bgType==='radial 0'){
        setcolorStart(e.target.value);
        console.log(e.target.value);
        dispatch(changecanvasBackgroundStart(color));
      }
      else if(props.bgType==='linear 1' || props.bgType==='radial 1'){
        setcolorEnd(e.target.value);
        console.log(e.target.value);
        dispatch(changecanvasBackgroundEnd(color));
      }
    }


    useEffect(()=>{
      if(props.bgType==='solid'){
        dispatch(changecanvasBackGround(color));
      }
      else if(props.bgType==='linear 0' || props.bgType==='radial 0'){
        dispatch(changecanvasBackgroundStart(colorStart));
      }
      else if(props.bgType==='linear 1' || props.bgType==='radial 1'){
        dispatch(changecanvasBackgroundEnd(colorEnd));
      }
    },[color,colorStart,colorEnd]);
    // value={`${props.bgType==='solid' ? `${color}` : `${props.bgType==='linear 0' || props.bgType==='radial 0' ? `${colorStart}` : `${colorEnd}`}` }`}

  return (
    <div className='flex'>
      <ColourBox>
        <input className='h-[20px] w-[20px] ml-3 mr-3 border-none p-0 border-[2px] forInputTypeColour' type='color' value={`${props.bgType==='solid' ? `${color}` : `${props.bgType==='linear 0' || props.bgType==='radial 0' ? `${colorStart}` : `${colorEnd}`}` }`} onChange={handleChangeForPicker}></input>
        <input className='w-[100px] bg inputTheme' type='text' onChange={handleChangeForInput}  value={`${props.bgType==='solid' ? `${color}` : `${props.bgType==='linear 0' || props.bgType==='radial 0' ? `${colorStart}` : `${colorEnd}`}` }`}></input>
      </ColourBox>
    </div>
  )
}

export default ColourPicker
