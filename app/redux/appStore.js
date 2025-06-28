import { configureStore } from "@reduxjs/toolkit";
//reducer
import userReducer from './slice/userSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer
    }
});
export default appStore;