import { configureStore } from "@reduxjs/toolkit";
import api from "./api";

const store = configureStore ({
    reducers: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;