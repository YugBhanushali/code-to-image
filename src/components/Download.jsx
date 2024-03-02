import React, { useCallback, useEffect, useRef, useState } from "react";
import { FeatureGeneralBox, FeatureInnerBox } from "../styled/StyledFeature";
import html2canvas from "html2canvas";
import { toPng, toSvg, toJpeg } from "html-to-image";
import Canvas from "./Canvas";
import { useDispatch, useSelector } from "react-redux";
import { renderToStaticMarkup } from "react-dom/server";
import { ReactSVG } from "react-svg";
import { saveAs } from "file-saver";
import { useReactToPrint } from "react-to-print";
import DropdownDownload from "./Dropdownlist/DropdownDownload";
import { FormatList, WidthList } from "../constants/Constants";
import { DownloadFormatContext } from "../Context/DownloadFormatContext";
import confetti from "canvas-confetti";

const Download = ({ sharedRef }) => {
  const [canvasFormat, setcanvasFormat] = useState(".png");
  const snippetFileName = useSelector(
    (state) => state.canvasStyle.snippetFileName,
  );

  const onButtonClickForPng = useCallback(async () => {
    if (sharedRef.current === null) {
      return;
    }

    await toPng(sharedRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${snippetFileName.split(".")[0]}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sharedRef, snippetFileName]);

  const onButtonClickForJpeg = useCallback(() => {
    if (sharedRef.current === null) {
      return;
    }

    toJpeg(sharedRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${snippetFileName.split(".")[0]}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sharedRef, snippetFileName]);

  const onButtonClickForSVG = useCallback(() => {
    if (sharedRef.current === null) {
      return;
    }

    toSvg(sharedRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${snippetFileName.split(".")[0]}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sharedRef, snippetFileName]);

  const handleFormatClick = () => {
    if (canvasFormat === ".png") {
      onButtonClickForPng();
    } else if (canvasFormat === ".svg") {
      onButtonClickForSVG();
    } else if (canvasFormat === ".jpeg") {
      onButtonClickForJpeg();
    }
  };

  return (
    <>
      {/* <div ref={ref}>
            <Canvas/>
        </div> */}
      <DownloadFormatContext.Provider value={{ canvasFormat, setcanvasFormat }}>
        <div className="cursor-pointer flex">
          <FeatureInnerBox withOfBox="229px" heightOfBox="52px">
            Format
            <DropdownDownload placeHolder="PNG" options={FormatList} />
          </FeatureInnerBox>
        </div>
      </DownloadFormatContext.Provider>

      <div
        className="cursor-pointer"
        onClick={() => {
          handleFormatClick();
          confetti({
            particleCount: 500,
            spread: 200000,
            origin: { y: -0.2 },
          });
        }}
      >
        <FeatureInnerBox
          className="flex text-center justify-center items-center hover:bg-black"
          withOfBox="227px"
          heightOfBox="59px"
        >
          <div className="h-full w-full flex justify-center items-center">
            Export
          </div>
        </FeatureInnerBox>
      </div>
    </>
  );
};

export default Download;
