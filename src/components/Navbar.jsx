import React, { useEffect, useState } from 'react'
import logo1 from '../assets/logo/A4 - 1.png';
import logo2 from '../assets/logo/A4 - 2.png';
import { AiFillGithub } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {TbSourceCode} from 'react-icons/tb'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [gitLogo, setgitLogo] = React.useState(false);
    const canvasBackGround=useSelector((state)=>state.canvasStyle.canvasBackGround);
    const [mainLogo, setmainLogo] = useState(false);
    const history = useNavigate();
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
                color:`${mainLogo===true ? `${canvasBackGround}` : `#6B5ED9`}`
            }}
        />
      </div>
      <div className='fixed top-4 right-5 cursor-pointer'>
        <NavLink to='https://github.com/YugBhanushali/code-to-image'>

          <AiFillGithub className='cursor-pointer'onMouseOver={()=>setgitLogo(true)} onMouseOut={()=>setgitLogo(false)}
              style={{
                  height:'40px',
                  width:'40px',
                  color:`${gitLogo===true ? `${canvasBackGround}` : `#6B5ED9`}`
              }}
          />
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
