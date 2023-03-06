import { configureStore } from "@reduxjs/toolkit";
import imagePreviewReducer from './ImagePreviewSlice'

export const store = configureStore({
  reducer: {
    imagePreview: imagePreviewReducer
  }
})