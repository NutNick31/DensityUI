import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// Importing Components
import PhoneInput from './Components/PhoneInput';
import Signin from './screens/Signin';
import OTP from './screens/OTP';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container} >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Signin"
      >
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="OTP" component={OTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(147, 157, 224, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Signin"
      >
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
*/