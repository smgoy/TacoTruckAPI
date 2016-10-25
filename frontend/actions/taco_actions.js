export const tacoConstants = {
  REQUEST_TACOS: "REQUEST_TACOS",
  RECEIVE_TACOS: "RECEIVE_TACOS",
  ADD_TACO: "ADD_TACO",
  RECEIVE_TACO: "RECEIVE_TACO",
  DELETE_TACO: "DELETE_TACO",
  REMOVE_TACO: "REMOVE_TACO",
  EDIT_TACO: "EDIT_TACO",
  RECEIVE_TACO_ERRORS: "RECEIVE_TACO_ERRORS",
  CLEAR_TACO_ERRORS: "CLEAR_TACO_ERRORS"
};

export const requestTacos = truckID => ({
  type: tacoConstants.REQUEST_TACOS,
  truckID
});

export const receiveTacos = tacos => ({
  type: tacoConstants.RECEIVE_TACOS,
  tacos
});

export const addTaco = tacoInfo => ({
  type: tacoConstants.ADD_TACO,
  tacoInfo
});

export const receiveTaco = taco => ({
  type: tacoConstants.RECEIVE_TACO,
  taco
});

export const deleteTaco = id => ({
  type: tacoConstants.DELETE_TACO,
  id
});

export const removeTaco = taco => ({
  type: tacoConstants.REMOVE_TACO,
  taco
});

export const editTaco = (tacoID, taco) => ({
  type: tacoConstants.EDIT_TACO,
  tacoID,
  taco
});

export const receiveTacoErrors = errors => ({
  type: tacoConstants.RECEIVE_TACO_ERRORS,
  errors
});

export const clearTacoErrors = () => ({
  type: tacoConstants.CLEAR_TACO_ERRORS
});
