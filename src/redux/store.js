// redux/store.js
import { configureStore } from 'redux';
import rootReducer from './reducers';

const store = configureStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
