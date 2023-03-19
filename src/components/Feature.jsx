import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import { FontFamilyList } from '../constants/FontList'

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
    width: 251px;
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
            <FeatureInnerBox>
                Font
                <Dropdown placeHolder='Select...' options={FontFamilyList}/>
            </FeatureInnerBox>
        </div>
        <div className='flex' >
            <FeatureInnerBox>
                dfdljfoij
            </FeatureInnerBox>

            <FeatureInnerBox>
                dfdljfoij
            </FeatureInnerBox>
        </div>
        
    </FeatureOuterBox>
  )
}

export default Feature
