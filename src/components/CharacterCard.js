import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './CharacterCard.styles';

export default function CharacterCard (props) {

  return(
    <View style={styles.card}>
      <Text style={styles.title}>{props.character.title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]}>
          <Text style={styles.buttonText}>
            Bookmark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonRed]}>
          <Text style={styles.buttonText}>
            Buy Tickets
          </Text>
        </TouchableOpacity>
      </View>
      {/* tip */}
      <Text style={styles.tipText}>{props.character.title}</Text>
      {/* description */}
      <Text style={styles.detailText}>{props.character.overview}</Text>
    </View>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object
}