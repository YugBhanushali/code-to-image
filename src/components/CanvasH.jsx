import React, { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';


const CanvasH = () => {
  const [code, setCode] = useState(`import SwiftUI

  struct CircleImage: View {
    var body: some View {
      Image("turtlerock")
        .clipShape(Circle())
    }
  }`);

  return (
    <div>
      <CodeMirror
      value={code}
      options={{
        mode: 'swift',
        theme: 'material',
        lineNumbers: false
      }}
      onChange={(e)=>setCode(e.target.value)}
      />
    </div>
  );
};

export default CanvasH;
