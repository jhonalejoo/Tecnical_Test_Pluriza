import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
import criptoReducer from './features/cripto/reducers';
import criptoSagas from './features/cripto/sagas';

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: {
      cripto:criptoReducer
    },
    middleware:[sagaMiddleWare]
  })
  sagaMiddleWare.run(criptoSagas)
  
  export default store;