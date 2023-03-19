import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changecanvasBackGround, changecanvasPadding, changesnippetFontFamily } from '../redux/CanvasConfigSlice';
 
const ChangePaddingBtn = () => {

    const paddingtemp=useSelector((state)=>state.canvasStyle.canvasPadding)
    const dispatch = useDispatch();

    const [count, setcount] = useState(50)
    const handleChange = ()=>{
        dispatch(changecanvasPadding(`${count}px`));
        // dispatch(changecanvasBackGround('purple'));
        dispatch(changesnippetFontFamily(''))
        console.log(paddingtemp);
        setcount(count+10) ;
    }

  return (
    <div>
      <button onClick={handleChange}> click</button>
    </div>
  )
}

export default ChangePaddingBtn
