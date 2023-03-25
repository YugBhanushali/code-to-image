import React from 'react'
import { FeatureGeneralBox, FeatureInnerBox } from '../styled/StyledFeature'
import ColourPicker from './ColourPicker'

const SolidColour = () => {
  return (
    // <div className='flex flex-row h-[100%] width-[100%]'>
    //     <div className='flex flex-row w-[100%] h-[40%] p-0 justify-center items-center'>
    //         <FeatureGeneralBox paddingOfBox='13px' marginOfBox='7px' heightOfBox='52px' widthOfBox='100px'>
    //             Background Colour
    //         </FeatureGeneralBox>
    //         <FeatureGeneralBox paddingOfBox='13px' heightOfBox='52px' widthOfBox='200px'>
    //             <ColourPicker bgType='solid'/>
    //         </FeatureGeneralBox>
    //     </div>
    // </div>

    <div className='flex flex-row h-[100%] width-[100%]'>
        <div className='flex flex-row h-[100%] width-[100%]'>
                <div className='flex flex-row h-[30%] w-[100%]'>
                    {/* <FeatureGeneralBox withOfBox='520px' paddingOfBox='10px' marginOfBox='0px'>
                        Gradient type
                        <ColourType/>
                    </FeatureGeneralBox> */}
                    <FeatureGeneralBox marginOfBox='0px' heightOfBox='52px' withOfBox='160px' paddingOfBox='13px'>Background Colour</FeatureGeneralBox>
                </div>

                <div className='flex flex-row ml-[9px]'>
                    {/* {gradientType === 'linear' ? <LinearGradientColour/> : <RadialGradient/>} */}
                    <FeatureGeneralBox paddingOfBox='13px' heightOfBox='52px' withOfBox='180px' >
                        <ColourPicker bgType='solid'/>          
                    </FeatureGeneralBox>
                </div>

        </div>
    </div>
  )
}

export default SolidColour
