import $ from 'JQuery';

export const requestAllTrucks = (success) => {
  $.ajax({
    url: 'api/trucks',
    method: 'GET',
    dataType: 'json',
    success
  });
};
