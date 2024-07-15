import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const EmailVerification = () => {
  const [pins, setPins] = useState(['', '', '', '', '', '']);
  const InputRef = [];

  console.log(pins.join(''));

  const handleChange = (text, index) => {
    const newPins = [...pins];
    newPins[index] = text;
    setPins(newPins);

    if (text > 0 && index < 5) {
      InputRef[index + 1].focus();
    }
  };

  const handleBackSpace = (e, index) => {
    const text = e.nativeEvent.text;

    if (e.nativeEvent.key === 'Backspace') {
      if (text === '') {
        const newPins = [...pins];
        newPins[index] = '';
        setPins(newPins);
      } else if (index > 0) {
        InputRef[index - 1].focus();
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 mt-[-100px] justify-center items-center bg-gray-300">
      <View className="flex">
        <View className="my-4">
          <Text className="text-primary font-bold text-[15px] mb-1 uppercase italic">
            Email verification pin
          </Text>
          <View className="flex flex-row">
            {pins.map((pin, index) => (
              <TextInput
                className="border border-secondary px-4 h-[60px] mx-[1px] w-[50px]"
                key={index}
                value={pin}
                maxLength={1}
                ref={(ref) => (InputRef[index] = ref)}
                keyboardType="numeric"
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleBackSpace(e, index)}
              />
            ))}
          </View>
        </View>

        <View className="">
          <TouchableOpacity className="bg-secondary w-[80vw] rounded-lg">
            <Text className="text-2xl text-center py-3 text-white">
              Verify Email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailVerification;
