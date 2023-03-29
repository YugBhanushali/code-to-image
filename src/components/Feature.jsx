import React, { useContext, useState } from 'react'
import { FontFamilyList, PaddingList, ProgrammingLanguages, ThemeList, WidthList } from '../constants/Constants'
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
import { VisibleContext } from '../Context/VisibleContext'
import DropdownTheme from './Dropdownlist/DropdownTheme'
import DropdownChakra from './Dropdownlist/DropdownChakra'
import Footer from './Footer'


const Feature = ({sharedRef}) => {

    const {visiblity, setvisiblity} =useContext(VisibleContext);
    const dispatch = useDispatch();
    const [colourType, setcolourType] = useState('solid')
  return (
    <>

        <div className='w-full lg:flex sm:flex-col justify-center items-center overflow-x-auto m-auto min-w-0'>

            <FeatureOuterBox  className={`${visiblity===true ? null : 'hidden'} lg:fixed `}>
                <div className='flex'>
                    <FeatureInnerBox withOfBox='251px'>
                        Font
                        <Dropdown placeHolder='Select...' options={FontFamilyList}/>
                        {/* <DropdownChakra width='md' placeholder='Select...' optionsList={FontFamilyList} typeList='font'/> */}
                    </FeatureInnerBox>
                    <FeatureInnerBox withOfBox='180px'>
                        Padding
                        <DropdownPadding placeHolder='30' options={PaddingList}/>
                        {/* <DropdownChakra width='unset' placeholder='30' optionsList={PaddingList} typeList='padding'/> */}
                    </FeatureInnerBox>
                    <FeatureInnerBox withOfBox='220px'>
                        Language
                        <DropdownLanguage placeHolder='JavaScript' options={ProgrammingLanguages}/>
                        {/* <DropdownChakra width='sm' placeholder='JavaScript' optionsList={ProgrammingLanguages} typeList='language'/> */}
                    </FeatureInnerBox>
                    <FeatureInnerBox withOfBox='200px'>
                        Dark
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
                                {colourType === 'solid' ? <SolidColour/> : <GradientColour/>}
                            </FeatureInnerBox>
                        </ColourTypeContext.Provider>
                    </div>
                    <div className='flex flex-col'>

                        <FeatureInnerBox  withOfBox='227px' heightOfBox='67px'>
                            Theme UI
                            <DropdownTheme placeHolder='Atom dark' options={ThemeList}/>
                            {/* <DropdownChakra width='sm' placeholder='One dark' optionsList={ThemeList} typeList='theme'/> */}
                        </FeatureInnerBox>

                        <FeatureInnerBox  withOfBox='227px' heightOfBox='67px'>
                            Width
                            <DropdownWidth placeHolder='800' options={WidthList}/>
                        </FeatureInnerBox>

                        <Download sharedRef={sharedRef} />
                    </div>
                </div>
                
            </FeatureOuterBox>
        </div>
    </>
  )
}

export default Feature
