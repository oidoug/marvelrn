import React, { useState, useEffect } from 'react';
import {
  View, 
  FlatList, 
  Text, 
  TextInput, 
  ActivityIndicator,
  Image,
} from 'react-native';

import CharacterItem from '../../components/CharacterItem';

import { main, type } from '../../components/Main.styles';
import { styles } from './Search.styles';

import { getCharacters } from '../../services/CharactersRequest';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

/**
 * Itens per request limit.
 * 
 * The project specification requested to keep the limit to 4, but that way it doesn't even fill the screen with itens. 
 * To improve the UX, I'm asking for just one more.
 */
const api_limit = 5;

export default function Search() {

  const [searchInputValue, setSearchInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState([]);

  // Resolves a new query.
  useEffect(() => {
    fetchData();
  }, [query, page]);

  function fetchData() {
    let params = {
      limit: api_limit,
      offset: page * api_limit,
      orderBy: '-modified',
    };
    query.length > 0 ? params.nameStartsWith = query : null;
    
    getCharacters(params, (data) => {
      // Save characters array as results.
      setResults(data.results);
      
      // Creating array to be used by paginator.
      const lenght = Math.ceil(data.total / api_limit);
      const paginatorItens = [];
      for (let i = 0; i < lenght; i++) {
        paginatorItens.push({key: `${i}`});
      }
      setTotalPages(paginatorItens);
    });
  }

  return (
    <View style={[main.container, main.safe]}>
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
        keyExtractor={(item, index) => `${item.id}`}

        ItemSeparatorComponent={() => 
          <View style={main.separator} />
        }

        ListEmptyComponent={() =>
          <View style={main.loading}>
            <ActivityIndicator size="large" color="red" />
          </View>
        }
      />

      <View style={styles.paginator}>

        {/* Left press */}
        <TouchableOpacity 
          style={[
            styles.jumpButtom,
            page <= 1 ? styles.jumpButtomDisabled : null
          ]}
          activeOpacity={0.3}
          onPress={() => {
            page > 0 ? setPage(page-1) : null;
          }}
        >
          <Image style={[styles.jumpButtomImage, styles.jumpButtomImageLeft]} source={require('../../assets/arrow_right.png')} />
        </TouchableOpacity>

        {/* Paging buttons */}
        <FlatList style={styles.pageButtonList}
          data={totalPages}
          horizontal={true}
          keyExtractor={(item, index) => {`${index}`}}
          renderItem={({item, index}) => {
            return(
              <TouchableOpacity 
                style={[ 
                  styles.pageButton, 
                  index === page ? styles.pageButtonSelected : null
                ]}
                activeOpacity={0.3}
                onPress={() => {
                  setPage(index);
                }}
              >
                <Text 
                  style={[
                    type.pageButtonText,
                    index === page ? type.pageButtonTextSelected : null
                  ]}
                >
                  {`${index + 1}`}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* Right press */}
        <TouchableOpacity 
          style={[
            styles.jumpButtom,
            page >= totalPages.length ? styles.jumpButtomDisabled : null
          ]}
          activeOpacity={0.3}
          onPress={() => {
            page < totalPages.length ? setPage(page+1) : null;
          }}
        >
          <Image style={[styles.jumpButtomImage]} source={require('../../assets/arrow_right.png')} />
        </TouchableOpacity>

      </View>
      <View style={styles.footer} />

    </View>
  );
}