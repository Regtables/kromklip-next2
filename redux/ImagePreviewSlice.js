import { createSlice } from "@reduxjs/toolkit";

const imagePreviewSlice = createSlice({
  name: 'imagePreview',
  initialState: {
    image: ''
  },
  reducers: {
    setActiveImage: (state, action) => {
      state.image = action.payload
    }
  }
})

export const { setActiveImage } = imagePreviewSlice.actions

export const selectActiveImage = (state) => state.imagePreviewSlice.image

export default imagePreviewSlice.reducer