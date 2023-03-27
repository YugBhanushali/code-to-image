import React, { useEffect, useState } from 'react'
import logo1 from '../assets/logo/A4 - 1.png';
import logo2 from '../assets/logo/A4 - 2.png';
import { AiFillGithub } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {TbSourceCode} from 'react-icons/tb'

const Navbar = () => {
    const [logo, setLogo] = React.useState(true);
    const canvasBackGround=useSelector((state)=>state.canvasStyle.canvasBackGround);
    const [mainLogo, setmainLogo] = useState(false);
    useEffect(() => {
      
    }, [canvasBackGround,mainLogo])
    
  return (
    <div className='flex justify-center items-center'>
      <div className='fixed top-4 left-5 mb-5'>
        {/* <img onMouseOver={()=>setLogo(false)} onMouseOut={()=>setLogo(true)} className='h-[90px] w-[60px] cursor-pointer' src={logo===true ? logo1 : logo2} alt="logo" />  */}
        <TbSourceCode className='cursor-pointer' onMouseOver={()=>setmainLogo(true)} onMouseOut={()=>setmainLogo(false)}
          style={{
                height:'44px',
                width:'44px',
                // color:`${mainLogo===true ? `${canvasBackGround}` : '#6B5ED9'}}`
                color:`${mainLogo===true ? `${canvasBackGround}` : `#6B5ED9`}`
            }}
        />
      </div>
      <div className='fixed top-6 right-5 cursor-pointer'>
        <AiFillGithub
            style={{
                height:'36px',
                width:'36px',
                color:`${canvasBackGround}`
            }}
        />
      </div>
    </div>
  )
}

export default Navbar
