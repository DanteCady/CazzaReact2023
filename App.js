import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Other imports for screens (Login, Signup, LandlordDashboard) go here
import Login from './screens/Login';
import Signup from './screens/Signup';
import LandlordDashboard from './screens/LandlordScreens/LandlordDashboard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="LandlordDashboard" component={LandlordDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
