import api from './api';

export function getCharacters(params, callback) {
  api.get('/v1/public/characters', {params})

  .then(function (response) {
    console.log(response.data);
    callback({
      error: null,
      results : response.data
    });
  })

  .catch(function (error) {
    console.log(error);
    callback({
      error
    });
  });
}