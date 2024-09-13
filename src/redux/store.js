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
import { exercisesReduser } from "./exercises/slice";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["refreshToken"],
};

const persistedUserReducer = persistReducer(userPersistConfig, userReduser);
export const store = configureStore({
  reducer: {
    training: trainingReducer,
    water: waterReducer,
    user: persistedUserReducer,
    exercises: exercisesReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
