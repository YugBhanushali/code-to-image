import React, { useEffect, useState } from 'react'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
// import 'prismjs/themes/prism-funky.css'; //Example style, you can use another
import '../theme/prism-atom-dark.css';
import "../index.css";


const Canvas = () => {

  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (

    <div className='flex max-h-unset justify-center items-center w-[800px] min-h-[100px] bg-white mt-[100px] m-auto rounded-[0px]'>
    <div className='flex max-h-unset justify-center items-center w-[100%] min-h-[100%] rounded-[0px] bg-gradient-to-l from-[#8650fa] to-[#ff98c9] p-[30px]'>
        <div className='max-h-unset codeBox min-w-[70%] min-h-[70%]'>
        
            <div className='flex flex-row max-h-unset relative top-0 w-[100%] min-h-[10%] rounded-[25px] bg-transparent z-0'>

              <div className='flex flex-row max-h-unset relative top-0 h-[10%] rounded-[25px] bg-transparent z-0'> 
                <div className='relative mt-[13px] ml-[17px] w-[12px] h-[12px] rounded-full smallBtn'/>
                <div className='relative mt-[13px] ml-[8px] w-[12px] h-[12px] rounded-full smallBtn'/>
                <div className='relative mt-[13px] ml-[8px] w-[12px] h-[12px] rounded-full smallBtn'/>
              </div>

              <div className='relative text-center h-[100%] w-[90%] mr-[10%] bg-transparent mt-1 focus:border-none z-20'>
                  <span contentEditable='true' className='text-[#efebebc7] text-[13px] text-center editable-title'>Untitled - 1</span>
              </div>

            </div>

            <div className='bg-transparent min-h-[50px] pt-4 pl-[16px] pr-[16px] pb-7 '>
                <Editor
                    value={code}
                    onValueChange={code => setCode(code)}
                    highlight={code => highlight(code, languages.swift)}
                    // padding={12}
                    style={{
                        fontFamily: '"JetBrains Code", "JetBrains Mono", monospace',
                        fontSize: 16,
                        outline:'none',
                        color:"#6AE970 ",
                        fontWeight:'500'
                    }}
                    className='editable-code'
                />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Canvas
