import React from 'react'
import { FeatureGeneralBox } from '../styled/StyledFeature'
import ColourPicker from './ColourPicker'

const LinearGradientColour = () => {
  return (
    <>
        <div className='flex flex-row'>

            <div className='flex flex-row h-[100%] width-[100%] mt-2'>
                <div className='flex flex-row w-[100%] h-[100%] p-0 justify-start items-center'>
                    <div className='mr-[9px]'>
                        <FeatureGeneralBox paddingOfBox='13px' marginOfBox='0px' heightOfBox='52px' withOfBox='160px'>
                            Gradient Start
                        </FeatureGeneralBox>
                    </div>
                    <div>
                        <FeatureGeneralBox paddingOfBox='2px' heightOfBox='52px' withOfBox='160px'>
                            <ColourPicker/>
                        </FeatureGeneralBox>
                    </div>
                </div>
            </div>

            <div className='flex flex-row h-[100%] width-[100%] mt-2'>
                <div className='flex flex-row w-[100%] h-[100%] p-0 justify-start items-center'>
                    <div className='mr-[9px] ml-[10px]'>
                        <FeatureGeneralBox paddingOfBox='13px' marginOfBox='0px' heightOfBox='52px' widthOfBox='100px'>
                            Angle
                        </FeatureGeneralBox>
                    </div>
                    <div className='flex text-center justify-center items-center'>
                        <FeatureGeneralBox paddingOfBox='30%' heightOfBox='52px' withOfBox='60px'>
                            <div className='flex justify-center items-center'>
                                100
                            </div>
                        </FeatureGeneralBox>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-row'>
            <div className='flex flex-row h-[100%] width-[100%] mt-2'>
                <div className='flex flex-row w-[100%] h-[100%] justify-between-[10px] p-0 justify-start items-center'>
                    <div className='mr-[9px]'>
                        <FeatureGeneralBox paddingOfBox='13px' marginOfBox='0px' heightOfBox='52px' withOfBox='160px'>
                            Gradient End
                        </FeatureGeneralBox>
                    </div>
                    <div>
                        <FeatureGeneralBox paddingOfBox='2px' heightOfBox='52px' withOfBox='160px'>
                            <ColourPicker/>
                        </FeatureGeneralBox>
                    </div>
                </div>
            </div> 
        </div>
    </>
  )
}

export default LinearGradientColour
