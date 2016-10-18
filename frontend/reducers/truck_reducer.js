import { truckConstants } from '../actions/truck_actions';

export const TruckReducer = (state = [], action) => {
  switch (action.type) {
    case truckConstants.RECEIVE_ALL_TRUCKS:
      return action.trucks;
    case truckConstants.RECEIVE_TRUCK:
      const trucks = state.slice();
      trucks.push(action.truck);
      return trucks;
    default:
      return state;
  }
};
