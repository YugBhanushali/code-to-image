import React, { useEffect, useState } from 'react'
import logo1 from '../assets/logo/A4 - 1.png';
import logo2 from '../assets/logo/A4 - 2.png';
import { AiFillGithub } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {TbSourceCode} from 'react-icons/tb'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Navbar = () => {
    const [gitLogo, setgitLogo] = React.useState(false);
    const canvasBackGround=useSelector((state)=>state.canvasStyle.canvasBackGround);
    const [mainLogo, setmainLogo] = useState(false);
    const history = useNavigate();
    useEffect(() => {
      
    }, [canvasBackGround,mainLogo])
    
  return (
    <div className='flex justify-center items-center'>
      <Helmet>
        <title>Code to Image</title>
        <meta name='description' content='Create beautiful snippet of your code using Code to Image, with customizable theme UI, fonts, background, Dark mode and much more and downlaod the snippet in different formats' ></meta>
        <meta name='keywords' content='codetoimg, codeimg, image, code, developer, developer tool, image generator, code snippets, snippets, code to image, converter, image converter, convert code to images, code to img, code image, snapshot, code snapshot, codeblock'></meta>
      </Helmet>
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
      <div className='fixed flex flex-row justify-center items-center top-4 right-[1px] mr-3 lg:mr-0 cursor-pointer'>
        <NavLink to='https://github.com/YugBhanushali/code-to-image'>

          <AiFillGithub className='cursor-pointer'onMouseOver={()=>setgitLogo(true)} onMouseOut={()=>setgitLogo(false)}
              style={{
                  height:'40px',
                  width:'40px',
                  color:`${gitLogo===true ? `${canvasBackGround}` : `#6B5ED9`}`
              }}
          />
        </NavLink>
        <div className='hidden lg:flex'>
          <a href="https://www.producthunt.com/posts/code-to-image?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-code&#0045;to&#0045;image" target="_blank">
            <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=386643&theme=light&peroiod=daily" alt="Code&#0032;to&#0032;Image - Beautify&#0032;your&#0032;code&#0044;&#0032;as&#0032;only&#0032;code&#0032;seems&#0032;to&#0032;be&#0032;boring | Product Hunt"  className='w-[250px] h-[45px]' width="250" height="54" />
          </a>
        </div>
        {/* <a href="https://www.producthunt.com/posts/code-to-image?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-code&#0045;to&#0045;image" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=386643&theme=dark" alt="Code&#0032;to&#0032;Image - Beautify&#0032;your&#0032;code&#0044;&#0032;as&#0032;only&#0032;code&#0032;seems&#0032;to&#0032;be&#0032;boring | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a> */}
      </div>
    </div>
  )
}

export default Navbar
