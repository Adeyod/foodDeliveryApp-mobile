import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, router } from 'expo-router';

const RootNavigation = () => {
  const [session, setSession] = useState(false);

  useEffect(() => {
    if (session) {
      router.push('(tabs)');
    }
  }, [session]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="auth/welcome" />
      <Stack.Screen
        name="auth/login"
        options={{
          headerShown: true,
          title: 'Login',
        }}
      />

      <Stack.Screen
        name="auth/register"
        options={{
          headerShown: true,
          title: 'Register',
        }}
      />

      <Stack.Screen
        name="auth/forgot-password"
        options={{
          headerShown: true,
          title: 'Forgot Password',
        }}
      />

      <Stack.Screen
        name="auth/reset-password"
        options={{
          headerShown: true,
          title: 'Reset Password',
        }}
      />
    </Stack>
  );
};

export default RootNavigation;
