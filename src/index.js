import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import userdataReducer from './redux/reducers/userdataReducer'

const root = ReactDOM.createRoot(document.getElementById('root'));

// Store all the Redux states (equivalent a global state)
const store = configureStore({
  reducer: {
    userData: userdataReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
