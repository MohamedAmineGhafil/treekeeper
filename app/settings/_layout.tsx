import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="about" />
      <Stack.Screen name="contact" />
      <Stack.Screen name="help" />
      <Stack.Screen name="language" />
      <Stack.Screen name="location" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="privacy" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
