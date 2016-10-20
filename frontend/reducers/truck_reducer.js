import { truckConstants } from '../actions/truck_actions';

const initialState = {
  trucksData: [],
  message: null
};

export const TruckReducer = (state = initialState, action) => {
  switch (action.type) {
    case truckConstants.RECEIVE_ALL_TRUCKS:
      return Object.assign({}, state, {trucksData: action.trucks});
    case truckConstants.RECEIVE_TRUCK:
      const trucks = state.trucksData.slice();
      trucks.push(action.truck);
      const newState = {trucksData: trucks, message: 'Success!'};
      return Object.assign({}, newState);
    case truckConstants.RECEIVE_ERRORS:
      return Object.assign({}, state, {message: action.errors.responseText});
    default:
      return state;
  }
};
