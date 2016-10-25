import { tacoConstants } from '../actions/taco_actions';

const initialState = {
  tacoData: [],
  message: null
};

export const TacoReducer = (state = initialState, action) => {
  switch (action.type) {
    case tacoConstants.RECEIVE_TACOS: {
      return Object.assign({}, state, {tacoData: action.tacos});
    }
    case tacoConstants.RECEIVE_TACO: {
      let tacos = state.tacoData.slice();
      let update = false;
      tacos = tacos.map(taco => {
        if (taco.id === action.taco.id) {
          update = true;
          return action.taco;
        }
        return taco;
      });
      if (!update) tacos.push(action.taco);
      const newState = {tacoData: tacos, message: null};
      return Object.assign({}, newState);
    }
    case tacoConstants.REMOVE_TACO: {
      const tacos = state.tacoData.slice();
      let idx;
      tacos.forEach((taco, index) => {
        if (taco.id === action.taco.id) idx = index;
      });
      tacos.splice(idx, 1);
      const newState = {tacoData: tacos, message: null};
      return Object.assign({}, newState);
    }
    case tacoConstants.RECEIVE_TACO_ERRORS: {
      const errors = [];
      if (action.errors.responseJSON.name) {
        errors.push(action.errors.responseJSON.name.message);
      }
      if (action.errors.responseJSON.ingredients) {
        errors.push(action.errors.responseJSON.ingredients.message);
      }
      const errorMessage = errors.join(' and ') + ' are required';
      return Object.assign({}, state, {message: errorMessage});
    }
    case tacoConstants.CLEAR_TACO_ERRORS: {
      return Object.assign({}, state, {message: null});
    }
    default:
      return state;
  }
};
