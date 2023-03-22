import React, { useCallback, useRef } from 'react'
import { FeatureGeneralBox, FeatureInnerBox } from '../styled/StyledFeature'
import html2canvas from 'html2canvas';
import { toPng } from 'html-to-image';
import Canvas from './Canvas';

// export const ref = useRef<HTMLDivElement>(null);
const Download = ({sharedRef}) => {

    const onButtonClick = useCallback(() => {
        if (sharedRef.current === null) {
          return
        }
    
        toPng(sharedRef.current, { cacheBust: true, })
          .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = 'my-image-name.png'
            link.href = dataUrl
            link.click()
          })
          .catch((err) => {
            console.log(err)
          })
      }, [sharedRef])
    
  return (
    <>
        {/* <div ref={ref}>
            <Canvas/>
        </div> */}
        <div onClick={onButtonClick}>
        <FeatureInnerBox withOfBox='200px' heightOfBox='68px' >
            Download
        </FeatureInnerBox>
        </div>
    </>
  )
}

export default Download
