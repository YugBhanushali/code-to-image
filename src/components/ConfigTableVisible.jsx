import React, { useContext } from 'react'
import { MdOutlineVisibility,MdOutlineVisibilityOff } from 'react-icons/md';
import { VisibleContext } from '../Context/VisibleContext';

const ConfigTableVisible = () => {

    const {visiblity, setvisiblity} = useContext(VisibleContext);
  return (
    <div onClick={()=>setvisiblity(!visiblity)} className='bg-[#9f9f9f3d] rounded-[8px] justify-center items-center flex border-solid border-[1px] border-[#af9f9f9e] h-[40px] w-[40px] fixed bottom-[30px] right-[20px] cursor-pointer'>
        {visiblity===true ? 
            <MdOutlineVisibility style={
            {
                height:'25px',
                width:'25px',
                color:'#BBADAD'
            }}/>
            :

            <MdOutlineVisibilityOff style={
            {
                height:'25px',
                width:'25px',
                color:'#BBADAD'
            }}/>
        }
        
    </div>
  )
}

export default ConfigTableVisible
