import React, { useEffect, useState } from 'react'
import bmac from '../assets/bmac.png';
import MainLogo from '../assets/Frame 1.png';
import { AiFillGithub } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {TbSourceCode} from 'react-icons/tb'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const TITLE = 'Code to Image';
const DESCRIPTION = 'Create beautiful snippet of your code using Code to Image, with customizable theme UI, fonts, background, Dark mode and much more and downlaod the snippet in different formats. Convert your code into beautiful images with few clicks. Share this beautiful snippet with your friends and colleagues and make your code look more beautiful and attractive.';
const URL = 'https://codetoimg.vercel.app/';

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
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={DESCRIPTION} ></meta>
        <meta name='keywords' content='codetoimg, codeimg, image, code, developer, developer tool, image generator, code snippets, snippets, code to image, converter, image converter, convert code to images, code to img, code image, snapshot, code snapshot, codeblock'></meta>
        <link 
          rel='shortcut icon' 
          href={MainLogo} 
          type='image/x-icon' 
        />
        {/* meta tag for adding creator details */}

        

        <meta property='og:title' content={TITLE} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:url' content={URL} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={MainLogo} />
        <meta property='og:site_name' content={TITLE} />


        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={TITLE} />
        <meta name='twitter:description' content={DESCRIPTION} />
        <meta name='twitter:url' content={URL} />
        <meta name='twitter:image' content={MainLogo} />
        <meta name='twitter:site' content='@TheYug03' />
        <meta name='twitter:creator' content='@TheYug03' />
        <meta name='author' content='Yug Bhanushali' />

      </Helmet>
      <div className='fixed top-4 left-5 mb-5 flex justify-center items-end '>
        <TbSourceCode className='cursor-pointer' onMouseOver={()=>setmainLogo(true)} onMouseOut={()=>setmainLogo(false)}
          style={{
                height:'44px',
                width:'44px',
                color:`${mainLogo===true ? `${canvasBackGround}` : `#6B5ED9`}`
            }}
        /> 
        <p 
          className={`sm:text-[21px] text-[19px] ml-2 sm:mb-[3px] mb-[6px] flex items-end text-[#6B5ED9] font-extrabold`}
          style={{fontFamily:'Jetbrains mono'}}
        >
          Code to Image
        </p>
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

        <div className=' flex justify-center items-center mr-3'>
        {/* for desktop view */}
          <div className='hidden sm:block'>
            <a href="https://www.buymeacoffee.com/yugbhanushali" target="_blank">
              <img className='' src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"  style={{height:'44px', width:'170px'}} />
            </a>
          </div>

        {/* for mobile view */}
          <div className='flex sm:hidden ml-[10px]'>
            <a href="https://www.buymeacoffee.com/yugbhanushali" className='' target="_blank">
              <img src={bmac} alt="Buy Me A Coffee" className='rounded-md' style={{height:'35px', width:'35px'}} />
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar
