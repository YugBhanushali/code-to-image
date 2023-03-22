import React from 'react'
import { FeatureGeneralBox, FeatureInnerBox } from '../styled/StyledFeature'
import html2canvas from 'html2canvas';


const Download = () => {

    const takeScreenshot = () => {
        html2canvas(document.querySelector('#mainCanvas'))
          .then((canvas) => {
            const link = document.createElement('a');
            link.download = 'component.png';
            link.href = canvas.toDataURL();
            link.click();
          });
      }

  return (
    <div onClick={takeScreenshot}>
      <FeatureInnerBox withOfBox='200px' heightOfBox='68px' >
        Download
      </FeatureInnerBox>
    </div>
  )
}

export default Download
