import React, { useState } from 'react'
import styled from 'styled-components'
import { FontFamilyList, PaddingList, ProgrammingLanguages, WidthList } from '../constants/Constants'
import ColourPicker from './ColourPicker'
import Dropdown from './Dropdownlist/Dropdown'
import DropdownLanguage from './Dropdownlist/DropdownLanguage'
import DropdownPadding from './Dropdownlist/DropdownPadding'
import DropdownWidth from './Dropdownlist/DropdownWidth'
import { FeatureGeneralBox, FeatureInnerBox,FeatureMediumBox,FeatureOuterBox } from '../styled/StyledFeature'
import ColourType from './ColourType'
import SolidColour from './SolidColour'
import GradientColour from './GradientColour'


const Feature = () => {

    const [colourType, setcolourType] = useState(false)
  return (
    <FeatureOuterBox>
        <div className='flex'>
            <FeatureInnerBox withOfBox='251px'>
                Font
                <Dropdown placeHolder='Select...' options={FontFamilyList}/>
            </FeatureInnerBox>
            <FeatureInnerBox withOfBox='180px'>
                Padding
                <DropdownPadding placeHolder='30' options={PaddingList}/>
            </FeatureInnerBox>
            <FeatureInnerBox withOfBox='220px'>
                Language
                <DropdownLanguage placeHolder='JavaScript' options={ProgrammingLanguages}/>
            </FeatureInnerBox>
        </div>
        <div className='flex' >
            <div>
            <FeatureInnerBox heightOfBox='67px' withOfBox='550px'>
                Background
                {/* <ColourPicker/> */}
                <ColourType/>
                {/* <FeatureMediumBox withOfBox='400px' heightOfBox='200px'>
                
                </FeatureMediumBox> */}
            </FeatureInnerBox>
            <FeatureInnerBox heightOfBox='200px'>
                {/* <SolidColour/> */}
                {/* <GradientColour/> */}
                {colourType === true ? <SolidColour/> : <GradientColour/>}
            </FeatureInnerBox>

            </div>

            <FeatureInnerBox  widthOfBox='200px' heightOfBox='52px'>
                Width
                <DropdownWidth placeHolder='800' options={WidthList}/>
            </FeatureInnerBox>
        </div>
        
    </FeatureOuterBox>
  )
}

export default Feature
