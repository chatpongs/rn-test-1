import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from 'react-navigation';

import Login from './screens/Login';
import Home from './screens/Home';
import Detail from './screens/Detail';

const RootStack = createStackNavigator(
  {
    Login,
    Home,
    Detail,
  }, {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    );
  }
}