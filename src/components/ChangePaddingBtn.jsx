import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changecanvasPadding } from '../redux/CanvasConfigSlice';

const ChangePaddingBtn = () => {

    const paddingtemp=useSelector((state)=>state.canvasStyle.canvasPadding)
    const dispatch = useDispatch();

    const handleChange = ()=>{
        dispatch(changecanvasPadding('50'));
        console.log(paddingtemp);
    }

  return (
    <div>
      <button onClick={handleChange}> click</button>
    </div>
  )
}

export default ChangePaddingBtn
