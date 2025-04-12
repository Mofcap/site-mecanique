import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slides: [
    { id: 1, description: 'Service complet de vidange et réparation moteur : une expertise mécanique pour une performance optimale.' },
    { id: 2, description: 'Diagnostic automobile de précision : détection des pannes grâce à la technologie.' },
    
  ],
  currentSlide: 0,
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentSlide = (state.currentSlide + 1) % state.slides.length;
    },
    prevSlide: (state) => {
      state.currentSlide =
        (state.currentSlide - 1 + state.slides.length) % state.slides.length;
    },
  },
});

export const { nextSlide, prevSlide } = bannerSlice.actions;
export default bannerSlice.reducer;
