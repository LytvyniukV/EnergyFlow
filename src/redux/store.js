import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReduser } from "./users/slice";
import { trainingReducer } from "./trainings/slice";
import { waterReducer } from "./water/slice";

const authPersistConfig = {
  key: "userSlice",
  storage,
  whitelist: ["token"],
};

const persistedUserReducer = persistReducer(authPersistConfig, userReduser);
export const store = configureStore({
  reducer: {
    training: trainingReducer,
    water: waterReducer,
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
