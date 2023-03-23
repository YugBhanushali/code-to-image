import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FeatureGeneralBox, FeatureInnerBox } from '../styled/StyledFeature'
import html2canvas from 'html2canvas';
import { toPng,toSvg } from 'html-to-image';
import Canvas from './Canvas';
import { useSelector } from 'react-redux';
import { renderToStaticMarkup } from 'react-dom/server';
import { ReactSVG } from 'react-svg'
import { saveAs } from 'file-saver';
import { useReactToPrint } from 'react-to-print';

// export const ref = useRef<HTMLDivElement>(null);
const Download = ({sharedRef}) => {

    const onButtonClick = useCallback(() => {
        if (sharedRef.current === null) {
          return
        }
    
        toPng(sharedRef.current, { cacheBust: true, })
          .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = 'code-to-image.png'
            link.href = dataUrl
            link.click()
          })
          .catch((err) => {
            console.log(err)
          })
    }, [sharedRef])

    const style = `
      button, a {
        pointer-events: none;
      }`;

    const onButtonClickForSVG = useCallback(() => {
      if (sharedRef.current === null) {
        return
      }
  
      toSvg(sharedRef.current, { cacheBust: true},style)
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = 'code-to-image.svg'
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
        <div className='cursor-pointer' onClick={onButtonClick}>
        <FeatureInnerBox withOfBox='200px' heightOfBox='68px' >
            Download
        </FeatureInnerBox>
        </div>

        <div className='cursor-pointer' onClick={onButtonClickForSVG} >
          <FeatureInnerBox withOfBox='200px' heightOfBox='68px' >
              Download SVG
          </FeatureInnerBox>
        </div>
    </>
  )
}

export default Download
