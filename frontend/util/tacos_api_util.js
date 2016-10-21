import $ from 'JQuery';

export const requestTacos = (success, truckID) => {
  $.ajax({
    url: `api/tacos/${truckID}`,
    method: 'GET',
    dataType: 'json',
    success
  });
};
