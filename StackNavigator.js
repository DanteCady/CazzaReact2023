import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import LandlordDashboard from './screens/LandlordScreens/LandlordDashboard';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="LandlordDashboard" component={LandlordDashboard} />
      {/* <Stack.Screen name="Tenant Dashboard" component={Dashboard} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
