import { tacoConstants } from '../actions/taco_actions';

const initialState = {
  tacoData: [],
  newMessage: '',
  editMessage: ''
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
      return Object.assign({}, state, {tacoData: tacos});
    }
    case tacoConstants.REMOVE_TACO: {
      const tacos = state.tacoData.slice();
      let idx;
      tacos.forEach((taco, index) => {
        if (taco.id === action.taco.id) idx = index;
      });
      tacos.splice(idx, 1);
      return Object.assign({}, state, {tacoData: tacos});
    }
    case tacoConstants.RECEIVE_TACO_ERRORS: {
      const errors = [];
      let error;
      if (action.errors.responseJSON.edit) {
        error = action.errors.responseJSON.edit;
      } else {
        error = action.errors.responseJSON.new;
      }
      if (error.name) {
        errors.push(error.name.message);
      }
      if (error.ingredients) {
        errors.push(error.ingredients.message);
      }
      let message;
      const errorMessage = errors.join(' and ') + ' are required';
      if (action.errors.responseJSON.edit) {
        message = {editMessage: errorMessage};
      } else {
        message = {newMessage: errorMessage};
      }
      return Object.assign({}, state, message);
    }
    case tacoConstants.CLEAR_TACO_ERRORS: {
      let message;
      if (action.kind === 'edit') {
        message = {editMessage: ''};
      } else {
        message = {newMessage: ''};
      }
      return Object.assign({}, state, message);
    }
    default:
      return state;
  }
};
