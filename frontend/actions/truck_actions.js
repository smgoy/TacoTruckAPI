export const truckConstants = {
  REQUEST_ALL_TRUCKS: "REQUEST_ALL_TRUCKS",
  RECEIVE_ALL_TRUCKS: "RECEIVE_ALL_TRUCKS",
  ADD_TRUCK: "ADD_TRUCK",
  RECEIVE_TRUCK: "RECEIVE_TRUCK",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const requestAllTrucks = () => ({
  type: truckConstants.REQUEST_ALL_TRUCKS
});

export const receiveAllTrucks = trucks => ({
  type: truckConstants.RECEIVE_ALL_TRUCKS,
  trucks
});

export const addTruck = truck => ({
  type: truckConstants.ADD_TRUCK,
  truck
});

export const receiveTruck = truck => ({
  type: truckConstants.RECEIVE_TRUCK,
  truck
});

export const receiveErrors = errors => ({
  type: truckConstants.RECEIVE_ERRORS,
  errors
});
