import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Search from './pages/Search/Search';
import Detail from './pages/Detail/Detail';

const AppStack = createStackNavigator({
  
  // Initial Screen.
  Search: { screen: Search },
  // Detail view.
  Detail: { screen: Detail },

}, {

  initialRouteName: 'Search',
  // This app doesn't implement a conventional navigation bar, it only has a back (or close) button in the Detail view (MovieScreen), so we are hidding the navbar globally.
  defaultNavigationOptions: {
    header: null,
  },
});

const Routes = createAppContainer(AppStack);
export default Routes;