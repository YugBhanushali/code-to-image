import { createSlice } from "@reduxjs/toolkit";

export const CanvasConfigSlice = createSlice({
    name:'canvasStyle',
    initialState:{
        canvasPadding:'30px',
        canvasBackGround:'#6B5ED9',
        snippetFontFamily:`'JetBrains Mono', monospace`,
        snippetMode:'dark',
        snippetTheme:'prism-atom-dark',
        codeLanguage:'javascript',
        codeContent:`function add(a, b) {
            return a + b;
          }`  
    },
    reducers:{
        changecanvasPadding:(state,action) =>{
            state.canvasPadding = action.payload;
        },
        changecanvasBackGround:(state,action) =>{
            state.canvasBackGround = action.payload;
        },
        changesnippetFontFamily:(state,action) =>{
            state.snippetFontFamily = action.payload;
        },
        changesnippetMode:(state,action) =>{
            state.snippetMode = action.payload;
        },
        changesnippetTheme:(state,action) =>{
            state.snippetTheme = action.payload;
        },
        changecodeLanguage:(state,action) =>{
            state.codeLanguage = action.payload;
        },
        changecodeContent:(state,action) =>{
            state.codeContent = action.payload;
        },
    }
});

export const { changecanvasPadding, changecanvasBackGround ,changesnippetFontFamily, changesnippetMode, changesnippetTheme, changecodeLanguage, changecodeContent} = CanvasConfigSlice.actions;

export default CanvasConfigSlice.reducer;