import React from 'react';
import { 
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import CharacterCard from '../../components/CharacterCard';
import { styles } from './Detail.styles';
import { main } from '../../components/Main.styles';

export default function Detail(props) {

  const character = props.navigation.getParam('character');

  return (
    <View style={main.container}>

      <ScrollView style={main.container}>
        <Image 
          style={styles.cover}
          source={{uri: character.thumbnail.path+character.thumbnail.extension}}
        />
        <CharacterCard character={character}/>
      </ScrollView>

      {/* BackButton */}
      <TouchableOpacity
          activeOpacity={0.7}
          style={styles.backButton}
          onPress={() => { 
            props.navigation.goBack();
          }}
        >
          <Image 
            style={styles.backButtonArrow}
            source={require('../../assets/arrow_left.png')}
          />
        </TouchableOpacity>
    </View>
  );
};

Detail.propTypes = {
  character: PropTypes.object
}
