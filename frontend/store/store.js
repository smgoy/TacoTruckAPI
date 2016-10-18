import { createStore } from 'redux';
import MasterMiddleware from '../middleware/master_middleware.js';
import RootReducer from '../reducers/root_reducer.js';

export default (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    MasterMiddleware
  )
);
