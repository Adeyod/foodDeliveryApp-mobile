import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ResetPasswordScreen = () => {
  const [pins, setPins] = useState(['', '', '', '', '', '']);
  const inputRefs = [];

  console.log('Pins: ', pins.join(''));
  const handleChange = (text, index) => {
    const newPins = [...pins];
    console.log('newPins: ', newPins);
    newPins[index] = text;
    setPins(newPins);

    if (text === '' && index > 0) {
      for (let i = index; i < pins.length; i++) {
        newPins[i] = '';
      }
      setPins(newPins);
    }

    if (text.length === 1 && index < 5) {
      inputRefs[index + 1].focus();
    }

    if (text.length === 1 && index === 5) {
      return (
        <View>
          <Text>You have reached maximum length</Text>
        </View>
      );
    }
  };

  const handleBackSpace = (e, index) => {
    const text = e.nativeEvent.text;
    if (e.nativeEvent.key === 'backspace') {
      if (text === '') {
        const newPins = [...pins];
        newPins[index] = '';
        setPins(newPins);
      }

      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="flex-1 mt-[-100px] justify-center items-center bg-gray-300">
      <View className="flex">
        <View className="my-4">
          <Text className="text-primary font-bold text-[15px] mb-1 uppercase italic">
            New Password
          </Text>
          <TextInput
            className="border rounded-lg border-secondary w-[80vw] p-3"
            placeholder="Enter new password"
            secureTextEntry
          />
        </View>

        <View className="my-4">
          <Text className="text-primary font-bold text-[15px] mb-1 uppercase italic">
            Confirm New Password
          </Text>
          <TextInput
            className="border rounded-lg border-secondary w-[80vw] p-3"
            placeholder="Confirm new password"
            secureTextEntry
          />
        </View>

        <View className="my-4">
          <Text className="text-primary font-bold text-[15px] mb-1 uppercase italic">
            Password reset pin
          </Text>
          <View className="flex flex-row">
            {pins.map((pin, index) => (
              <TextInput
                value={pin}
                key={index}
                ref={(ref) => (inputRefs[index] = ref)}
                onChangeText={(text) => handleChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={(e) => handleBackSpace(e, index)}
                className="border rounded-lg border-secondary w-[50px] h-[60px] mx-[1px] p-3"
              />
            ))}
          </View>
        </View>

        <View className="">
          <TouchableOpacity className="bg-secondary w-[80vw] rounded-lg">
            <Text className="text-2xl text-center py-3 text-white">Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
