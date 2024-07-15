import {
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneInput from 'react-native-phone-number-input';
// import PhoneInput from 'react-native-phone-input';

LogBox.ignoreLogs([
  'CountryItem: Support for defaultProps will be removed from function components in a future major release.',
  'CountryModal: Support for defaultProps will be removed from function components in a future major release.',
  'Warning: CountryModal: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
]);

const RegisterScreen = () => {
  const [value, setValue] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [formData, setFormData] = useState({
    phoneNumber: '',
    emailAddress: '',
    firstName: '',
    LastName: '',
  });

  console.log('phoneNumber: ' + phoneNumber);
  console.log('value: ' + value);

  return (
    <SafeAreaView className="bg-white h-[100%]">
      <ScrollView className="px-4 bg-white">
        <Text className="text-xl text-black mb-1 font-semibold">
          Create your account
        </Text>

        <View className="flex-row">
          <Text className="text-[17px] italic">Have an account?</Text>
          <Link
            className="text-secondary font-bold ml-1 text-[17px] italic"
            href={'/auth/login'}
          >
            Login
          </Link>
        </View>

        <View className="gap-3 mt-3">
          <View>
            <Text>Phone number</Text>
            <PhoneInput
              // defaultValue={phoneNumber}
              value={phoneNumber}
              withShadow
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setPhoneNumber(text);
              }}
              autoFocus
              initialCountry="Us"
              defaultCode="US"
              placeholder="12345678"
              containerStyle={{
                width: '90vw',
                borderColor: 'red',
                border: '1px solid red',
              }}
              // offset={10}
              // pickerItemStyle={{
              //   justifyContent: 'center',
              //   alignItems: 'center',
              //   height: '80%',
              //   marginBottom: '50%',
              // }}
              autoFormat
            />
          </View>

          <View>
            <Text className="text-[15px] text-black mb-1 font-semibold">
              Email Address
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 w-[92vw]"
              placeholder="example@email.com"
              keyboardType="email-address"
            />
          </View>

          <View className="flex-row items-center justify-between">
            <View className="text-[15px] text-black mb-1 font-semibold">
              <Text className="text-[15px] text-black mb-1 font-semibold">
                First name
              </Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-3 w-[42vw]"
                placeholder="enter first name"
              />
            </View>

            <View>
              <Text className="text-[15px] text-black mb-1 font-semibold">
                Last name
              </Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-3 w-[42vw]"
                placeholder="enter last name"
              />
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <View className="text-[15px] text-black mb-1 font-semibold">
              <Text className="text-[15px] text-black mb-1 font-semibold">
                Username
              </Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-3 w-[42vw]"
                placeholder="enter user name"
              />
            </View>

            <View>
              <Text className="text-[15px] text-black mb-1 font-semibold">
                Referral
              </Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-3 w-[42vw]"
                placeholder="enter referral code"
              />
            </View>
          </View>

          <View>
            <Text>Password</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 w-[92vw]"
              placeholder="enter password"
              secureTextEntry
              keyboardType="password"
            />
          </View>

          <View>
            <Text>Confirm Password</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 w-[92vw]"
              placeholder="confirm password"
              secureTextEntry
              keyboardType="password"
            />
          </View>
        </View>

        <View>
          <TouchableOpacity className=" bg-secondary rounded-lg p-3 my-5 w-[92vw]">
            <Text className="text-white text-center py-2">
              Create your account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
