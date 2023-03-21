import React from 'react'

const RadialGradient = () => {
  return (
    <>
      <div className='flex flex-row'>

          <div className='flex flex-row h-[100%] width-[100%] mt-2'>
              <div className='flex flex-row w-[100%] h-[100%] p-0 justify-start items-center'>
                  <div className='mr-[9px]'>
                      <FeatureGeneralBox paddingOfBox='13px' marginOfBox='0px' heightOfBox='52px' widthOfBox='100px'>
                          Background Colour
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

        <div className='flex flex-row'>
          <div className='flex flex-row h-[100%] width-[100%] mt-2'>
              <div className='flex flex-row w-[100%] h-[100%] justify-between-[10px] p-0 justify-start items-center'>
                  <div className='mr-[9px]'>
                      <FeatureGeneralBox paddingOfBox='13px' marginOfBox='0px' heightOfBox='52px' widthOfBox='100px'>
                          Background Colour
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

export default RadialGradient
