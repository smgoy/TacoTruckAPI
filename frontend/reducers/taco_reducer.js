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
    default:
      return state;
  }
};
