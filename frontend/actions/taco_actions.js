export const tacoConstants = {
  REQUEST_TACOS: "REQUEST_TACOS",
  RECEIVE_TACOS: "RECEIVE_TACOS",
  ADD_TACO: "ADD_TACO",
  RECEIVE_TACO: "RECEIVE_TACO",
  DELETE_TACO: "DELETE_TACO",
  REMOVE_TACO: "REMOVE_TACO",
  EDIT_TACO: "EDIT_TACO"
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
