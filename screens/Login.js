import React, { useState, useEffect } from 'react';
import { StatusBar, View, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import { Formik } from 'formik';
import { Octicons, Ionicons } from '@expo/vector-icons';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageBackground,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  StyledInputLabel,
  StyledTextInput,
  MessageBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from '../Components/styles';

// Colors
const { brand } = Colors;

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    checkBiometricAvailability();
  }, []);

  const checkBiometricAvailability = async () => {
    try {
      const hasBiometrics = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      setIsBiometricAvailable(hasBiometrics && isEnrolled);
    } catch (error) {
      console.log('Biometric availability check error:', error);
    }
  };

  const handleBiometricAuthentication = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        fallbackLabel: 'Enter passcode',
        promptMessage: 'Authenticate using Biometrics',
      });

      if (result.success) {
        console.log('Biometric authentication successful');
        // Perform login here
      } else {
        console.log('Biometric authentication failed');
      }
    } catch (error) {
      console.log('Biometric authentication error:', error);
    }
  };

  const renderBiometricButton = () => {
    if (Platform.OS === 'android') {
      return (
        <StyledButton onPress={handleBiometricAuthentication}>
          <ButtonText>Login with Biometric</ButtonText>
        </StyledButton>
      );
    } else if (Platform.OS === 'ios' && isBiometricAvailable) {
      return (
        <StyledButton onPress={handleBiometricAuthentication}>
          <ButtonText>Login with Face/Touch ID</ButtonText>
        </StyledButton>
      );
    }

    return null;
  };

  return (
    <StyledContainer>
      <StatusBar style="brand" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/Img/Cazza_Logo_transparent.png')} />
        <PageTitle>Cazza App</PageTitle>
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <StyledTextInput
                label="Email Address"
                icon="mail"
                placeholder="Email here"
                placeholderTextColor={brand}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <StyledTextInput
                label="Password"
                icon="key"
                placeholder="* * * * * *"
                placeholderTextColor={brand}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MessageBox>...</MessageBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              {renderBiometricButton()}
              <Line />
              <ExtraView>
                <ExtraText>Don't have an account already?</ExtraText>
                <TextLink>
                  <TextLinkContent onPress={() => navigation.navigate('Signup')}>Signup</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Login;
