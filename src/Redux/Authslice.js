import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    email: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
        },
        getemail: (state, action) => {
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, getemail, logout } = authSlice.actions;
export default authSlice.reducer;

  
