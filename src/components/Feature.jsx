import React, { useState } from 'react'
import styled from 'styled-components'
import { FontFamilyList, PaddingList, ProgrammingLanguages, WidthList } from '../constants/Constants'
import ColourPicker from './ColourPicker'
import Dropdown from './Dropdownlist/Dropdown'
import DropdownLanguage from './Dropdownlist/DropdownLanguage'
import DropdownPadding from './Dropdownlist/DropdownPadding'
import DropdownWidth from './Dropdownlist/DropdownWidth'
import { FeatureGeneralBox, FeatureInnerBox,FeatureMediumBox,FeatureOuterBox } from '../styled/StyledFeature'
import SolidColour from './SolidColour'
import GradientColour from './GradientColour'
import ColourType from './ColourType'
import { ColourTypeContext } from '../Context/ColourType'
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import { useDispatch } from 'react-redux'
import { changesnippetMode } from '../redux/CanvasConfigSlice'
import Download from './Download'



const Feature = () => {

    const dispatch = useDispatch();
    const [colourType, setcolourType] = useState('solid')
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
            <FeatureInnerBox withOfBox='220px'>
                Mode
                <ToggleSwitch
                    label="Toggle me"
                    toggled={true}
                    onClick={(state)=>{{state===true ? dispatch(changesnippetMode('dark')): dispatch(changesnippetMode('light')) }}}
                />
            </FeatureInnerBox>
        </div>
        <div className='flex flex-row' >
            <div>
                <ColourTypeContext.Provider value={{colourType,setcolourType}}>
                    <FeatureInnerBox heightOfBox='67px' withOfBox='550px'>
                        Background
                        <ColourType/>
                    </FeatureInnerBox>
                </ColourTypeContext.Provider>
                <ColourTypeContext.Provider value={{colourType,setcolourType}}>
                    <FeatureInnerBox heightOfBox='200px'>
                        {/* <SolidColour/> */}
                        {/* <GradientColour/> */}
                        {colourType === 'solid' ? <SolidColour/> : <GradientColour/>}
                    </FeatureInnerBox>
                </ColourTypeContext.Provider>
            </div>
            <div className='flex flex-col'>

                <Download/>
                <FeatureInnerBox  widthOfBox='200px' heightOfBox='67px'>
                    Width
                    <DropdownWidth placeHolder='800' options={WidthList}/>
                </FeatureInnerBox>
            </div>
        </div>
        
    </FeatureOuterBox>
  )
}

export default Feature
