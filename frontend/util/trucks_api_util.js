import $ from 'JQuery';

export const requestAllTrucks = (success) => {
  $.ajax({
    url: 'api/trucks',
    method: 'GET',
    dataType: 'json',
    success
  });
};

export const addTruck = (success, error, data) => {
  $.ajax({
    url: 'api/trucks',
    method: 'POST',
    dataType: 'json',
    data,
    success,
    error
  });
};
