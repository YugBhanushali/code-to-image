import React from 'react'
import { FeatureGeneralBox, FeatureInnerBox } from '../styled/StyledFeature'
import ColourPicker from './ColourPicker'

const SolidColour = () => {
  return (
    <div className='flex flex-row h-[100%] width-[100%]'>
        <div className='flex flex-row w-[100%] h-[40%] p-0 justify-center items-center'>
            <FeatureGeneralBox paddingOfBox='13px' marginOfBox='7px' heightOfBox='52px' widthOfBox='100px'>
                Background Colour
            </FeatureGeneralBox>
            <FeatureGeneralBox paddingOfBox='13px' heightOfBox='52px' widthOfBox='200px'>
                <ColourPicker/>
            </FeatureGeneralBox>
        </div>
    </div>
  )
}

export default SolidColour
