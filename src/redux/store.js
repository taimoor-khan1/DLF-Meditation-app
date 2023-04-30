import { configureStore, combineReducers } from '@reduxjs/toolkit';
import UserDataReducer from './Slices/UserData';
import UtiltitiesReducer from './Slices/Utiltities';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const appReducer = combineReducers({
  UserData: UserDataReducer,
  utiltities: UtiltitiesReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = (state, action) => {
  // console.log('action: ', action);
  if (action.type === 'UserData/signOut') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});
export const persistor = persistStore(store);
