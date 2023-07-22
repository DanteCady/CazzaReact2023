import React, { useState } from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import axios from 'axios';
import moment from 'moment'; // Import moment.js for date parsing and formatting
import { Octicons, Ionicons } from '@expo/vector-icons';
import {
  StyledContainer,
  InnerContainer,
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
import DateTimePicker from '@react-native-community/datetimepicker';

const { brand } = Colors;
const apiBaseUrl = 'http://192.168.17.1:5000/api'; 

function Signup() {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  const [dob, setDob] = useState(new Date());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const onSubmit = async (values) => {
    values.dateOfBirth = moment(values.dateOfBirth, ["MM/DD/YYYY", "MM/DD/YY", "YYYY/MM/DD"]).format("YYYY-MM-DD");

    try {
      const response = await axios.post(`${apiBaseUrl}/signup`, values);
      if (response.data.success) {
        showMessage({
          message: 'Account created successfully!',
          type: 'success',
        });
      } else {
        showMessage({
          message: 'Account already exists. Use a different email.',
          type: 'danger',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle>Cazza App</PageTitle>
        <SubTitle>Account Signup</SubTitle>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode='date'
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', accountType: '', dateOfBirth: ''}}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <TextInput
                label="First Name"
                icon="person"
                placeholder="First Name"
                placeholderTextColor={brand}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />
              <TextInput
                label="Last Name"
                icon="person"
                placeholder="Last Name"
                placeholderTextColor={brand}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
              <TextInput
                label="Email Address"
                icon="mail"
                placeholder="Email Address"
                placeholderTextColor={brand}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {Platform.OS === 'web' ? (
                <TextInput
                  label="Date of Birth"
                  icon="calendar"
                  placeholder="MM/DD/YYYY"
                  placeholderTextColor={brand}
                  onChangeText={handleChange('dateOfBirth')}
                  onBlur={handleBlur('dateOfBirth')}
                  value={values.dateOfBirth}
                />
              ) : (
                <TextInput
                  label="Date of Birth"
                  icon="calendar"
                  placeholder="MM/DD/YYYY"
                  placeholderTextColor={brand}
                  onChangeText={handleChange('dateOfBirth')}
                  onBlur={handleBlur('dateOfBirth')}
                  value={dob ? dob.toDateString() : ''}
                  isDate={true}
                  showDatePicker={showDatePicker}
                />
              )}
              <TextInput
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
              <TextInput
                label="Confirm Password"
                icon="key"
                placeholder="* * * * * *"
                placeholderTextColor={brand}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <View style={{ marginBottom: 10 }}>
                <StyledInputLabel>Account Type</StyledInputLabel>
                <StyledTextInput
                  as={Picker}
                  selectedValue={values.accountType}
                  onValueChange={handleChange('accountType')}
                >
                  <Picker.Item label="Select an account type" value="" />
                  <Picker.Item label="Landlord" value="Landlord" />
                  <Picker.Item label="Tenant" value="Tenant" />
                </StyledTextInput>
              </View>
              <MessageBox>...</MessageBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>SignUp</ButtonText>
              </StyledButton>
              <Line />
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
}

const TextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={brand} />
        </RightIcon>
      )}
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Signup;
