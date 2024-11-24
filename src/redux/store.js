import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from './bannerSlice';
import servicesReducer from './servicesSlice';

const store = configureStore({
  reducer: {
    banner: bannerReducer,
    services: servicesReducer,
  },
});

export default store;
