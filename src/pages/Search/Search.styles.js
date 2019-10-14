import {
  StyleSheet,
} from 'react-native';

import { colors } from '../../components/Main.styles';

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  divisor: {
    width: 54,
    height: 2,
    backgroundColor: colors.primary,
    marginTop: 5,
  },
});