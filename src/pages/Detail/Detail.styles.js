import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height: viewportHeight } = Dimensions.get('window');
const coverHeight = 0.6 * viewportHeight;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
  },
  cover: { 
    height: coverHeight,
    width: '100%',
    resizeMode: "cover",
    backgroundColor: "black",
  },

  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 42,
    height: 42,
    backgroundColor: 'black',
    borderRadius: 21,
  },
  backButtonArrow: {
    marginTop: 11.5,
    marginLeft: 12.5,
  },
});