import { truckConstants } from '../actions/truck_actions';

const initialState = {
  trucksData: [],
  message: null
};

export const TruckReducer = (state = initialState, action) => {
  switch (action.type) {
    case truckConstants.RECEIVE_ALL_TRUCKS: {
      return Object.assign({}, state, {trucksData: action.trucks});
    }
    case truckConstants.RECEIVE_TRUCK: {
      let trucks = state.trucksData.slice();
      let update = false;
      trucks = trucks.map(truck => {
        if (truck.id === action.truck.id) {
          update = true;
          truck.name = action.truck.name;
          return truck;
        }
        return truck;
      });
      if (!update) trucks.push(action.truck);
      const newState = {trucksData: trucks, message: 'Success!'};
      return Object.assign({}, newState);
    }
    case truckConstants.RECEIVE_ERRORS: {
      return Object.assign({}, state, {message: action.errors.responseJSON.message});
    }
    case truckConstants.CLEAR_ERRORS: {
      return Object.assign({}, state, {message: null});
    }
    case truckConstants.REMOVE_TRUCK: {
      const trucks = state.trucksData.slice();
      const idx = trucks.indexOf(action.truck);
      trucks.splice(idx, 1);
      const newState = {trucksData: trucks, message: 'Success!'};
      return Object.assign({}, newState);
    }
    default:
      return state;
  }
};
