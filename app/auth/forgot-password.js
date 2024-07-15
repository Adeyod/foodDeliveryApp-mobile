import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const ForgotPassword = () => {
  return (
    <SafeAreaView className="flex-1 mt-[-80px] justify-center items-center bg-gray-300">
      <View className="flex">
        <View className="my-4">
          <Text className="text-primary font-bold text-[15px] mb-1 uppercase italic">
            Email Address
          </Text>
          <TextInput
            className="border rounded-lg border-secondary w-[80vw] p-3"
            placeholder="Enter your email address..."
            keyboardType="email-address"
          />
        </View>

        <View className="">
          <TouchableOpacity className="bg-secondary w-[80vw] rounded-full">
            <Text className="text-2xl text-center py-3 text-white">Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
