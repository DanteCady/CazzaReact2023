import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native';


// const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
    primary: '#ffffff',
    secondary: '#E5E7EB',
    tertiary: '#5dd9d3',
    darklight: '#bccae0',
    brand: '#43ecf5',
    green: '#40ff72',
    navItems: '#4A4A4A'
};

const { primary, secondary, tertiary, darklight, brand, green, navItems } = Colors;

export const StyledContainer = styled.View`
flex: 1;
padding: 25px;
background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex:1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 75px;
    height: 75px;
    margin-top: 40px;

`;

export const PageBackground = styled.Image`
    width: 500px;
    height: 800px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    textAlign: center;
    color: ${green};
    padding: 10px;
`;
export const SubTitle = styled.Text`
    font-size: 12px;
    margin-bottom: 20px;
    letter-spacing: 8px;
    font-weight: bold;
    color: ${tertiary};
`;
export const StyledFormArea = styled.View`
    width: 90%
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

const CustomDropdown = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.tertiary};
`;
const DropdownLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const DropdownPicker = styled.Picker`
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    textAlign: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;
export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color:${primary}
    font-size: 16px;
`;

export const MessageBox = styled.Text`
    textAlign: center;
    font-size: 13px;
`;
export const Line = styled.View`
   height: 1px;
   width: 100%;
   background-color: ${green};
   margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
     justify-content: center;
     align-items: center;
     font-size: 15px;
     color: #d9dadb;
     margin-right: 5px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items:center;
`;

export const TextLinkContent = styled.Text`
    justify-content: center;
    align-items:center;color: ${tertiary}
`;

// export const DropdownMenu = styled.Dropdown`
//    background-color: ${secondary};
//     padding: 15px;
//     padding-left: 55px;
//     padding-right: 55px;
//     border-radius: 5px;
//     font-size: 16px;
//     height: 60px;
//     margin-vertical: 3px;
//     margin-bottom: 10px;
//     color: ${tertiary};
// `

export const DockContainer = styled.View`
    justify-content: center;
    flex-direction: row;
    width: 100%;
    background-color: grey;
`;