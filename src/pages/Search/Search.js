import React, { useState, useEffect } from 'react';
import {
  View, FlatList, Text, TextInput
} from 'react-native';

import CharacterItem from '../../components/CharacterItem';

import { main, type } from '../../components/Main.styles';
import { styles } from './Search.styles';

const charactersRequest_mock = require('./CharactersRequest.mock.json');

export default function Search() {

  const [searchInputValue, setSearchInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(charactersRequest_mock.data.results);

  // Resolves a new query.
  useEffect(() => {

  }, [query]);

  return (
    <View style={main.container}>
      <View style={styles.header}>

        <View style={styles.titleContainer}>
          <Text style={type.title}>Busca Marvel</Text>
          <Text style={type.subtitle}>Teste Front-End</Text>
        </View>
        <View style={styles.divisor} />
        <Text style={type.inputTitle}>Nome do Personagem</Text>
        <TextInput style={main.input}
          textContentType={"name"}
          returnKeyType={"search"}
          spellCheck={false}
          placeholder={"Buscar..."}
          value={searchInputValue}
          onEndEditing={() => { 
            setQuery(searchInputValue);
          }}
          onChangeText={(text) => {
            setSearchInputValue(text);
          }}
        />

      </View>

      <View style={main.section}>
        <Text style={type.sectionTitle}>Nome</Text>
      </View>

      <FlatList style={main.container}
        data={results}
        renderItem={({ item }) => <CharacterItem character={item}/>}
        keyExtractor={(item, index) => item.id}

        ItemSeparatorComponent={() => 
          <View style={main.separator} />
        }
      />
    </View>
  );
}