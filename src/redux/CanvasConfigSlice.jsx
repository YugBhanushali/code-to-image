import { createSlice } from "@reduxjs/toolkit";

export const CanvasConfigSlice = createSlice({
    name:'canvasStyle',
    initialState:{
        canvasPadding:20,
        canvasBackGround:'#6B5ED9',
        snippetFontFamily:'JetBrains Mono',
        snippetMode:'dark',
        snippetTheme:'prism-atom-dark',
        
    },
    reducers:{

    }
})