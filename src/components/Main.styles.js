import {
  StyleSheet,
} from 'react-native';

export const colors = {
  primary: "#D42026",
  background: "#FFFFFF",
  border: "#A5A5A5",
  sectionTitle: "#FFFFFF",
  paragraph: "#4E4E4E",
}

export const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  center: {
    justifyContent: 'center',
  },
  input: {
    height: 31,
    width: '100%',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    backgroundColor: colors.background,
  },
  section: {
    backgroundColor: colors.primary,

    paddingVertical: 10,
    paddingHorizontal: 110,
  },
  separator: {
    height: 1,
    marginLeft: 3,
    backgroundColor: colors.primary,
  }
});

export const type = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: "Roboto-Black",
    textTransform: "uppercase",
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Roboto-Light",
    textTransform: "uppercase",
    color: colors.primary,
  },
  inputTitle: {
    paddingTop: 12,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.primary,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.sectionTitle,
  },
  cellText: {
    textAlignVertical: 'center',
    justifyContent: 'center', 
    fontSize: 21,
    fontFamily: "Roboto-Regular",
    color: colors.paragraph,
    textAlignVertical: "center",
    flex: 1,
  },
});