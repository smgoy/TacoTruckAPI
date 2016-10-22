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
      const tacos = state.tacoData.slice();
      tacos.push(action.taco);
      const newState = {tacoData: tacos, message: "Success!"};
      return Object.assign({}, newState);
    }
    case tacoConstants.REMOVE_TACO: {
      const tacos = state.tacoData.slice();
      const idx = tacos.indexOf(action.taco);
      tacos.splice(idx, 1);
      const newState = {tacoData: tacos, message: 'Success!'};
      return Object.assign({}, newState);
    }
    default:
      return state;
  }
};
