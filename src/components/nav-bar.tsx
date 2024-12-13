import React from 'react';
import { View } from 'react-native';
import ThemeToggle from './theme-toggle';
import { Text } from './ui/text';

const NavBar = () => {
  return (
    <View role='navigation' className='flex flex-row items-center justify-between gap-2 p-2'>
      <Text className='text-xl'>React Native Reusables Test</Text>
      <ThemeToggle />
    </View>
  );
};

export default NavBar;
