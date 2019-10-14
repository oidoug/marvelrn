import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import { styles } from './CharacterCard.styles';

export default function CharacterCard (props) {

  return(
    <View style={styles.card}>
      <Text style={styles.title}>{props.character.name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]}>
          <Text style={styles.buttonText}>
            Favoritar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonRed]}>
          <Text style={styles.buttonText}>
            Assistir
          </Text>
        </TouchableOpacity>
      </View>
      {/* tip */}
      <Text style={styles.tipText}>Editado em {moment(props.character.modified).format("DD / MM / YYYY")}</Text>
      {/* description */}
      <Text style={styles.detailText}>{props.character.description}</Text>
    </View>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object
}