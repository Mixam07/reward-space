import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products-reducer";
import userReducer from "./reducers/user-reducer";

const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;