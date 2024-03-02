import React from "react";
import { FeatureGeneralBox } from "../styled/StyledFeature";
import ColourPicker from "./ColourPicker";

const RadialGradient = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-row h-[100%] width-[100%] mt-2">
          <div className="flex flex-row w-[100%] h-[100%] p-0 justify-start items-center">
            <div className="mr-[9px]">
              <FeatureGeneralBox
                paddingOfBox="13px"
                marginOfBox="0px"
                heightOfBox="52px"
                withOfBox="160px"
              >
                Gradient Start
              </FeatureGeneralBox>
            </div>
            <div>
              <FeatureGeneralBox
                paddingOfBox="2px"
                heightOfBox="52px"
                withOfBox="160px"
              >
                <ColourPicker bgType="radial 0" />
              </FeatureGeneralBox>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-row h-[100%] width-[100%] mt-2">
          <div className="flex flex-row w-[100%] h-[100%] justify-between-[10px] p-0 justify-start items-center">
            <div className="mr-[9px]">
              <FeatureGeneralBox
                paddingOfBox="13px"
                marginOfBox="0px"
                heightOfBox="52px"
                withOfBox="160px"
              >
                Gradient End
              </FeatureGeneralBox>
            </div>
            <div>
              <FeatureGeneralBox
                paddingOfBox="2px"
                heightOfBox="52px"
                withOfBox="160px"
              >
                <ColourPicker bgType="radial 1" />
              </FeatureGeneralBox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadialGradient;
