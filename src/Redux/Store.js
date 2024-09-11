import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Authslice'; // Update the path as necessary

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
