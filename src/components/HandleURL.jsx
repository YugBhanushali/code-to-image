import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HandleURL = () => {
  const history = useNavigate();

  const canvasPadding = useSelector((state) => state.canvasStyle.canvasPadding);
  const canvasBackGround = useSelector(
    (state) => state.canvasStyle.canvasBackGround,
  );
  const snippetFontFamily = useSelector(
    (state) => state.canvasStyle.snippetFontFamily,
  );
  const snippetMode = useSelector((state) => state.canvasStyle.snippetMode);
  // const snippetTheme=useSelector((state)=>state.canvasStyle.snippetTheme);
  const codeLanguage = useSelector((state) => state.canvasStyle.codeLanguage);
  const codeContent = useSelector((state) => state.canvasStyle.codeContent);
  const canvasWidth = useSelector((state) => state.canvasStyle.canvasWidth);
  const canvasGradientBackgroundStart = useSelector(
    (state) => state.canvasStyle.canvasGradientBackgroundStart,
  );
  const canvasGradientBackgroundEnd = useSelector(
    (state) => state.canvasStyle.canvasGradientBackgroundEnd,
  );
  const canvasGradientBackgroundAngle = useSelector(
    (state) => state.canvasStyle.canvasGradientBackgroundAngle,
  );
  const snippetFileName = useSelector(
    (state) => state.canvasStyle.snippetFileName,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    history({
      pathname: "/",
      search: `padding=${canvasPadding}&canvasBackground=${canvasBackGround.substring(1, 6)}`,
    });
    console.log(canvasBackGround.substring(1, 6));
  }, [
    canvasBackGround,
    canvasPadding,
    snippetFontFamily,
    snippetMode,
    codeLanguage,
    codeContent,
    canvasWidth,
    canvasGradientBackgroundStart,
    canvasGradientBackgroundEnd,
    canvasGradientBackgroundAngle,
    snippetFileName,
  ]);

  return <></>;
};

export default HandleURL;
