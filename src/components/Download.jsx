import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FeatureGeneralBox, FeatureInnerBox } from '../styled/StyledFeature'
import html2canvas from 'html2canvas';
import { toPng,toSvg,toJpeg } from 'html-to-image';
import Canvas from './Canvas';
import { useDispatch, useSelector } from 'react-redux';
import { renderToStaticMarkup } from 'react-dom/server';
import { ReactSVG } from 'react-svg'
import { saveAs } from 'file-saver';
import { useReactToPrint } from 'react-to-print';
import DropdownDownload from './Dropdownlist/DropdownDownload';
import { FormatList, WidthList } from '../constants/Constants';
import { DownloadFormatContext } from '../Context/DownloadFormatContext';

// export const ref = useRef<HTMLDivElement>(null);
const Download = ({sharedRef}) => {

    const [canvasFormat, setcanvasFormat] = useState('.png');
    const snippetFileName = useSelector((state)=>state.canvasStyle.snippetFileName);

    // useEffect(() => {
    //   console.log(snippetFileName);
    // }, [canvasFormat,snippetFileName]);

    // useEffect(() => {
    //   const link = document.createElement('link');
    //   link.href = 'https://fonts.googleapis.com/css2?family=Sono:wght@500&display=swap';
    //   link.rel = 'stylesheet';
    //   document.head.appendChild(link);
    // }, []);

    const onButtonClickForPng = useCallback( async () => {
        if (sharedRef.current === null) {
          return
        }
    
        await toPng(sharedRef.current, { cacheBust: true, })
          .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = `${snippetFileName}`
            link.href = dataUrl
            link.click()
          })
          .catch((err) => {
            console.log(err)
          })
    }, [sharedRef,snippetFileName]);

    // const onButtonClickForPng = ()=>{
    //   html2canvas(sharedRef.current)
    //   .then(function (canvas) {
    //     const link = document.createElement('a');
    //     link.download = 'my-image.png';
    //     link.href = canvas.toDataURL();
    //     link.click();
    //   });
    // }



    const onButtonClickForJpeg = useCallback(() => {
      if (sharedRef.current === null) {
        return
      }
  
      toJpeg(sharedRef.current, { cacheBust: true, })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = `${snippetFileName}`
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        })
  }, [sharedRef,snippetFileName]);

    const onButtonClickForSVG = useCallback(() => {
      if (sharedRef.current === null) {
        return
      }
  
      toSvg(sharedRef.current, { cacheBust: true})
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = `${snippetFileName}`
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        })
  }, [sharedRef,snippetFileName]);

  
  
  const handleFormatClick = ()=>{
    if(canvasFormat==='.png'){
      onButtonClickForPng();
    }
    else if(canvasFormat==='.svg'){
      onButtonClickForSVG();
    }
    else if(canvasFormat==='.jpeg'){
      onButtonClickForJpeg();
    }
  }
    
  return (
    <>
        {/* <div ref={ref}>
            <Canvas/>
        </div> */}
        <DownloadFormatContext.Provider value={{canvasFormat,setcanvasFormat}}>
          <div className='cursor-pointer flex'>
            <FeatureInnerBox withOfBox='227px' heightOfBox='52px' >
                Format
              <DropdownDownload placeHolder='PNG' options={FormatList}/>
            </FeatureInnerBox>
          </div>
        </DownloadFormatContext.Provider>

          <div className='cursor-pointer' onClick={handleFormatClick} >
            <FeatureInnerBox withOfBox='200px' heightOfBox='52px' >
                Export
            </FeatureInnerBox>
          </div>
    </>
  )
}

export default Download
