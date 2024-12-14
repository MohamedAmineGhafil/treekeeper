// useColorScheme.ts
import { useState, useEffect } from 'react';
import { useColorScheme as useNativeColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useColorScheme = () => {
  const deviceTheme = useNativeColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    loadStoredTheme();
  }, []);

  const loadStoredTheme = async () => {
    try {
      const theme = await AsyncStorage.getItem('@theme');
      if (theme !== null) {
        setIsDarkMode(theme === 'dark');
      }
    } catch (error) {
      console.log('Error loading theme:', error);
    }
  };

  const toggleTheme = async () => {
    try {
      const newTheme = !isDarkMode;
      await AsyncStorage.setItem('@theme', newTheme ? 'dark' : 'light');
      setIsDarkMode(newTheme);
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  };

  return { isDarkMode, toggleTheme };
};