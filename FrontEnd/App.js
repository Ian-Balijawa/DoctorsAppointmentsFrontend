import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import MainNavigator from './app/navigation/MainNavigator';

import AuthContext from './app/context/authContext';

const App = () => {
  const [userToken, setUserToken] = React.useState(null);
  const [user, setUser] = React.useState(null);

  return (
    <AuthContext.Provider value={{userToken, setUserToken, user, setUser}}>
      <NavigationContainer>
        {userToken === null ? <AuthNavigator /> : <MainNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
