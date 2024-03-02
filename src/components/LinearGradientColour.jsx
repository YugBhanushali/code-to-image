import React from "react";
import { FeatureGeneralBox } from "../styled/StyledFeature";
import ColourPicker from "./ColourPicker";
import {
  CanvasConfigSlice,
  changecanvasBackgroundAngle,
} from "../redux/CanvasConfigSlice";
import { useDispatch, useSelector } from "react-redux";

const LinearGradientColour = () => {
  const canvasGradientBackgroundAngle = useSelector(
    (state) => state.canvasStyle.canvasGradientBackgroundAngle,
  );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
  };
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
                <ColourPicker bgType="linear 0" />
              </FeatureGeneralBox>
            </div>
          </div>
        </div>

        <div className="flex flex-row h-[100%] width-[100%] mt-2">
          <div className="flex flex-row w-[100%] h-[100%] p-0 justify-start items-center">
            <div className="mr-[9px] ml-[10px]">
              <FeatureGeneralBox
                paddingOfBox="13px"
                marginOfBox="0px"
                heightOfBox="52px"
                widthOfBox="100px"
              >
                Angle
              </FeatureGeneralBox>
            </div>
            <div className="flex text-center justify-center items-center">
              <FeatureGeneralBox
                paddingOfBox="30%"
                heightOfBox="52px"
                withOfBox="60px"
              >
                {/* <div onChange={handleChange} contentEditable='true' className='flex justify-center items-center'>
                                {canvasGradientBackgroundAngle}
                            </div> */}
                <input
                  onChange={(e) =>
                    dispatch(changecanvasBackgroundAngle(e.target.value))
                  }
                  value={canvasGradientBackgroundAngle}
                  className="bg-transparent outline-none"
                ></input>
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
                <ColourPicker bgType="linear 1" />
              </FeatureGeneralBox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinearGradientColour;
