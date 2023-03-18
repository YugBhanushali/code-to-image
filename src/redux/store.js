import { configureStore } from '@reduxjs/toolkit'
import CanvasConfigSlice from './CanvasConfigSlice'

export const store = configureStore({
  reducer: {
    canvasStyle:CanvasConfigSlice,
  },
})