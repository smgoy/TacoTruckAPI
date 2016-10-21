export const tacoConstants = {
  REQUEST_TACOS: "REQUEST_TACOS",
  RECEIVE_TACOS: "RECEIVE_TACOS"
};

export const requestTacos = truckID => ({
  type: tacoConstants.REQUEST_TACOS,
  truckID
});

export const receiveTacos = tacos => ({
  type: tacoConstants.RECEIVE_TACOS,
  tacos
});
