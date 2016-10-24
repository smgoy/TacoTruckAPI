import $ from 'jquery';

export const requestTacos = (success, truckID) => {
  $.ajax({
    url: `api/tacos/${truckID}`,
    method: 'GET',
    dataType: 'json',
    success
  });
};

export const addTaco = (success, error, data) => {
  $.ajax({
    url: `api/tacos`,
    method: 'POST',
    dataType: 'json',
    data,
    success,
    error
  });
};

export const deleteTaco = (success, id) => {
  $.ajax({
    url: `api/tacos/${id}`,
    method: 'DELETE',
    dataType: 'json',
    success
  });
};

export const editTaco = (success, error, tacoID, data) => {
  $.ajax({
    url: `api/tacos/${tacoID}`,
    method: 'PUT',
    dataType: 'json',
    data,
    success,
    error
  });
};
