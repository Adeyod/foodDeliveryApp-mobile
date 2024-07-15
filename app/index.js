import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Video, ResizeMode } from 'expo-av';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from 'react-native-reanimated';
import { router } from 'expo-router';

const Home = () => {
  const video = new React.useRef(null);

  setTimeout(() => {
    router.push('/auth/welcome');
  }, 8000);
  return (
    <View className="flex-1 justify-center items-center">
      <Video
        ref={video}
        source={require('../assets/foodDelivery.mp4')}
        className="absolute left-0 right-0 top-0 bottom-0"
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
      />
      <Animated.View
        className="justify-center items-center"
        entering={FadeInRight.duration(500).delay(500).springify()}
      >
        <Text className="text-4xl italic font-bold text-white">
          Feed your Inner mind,
        </Text>
      </Animated.View>

      <Animated.View
        className="justify-center items-center"
        entering={FadeInLeft.duration(500).delay(500).springify()}
      >
        <Text className="text-4xl italic font-bold text-white">
          Hassle free!
        </Text>
      </Animated.View>
    </View>
  );
};

export default Home;
