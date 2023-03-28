import React, { useEffect, useState } from 'react'
import {ImTwitter} from 'react-icons/im';
import {AiFillLinkedin} from 'react-icons/ai';
import {GrMail} from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const [mainLogo1, setmainLogo1] = useState(false);
    const [mainLogo2, setmainLogo2] = useState(false);
    const [mainLogo3, setmainLogo3] = useState(false);
    const canvasBackGround=useSelector((state)=>state.canvasStyle.canvasBackGround); 
    useEffect(() => {
      
    },[canvasBackGround,mainLogo1,mainLogo2,mainLogo3])
  return (
    <div className='fixed bottom-3'>
      <div style={{fontFamily:'JetBrains Mono'}} className='text-[#BBADAD] flex justify-center items-center'>
        <div className='cursor-pointer'>
            Made by <NavLink to='https://github.com/YugBhanushali'><span className={`hover:text-[white]`}>Yug Bhanushali</span></NavLink> 
        </div>
        <div className='flex justify-center items-center'>
            <NavLink to='https://twitter.com/TheYug03'>
                <ImTwitter onMouseOver={()=>setmainLogo1(true)} onMouseOut={()=>setmainLogo1(false)}
                    style={{
                    height:'22px',
                    width:'22px',
                    color:`${mainLogo1===true ? `${canvasBackGround}` : `#BBADAD`}`
                    }}
                    className='mx-3 cursor-pointer'
                />
            </NavLink>

            <NavLink to='https://www.linkedin.com/in/yug-bhanushali-b3b872224/'>
                <AiFillLinkedin onMouseOver={()=>setmainLogo2(true)} onMouseOut={()=>setmainLogo2(false)}
                    style={{
                    height:'22px',
                    width:'22px',
                    color:`${mainLogo2===true ? `${canvasBackGround}` : `#BBADAD`}`,
                    border:'1px',
                    }}
                    className='mx-3 cursor-pointer'
                />
            </NavLink>

            <NavLink to='mailto:yug.h.bhanushali1@gmail.com'>
                <GrMail onMouseOver={()=>setmainLogo3(true)} onMouseOut={()=>setmainLogo3(false)}
                    style={{
                    height:'22px',
                    width:'22px',
                    color:`${mainLogo3===true ? `${canvasBackGround}` : `#BBADAD`}`
                    }}
                    className='mx-3 cursor-pointer'
                />
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer
