import React from 'react';
import { NavigationContainer } from 'react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Component/Login'
import Signup from './src/Component/Signup'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
