import {
  Alert
} from 'react-native';

import api from './api';

export function getCharacters(params, callback) {
  api.get('/v1/public/characters', {params})

  .then(function (response) {
    const { data } = response.data;
    callback(data);
  })

  .catch(function (error) {
    console.log(error);
    Alert.alert(
      'Conexão falhou',
      'Não foi possível acessar os personagens agora. Verifique se está conectado à Internet e tente novamente.',
      [
        {text: "Eu sou inevitável...", onPress: () => getCharacters(params, callback)}
      ],
      {cancelable: true},
    );
  });
}