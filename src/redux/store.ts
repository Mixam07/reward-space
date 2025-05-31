import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { ProductsState } from "./reducers/products-reducer";

const store = configureStore({
    reducer: {
        products: productsReducer as (state: ProductsState | undefined, action: any) => ProductsState,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;