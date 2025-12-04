import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import ChallengersScreen from "../screens/ChallengesScreen";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    Gallery: undefined;
    Challengers: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Gallery" component={GalleryScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Challengers" component={ChallengersScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
