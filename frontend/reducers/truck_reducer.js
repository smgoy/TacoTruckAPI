import { truckConstants } from '../actions/truck_actions';

export const TruckReducer = (state = [], action) => {
  switch (action.type) {
    case truckConstants.RECEIVE_ALL_TRUCKS:
      return action.trucks;
    default:
      return state;
  }
};
