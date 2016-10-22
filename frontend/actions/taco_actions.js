export const tacoConstants = {
  REQUEST_TACOS: "REQUEST_TACOS",
  RECEIVE_TACOS: "RECEIVE_TACOS",
  ADD_TACO: "ADD_TACO",
  RECEIVE_TACO: "RECEIVE_TACO"
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
