import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/authentication/authSlice";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import utilityReducer from "@/features/utilitySlice";

const persistConfig = {
  key: "root",
  storage,
};

export interface storeInterface {
  auth: object;
  utility: object;
}

const reducers = combineReducers({
  auth: authReducer,
  utility: utilityReducer,
});

const persisedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persisedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: {
        warnAfter: 128,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
