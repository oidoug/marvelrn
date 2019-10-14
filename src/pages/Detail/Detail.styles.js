import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { colors } from '../../components/Main.styles';

const { height: viewportHeight } = Dimensions.get('window');
const coverHeight = 0.6 * viewportHeight;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  cover: {
    height: coverHeight,
    width: '100%',
    resizeMode: "cover",
    backgroundColor: colors.background,
  },

  backButton: {
    position: "absolute",
    top: 54,
    left: 30,
    width: 42,
    height: 42,
    backgroundColor: colors.primary,
    borderRadius: 21,
  },
  backButtonArrow: {
    marginTop: 11.5,
    marginLeft: 12.5,
  },
});