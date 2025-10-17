import { configureStore } from "@reduxjs/toolkit";
import RootReducer from './Reducers';

const Store = configureStore({
    reducer: RootReducer,
})

export default Store;