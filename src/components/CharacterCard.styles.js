import {
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  card: {
    top: -16,
    backgroundColor: "black",
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    borderWidth: 1,
    borderColor: '#2b2c2d',
    borderBottomWidth: 0,
    paddingHorizontal: 20,
  },
  cardRidge: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ridgeNodge: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: 48,
    height: 4,
    borderRadius: 3,
    backgroundColor: 'white',
    opacity: 0.1,
  },
  title: {
    marginVertical: 10,
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
  },
  tipText: {
    marginVertical: 10,
    color: "#DBE0E5",
    fontSize: 12,
    fontWeight: "normal",
  },
  detailText: {
    marginTop: 10,
    marginBottom: 50,
    color: "#fff",
    fontSize: 17,
    fontWeight: "normal",
    lineHeight: 28,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  button: {
    borderRadius: 10,
    marginRight: 16,
  },
  buttonText: {
    marginVertical: 10,
    marginHorizontal: 25,
    color: "#fff",
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonBlue: {
    backgroundColor: "#009DFF",
  },
  buttonRed: {
    backgroundColor: "#FF0000",
  }
});