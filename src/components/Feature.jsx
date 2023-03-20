import React from 'react'
import styled from 'styled-components'
import { FontFamilyList, PaddingList, ProgrammingLanguages } from '../constants/Constants'
import ColourPicker from './ColourPicker'
import Dropdown from './Dropdownlist/Dropdown'
import DropdownLanguage from './Dropdownlist/DropdownLanguage'
import DropdownPadding from './Dropdownlist/DropdownPadding'

const FeatureOuterBox = styled.div`
    position: fixed;
    display:flex-col;
    ${'' /* z-index:5; */}
    margin:auto;
    width:900px;
    bottom: 100px;
    ${'' /* align-items: center; */}
    background: rgba(40, 37, 37, 0.42);
    border: 1px solid rgba(98, 83, 83, 0.82);
    border-radius: 18px;
    padding:3px;
    text-align:center
`

const FeatureInnerBox = styled.div`
    display:flex;
    width: ${(props)=>props.withOfBox};
    height: 52px;
    background: rgba(40, 37, 37, 0.42);
    border: 1px solid rgba(98, 83, 83, 0.82);
    border-radius: 7px;
    margin:8px;
    text-align:center;
    justify-content:center;
    font-family:'JetBrains Mono';
    font-size:13px;
    color:#BBADAD;
    padding:13px;
    align-items:center;
`


const Feature = () => {
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
            <FeatureInnerBox withOfBox='210px'>
                Language
                <DropdownLanguage placeHolder='Java' options={ProgrammingLanguages}/>
            </FeatureInnerBox>
        </div>
        <div className='flex' >
            <FeatureInnerBox withOfBox='300px'>
                Background
                <ColourPicker/>
            </FeatureInnerBox>

            <FeatureInnerBox>
                dfdljfoij
            </FeatureInnerBox>
        </div>
        
    </FeatureOuterBox>
  )
}

export default Feature
