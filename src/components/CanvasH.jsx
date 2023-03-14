import React, { useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css'; // import your preferred CSS theme
import ReactCodeMirror from '@uiw/react-codemirror';


const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    const newCode = event.target.value;
    setCode(newCode);
    hljs.highlightAll(); // highlight the code
  };

  return (
    <div>
      {/* <ReactCodeMirror></ReactCodeMirror> */}
    </div>
  );
};

export default CodeEditor;
