import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { Link } from 'expo-router';

const WelcomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-stretch h-full items-center bg-primary">
      <View className="mt-16">
        <Text className="text-5xl text-center italic text-white">Welcome</Text>
        <View>
          <LottieView
            className="h-[60vh] w-[70vw]"
            source={require('../../assets/Animation - 1720539023652.json')}
            autoPlay
            loop
          />
        </View>
        <Text className="text-2xl text-center italic text-white mb-[50px]">
          {' '}
          Deliciousness Delivered Fast!!!!
        </Text>

        <View className="flex-row justify-around">
          <Link
            href={'/auth/register'}
            className="bg-white p-3 text-xl text-primary font-bold rounded-lg"
          >
            Register
          </Link>
          <Link
            href={'/auth/login'}
            className="bg-white p-3 text-xl text-primary font-bold rounded-lg"
          >
            Login
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
