import { createStore } from 'redux';
import MasterMiddleware from '../middleware/master_middleware';
import RootReducer from '../reducers/root_reducer';

export default (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    MasterMiddleware
  )
);
