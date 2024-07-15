import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const Login = () => {
  return (
    <SafeAreaView className="bg-white h-[100%]">
      <ScrollView className="px-4 bg-white">
        <Text className="text-xl text-black mb-1 font-semibold">
          Login into your account
        </Text>

        <View className="flex-row">
          <Text className="text-[17px] italic">Don't have an account?</Text>
          <Link
            className="text-secondary font-bold ml-1 text-[17px] italic"
            href={'/auth/register'}
          >
            Register
          </Link>
        </View>

        <View className="gap-3 mt-3">
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
            <Link
              className="text-xl text-secondary"
              // href={'/auth/forgot-password'}
              // href={'/auth/reset-password'}
              href={'/auth/email-verification'}
            >
              Forgot Password?
            </Link>
          </View>
        </View>

        <View>
          <TouchableOpacity className=" bg-secondary rounded-lg p-3 my-5 w-[92vw]">
            <Text className="text-white text-center py-2">
              Login into your account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
