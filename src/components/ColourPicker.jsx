import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
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

    const [color, setColor] = useState('#6B5ED9');
    const [colorStart, setcolorStart] = useState('#6B5ED9');
    const [colorEnd, setcolorEnd] = useState('#6B5ED9');
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
        setColor(e.target.value);
        console.log(e.target.value);
        dispatch(changecanvasBackgroundStart(color));
      }
      else if(props.bgType==='linear 1' || props.bgType==='radial 1'){
        setColor(e.target.value);
        console.log(e.target.value);
        dispatch(changecanvasBackgroundEnd(color));
      }
    }


    useEffect(()=>{
      // if(props.bgType==='solid'){
      //   dispatch(changecanvasBackGround(color));
      // }
      // else if(props.bgType==='linear 0' || props.bgType==='radial 0'){
      //   dispatch(changecanvasBackgroundStart(colorStart));
      // }
      // else if(props.bgType==='linear 1' || props.bgType==='radial 1'){
      //   dispatch(changecanvasBackgroundEnd(colorEnd));
      // }
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
