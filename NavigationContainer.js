import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const NavigationContainerWrapper = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default NavigationContainerWrapper;
