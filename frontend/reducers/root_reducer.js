import { combineReducers } from 'redux';
import { TruckReducer } from './truck_reducer';
import { TacoReducer } from './taco_reducer';

const RootReducer = combineReducers({
  trucks: TruckReducer,
  tacos: TacoReducer
});

export default RootReducer;
