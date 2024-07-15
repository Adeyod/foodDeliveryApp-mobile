import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => {
            <FontAwesome5 name="home" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
