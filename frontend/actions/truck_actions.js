export const truckConstants = {
  REQUEST_ALL_TRUCKS: "REQUEST_ALL_TRUCKS",
  RECEIVE_ALL_TRUCKS: "RECEIVE_ALL_TRUCKS"
};

export const requestAllTrucks = () => ({
  type: truckConstants.REQUEST_ALL_TRUCKS
});

export const receiveAllTrucks = (trucks) => ({
  type: truckConstants.RECEIVE_ALL_TRUCKS,
  trucks
});
