import React, { useContext, useEffect, useRef, useState } from 'react'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
// import "prismjs/components/prism-cpp";
import "prismjs/components/prism-ruby";
// import "prismjs/components/prism-php";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-go";
import "prismjs/components/prism-scala";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-lua";
import "prismjs/components/prism-perl";
import "prismjs/components/prism-haskell";
// import "prismjs/components/prism-objectivec";
// import "prismjs/components/prism-shell";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-sql";

// import 'prismjs/themes/prism-funky.css'; //Example style, you can use another
import '../theme/prism-one-dark.css';
// import '../theme/prism-darcula.css';
import "../index.css";
import { useDispatch, useSelector } from 'react-redux';
import { changecanvasPadding, changecodeContent, changesnippetFileName, changesnippetFontFamily } from '../redux/CanvasConfigSlice.js';
import { StyledBackground } from '../styled/StyledCanvasBg';
import { GlobelThemeContext } from '../Context/GlobelThemeContext';
import { useLocation, useNavigate, useSearchParams} from 'react-router-dom';

const Canvas = ({sharedRef}) => {

  
  const dispatch = useDispatch();
  const location =useLocation();
  const queryParams=new URLSearchParams(location.search);
  // const [searchParams, setSearchParams] = useSearchParams();

  // dispatch(changecanvasPadding(queryParams.get('padding')));


  const canvasPadding=useSelector((state)=>state.canvasStyle.canvasPadding);
  const canvasBackGround=useSelector((state)=>state.canvasStyle.canvasBackGround);
  const snippetFontFamily=useSelector((state)=>state.canvasStyle.snippetFontFamily);
  const snippetMode=useSelector((state)=>state.canvasStyle.snippetMode);
  // const snippetTheme=useSelector((state)=>state.canvasStyle.snippetTheme);
  const codeLanguage=useSelector((state)=>state.canvasStyle.codeLanguage);
  const codeContent=useSelector((state)=>state.canvasStyle.codeContent);
  const canvasWidth = useSelector((state)=>state.canvasStyle.canvasWidth);
  const canvasGradientBackgroundStart= useSelector((state)=>state.canvasStyle.canvasGradientBackgroundStart);
  const canvasGradientBackgroundEnd= useSelector((state)=>state.canvasStyle.canvasGradientBackgroundEnd);
  const canvasGradientBackgroundAngle= useSelector((state)=>state.canvasStyle.canvasGradientBackgroundAngle);
  const snippetFileName= useSelector((state)=>state.canvasStyle.snippetFileName);
  const canvasColourType= useSelector((state)=>state.canvasStyle.canvasColourType);
  const history = useNavigate();

  // console.log(canvasGradientBackgroundStart,canvasGradientBackgroundEnd,canvasGradientBackgroundAngle);

  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  useEffect(() => {

   },[canvasColourType,canvasBackGround,canvasPadding,snippetFontFamily,snippetMode,codeLanguage,codeContent,canvasWidth,canvasGradientBackgroundStart,canvasGradientBackgroundEnd,canvasGradientBackgroundAngle,snippetFileName]);
  

  // const [bgTheme, setbgTheme] = useState('solid');
  const {bgTheme,setbgTheme} = useContext(GlobelThemeContext);
  return (

    <StyledBackground  backgroundColour={canvasBackGround} Padding={canvasPadding} withOfCanvas={canvasWidth} gradientStart={canvasGradientBackgroundStart} gradientEnd={canvasGradientBackgroundEnd} gradientAngle={canvasGradientBackgroundAngle}>
      <div id='my-node' className={`outerCanvas`}>
          {/* <div className={`flex max-h-unset justify-center items-center w-[100%] min-h-[100%] rounded-[0px] bg-gradient-to-l from-[#8650fa] to-[#ff98c9] p-[${canvasPadding}px]`}> */}
          <div ref={sharedRef}  className={`${bgTheme==='solid' ? 'canThemeSolid' : `${bgTheme === 'linear' ? 'canThemeLinear' : 'canThemeRadial'}` }`}>
              <div className={`max-h-unset ${snippetMode==='dark' ? 'codeBox' : 'codeBox-light'} min-w-[70%] min-h-[70%]`}>
              
                  <div className='flex flex-row max-h-unset relative top-0 w-[100%] min-h-[10px] rounded-[25px] bg-transparent z-0'>

                    <div className='flex flex-row max-h-unset relative top-0 h-[10%] rounded-[25px] bg-transparent z-0'> 
                      <div className={`relative mt-[13px] ml-[17px] w-[12px] h-[12px] rounded-full ${snippetMode==='dark' ? 'smallBtn' : 'smallBtn-light'}`}/>
                      <div className={`relative mt-[13px] ml-[8px] w-[12px] h-[12px] rounded-full ${snippetMode==='dark' ? 'smallBtn' : 'smallBtn-light'}`}/>
                      <div className={`relative mt-[13px] ml-[8px] w-[12px] h-[12px] rounded-full ${snippetMode==='dark' ? 'smallBtn' : 'smallBtn-light'}`}/>
                    </div>

                    <div className='relative text-center h-[100%] w-[90%] mr-[10%] bg-transparent mt-1 focus:border-none'>
                        <input value={snippetFileName} onChange={(e)=>{dispatch(changesnippetFileName(e.target.value))}} contentEditable='true' className={` bg-transparent ${snippetMode==='dark' ? 'text-[#efebebc7]' : 'text-[#565656c7]'} text-[13px] text-center editable-title`}></input>
                    </div>

                  </div>

                  <div className='bg-transparent'>
                    <div className='bg-transparent h-[100%] w-[100%]'>
                        <Editor
                            value={code}
                            onValueChange={code => {setCode(code);dispatch(changecodeContent(code))}}
                            highlight={code => highlight(code, languages[codeLanguage])}
                            style={{
                                fontFamily: `${snippetFontFamily}`,
                                fontSize: 16,
                                // outline:'none',
                                color:`${snippetMode==='dark' ? '#6AE970' : '#046A08'}`,
                                // fontWeight:'500'
                                margin:'20px'
                            }}
                        />
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </StyledBackground>
  )
}

export default Canvas
