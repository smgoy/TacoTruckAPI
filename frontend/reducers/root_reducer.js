import { combineReducers } from 'redux';
import { TruckReducer } from './truck_reducer';

const RootReducer = combineReducers({
  trucks: TruckReducer
});

export default RootReducer;
