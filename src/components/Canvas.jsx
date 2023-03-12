import SyntaxHighlighter from 'react-syntax-highlighter';
import React, { useEffect, useState } from 'react'
import "../index.css";
import { darcula ,atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';



const Canvas = () => {

  const [tempCode, settempCode] = useState(`import SwiftUI

  struct CircleImage: View {
    var body: some View {
      Image("turtlerock")
        .clipShape(Circle())
    }
  }`);
  

useEffect(()=>{
  settempCode(tempCode)
},[tempCode]);

  return (
    // outerDiv
    <div className='flex max-h-unset justify-center items-center w-[600px] min-h-[100px] bg-white mt-[100px] m-auto rounded-[0px]'>
    <div className='flex max-h-unset justify-center items-center w-[100%] min-h-[100%] rounded-[0px] bg-gradient-to-l from-[#8650fa] to-[#ff98c9] p-[20px]'>
        <div style={darcula} className='max-h-unset codeBox min-w-[70%] min-h-[70%]'>
        
            <div className='flex max-h-unset relative top-0 w-[100%] h-[10%] rounded-[25px] bg-transparent'>
              <div className='relative mt-[13px] ml-[17px] w-[12px] h-[12px] rounded-full smallBtn'/>
              <div className='relative mt-[13px] ml-[8px] w-[12px] h-[12px] rounded-full smallBtn'/>
              <div className='relative mt-[13px] ml-[8px] w-[12px] h-[12px] rounded-full smallBtn'/>
            </div>
            <div className='bg-transparent'>
            <span spellCheck={false}  contentEditable={true} value={tempCode} onChange={(e)=>settempCode(e.target.value)} className="editable-code border-none">
            {/* <textarea spellCheck={false} value={tempCode} z-zIndex={0} > */}
            <SyntaxHighlighter  
              className='bg-transparent' 
              language="swift" 
              style={atomOneDark} 
              customStyle={
                {
                  background:'transparent',
                  fontFamily:"JetBrains Mono NL",
                }
              }
              wrapLongLines={true}
              >
              {tempCode}
            </SyntaxHighlighter>
            {/* </textarea> */}
            </span>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Canvas
