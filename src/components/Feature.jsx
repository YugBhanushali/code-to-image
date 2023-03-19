import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'

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
    padding:20px;
    text-align:center
`

const FeatureInnerBox = styled.div`
    ${'' /* position: absolute; */}
    display:flex;
    width: 291px;
    height: 62px;
    background: rgba(40, 37, 37, 0.42);
    border: 1px solid rgba(98, 83, 83, 0.82);
    border-radius: 7px;
    margin:10px;
    text-align:center;
    justify-content:center;
    font-family:'JetBrains Mono';
    color:#BBADAD;
    padding:15px;
`


const Feature = () => {
  return (
    <FeatureOuterBox>
        <div className='flex'>
            <FeatureInnerBox>
                Font
                <Dropdown />
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
