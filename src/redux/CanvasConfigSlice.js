import { createSlice } from "@reduxjs/toolkit";

export const CanvasConfigSlice = createSlice({
  name: "canvasStyle",
  initialState: {
    canvasPadding: "30px",
    canvasBackGround: "#6B5ED9",
    canvasWidth: "800px",
    snippetFontFamily: `'JetBrains Mono', monospace`,
    snippetMode: "dark",
    snippetTheme: "prism-atom-dark",
    codeLanguage: "javascript",
    codeContent: `function add(a, b) {
            return a + b;
          }`,
    canvasGradientBackgroundStart: "#6cbca4",
    canvasGradientBackgroundEnd: "#1a4175",
    canvasGradientBackgroundAngle: "100",
    snippetFileName: "Untitled - 1",
    canvasColourType: "linear",
    FontTheme: "prism-atom-dark",
  },
  reducers: {
    changecanvasPadding: (state, action) => {
      state.canvasPadding = action.payload;
    },
    changecanvasBackGround: (state, action) => {
      state.canvasBackGround = action.payload;
    },
    changesnippetFontFamily: (state, action) => {
      state.snippetFontFamily = action.payload;
    },
    changesnippetMode: (state, action) => {
      state.snippetMode = action.payload;
    },
    changesnippetTheme: (state, action) => {
      state.snippetTheme = action.payload;
    },
    changecodeLanguage: (state, action) => {
      state.codeLanguage = action.payload;
    },
    changecodeContent: (state, action) => {
      state.codeContent = action.payload;
    },
    changecanvasWidth: (state, action) => {
      state.canvasWidth = action.payload;
    },
    changecanvasBackgroundStart: (state, action) => {
      state.canvasGradientBackgroundStart = action.payload;
    },
    changecanvasBackgroundEnd: (state, action) => {
      state.canvasGradientBackgroundEnd = action.payload;
    },
    changecanvasBackgroundAngle: (state, action) => {
      state.canvasGradientBackgroundAngle = action.payload;
    },
    changesnippetFileName: (state, action) => {
      state.snippetFileName = action.payload;
    },
    changecanvasColourType: (state, action) => {
      state.canvasColourType = action.payload;
    },
    changeFontTheme: (state, action) => {
      state.FontTheme = action.payload;
    },
  },
});

export const {
  changeFontTheme,
  changecanvasColourType,
  changesnippetFileName,
  changecanvasBackgroundStart,
  changecanvasBackgroundEnd,
  changecanvasBackgroundAngle,
  changecanvasWidth,
  changecanvasPadding,
  changecanvasBackGround,
  changesnippetFontFamily,
  changesnippetMode,
  changesnippetTheme,
  changecodeLanguage,
  changecodeContent,
} = CanvasConfigSlice.actions;

export default CanvasConfigSlice.reducer;
