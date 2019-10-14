import {
  StyleSheet
} from 'react-native';

import { colors } from './Main.styles';

export const styles = StyleSheet.create({
  paginator: {
    backgroundColor: colors.background,
    maxHeight: 74,
    marginTop: 18,
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
  jumpButtom: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jumpButtomDisabled: {
    opacity: 0.3,
  },
  pageButtonList: {
    backgroundColor: colors.background,
    maxHeight: 74,
    marginHorizontal: 30,
  },
  pageButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    marginHorizontal: 10,
    backgroundColor: colors.background,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  pageButtonSelected: {
    backgroundColor: colors.primary,
  },
  jumpButtomImage: {
    width: 16,
    height: 16,
  },
  jumpButtomImageLeft: {
    transform: [
      {rotateY: '180deg'}
    ]
  },
  footer: {
    height: 12,
    width: '100%',
    backgroundColor: colors.primary,
  }
});