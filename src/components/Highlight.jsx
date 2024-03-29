import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const Highlight = () => {
  const exampleCode = `
        (function someDemo() {
        var test = "Hello World!";
        console.log(test);
        })();
        `;
  return (
    <div>
      <Highlight {...defaultProps} code={exampleCode} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default Highlight;
