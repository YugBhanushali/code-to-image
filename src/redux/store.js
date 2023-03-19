import { configureStore } from '@reduxjs/toolkit'
import CanvasConfigReducer from './CanvasConfigSlice'

export const store = configureStore({
  reducer: {
    canvasStyle:CanvasConfigReducer,
  },
})