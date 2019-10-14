import React from 'react';
import {
  TouchableOpacity, Text, Image
} from 'react-native';
import { withNavigation } from 'react-navigation';

import { type } from './Main.styles';
import { styles } from './CharacterItem.styles';


function CharaterItem(props) {
  const { character } = props;
  return (
    <TouchableOpacity style={styles.cellContainer}
      activeOpacity={0.3}
      onPress={()=> {
        props.navigation.navigate('Detail', { character });
      }}
    >
      <Image style={styles.avatar}
        source={{uri: character.thumbnail.path+"/standard_fantastic."+character.thumbnail.extension}}
      />
      <Text style={type.cellText}>{character.name}</Text>
    </TouchableOpacity>
  );
};

// withNavigation provide the navigation context to this item.
export default withNavigation(CharaterItem);