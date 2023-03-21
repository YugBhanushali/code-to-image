import React, { useState } from 'react'
import { FeatureGeneralBox, FeatureInnerBox } from '../styled/StyledFeature'
import ColourPicker from './ColourPicker'
import ColourType from './ColourType'
import GradientType from './GradientType'
import LinearGradientColour from './LinearGradientColour'
import RadialGradient from './RadialGradient'

const GradientColour = () => {

    const [gradientType, setgradientType] = useState(true);
  return (
    <div className='flex flex-row h-[100%] width-[100%]'>
        <div className='flex flex-col h-[100%] width-[100%]'>
            <div className='flex justify-center flex-row h-[30%] w-[100%]'>
                {/* <FeatureGeneralBox withOfBox='520px' paddingOfBox='10px' marginOfBox='0px'>
                    Gradient type
                    <ColourType/>
                </FeatureGeneralBox> */}
                <FeatureGeneralBox marginOfBox='0px' heightOfBox='50px' withOfBox='160px' paddingOfBox='13px'>Gradient type</FeatureGeneralBox>
                <GradientType/>
            </div>

            <div className='flex flex-col'>
                {gradientType === true ? <LinearGradientColour/> : <RadialGradient/>}
            </div>
        </div>
    </div>
  )
}

export default GradientColour
