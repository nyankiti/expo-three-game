import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect } from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
// stack navigatorのためにgesture-handlerをimportしておく
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import * as Linking from "expo-linking";
import Constants from "expo-constants";
import Licenses from "./components/Licenses";
import GameScreen from "./screens/GameScreen";
import ChallengesScreen from "./screens/AchievementScreen";
import Preferences from "./screens/PreferencesScreen";
import * as Analytics from "expo-firebase-analytics";

const AppStack = createStackNavigator();

const linking = {
  prefixes: [Linking.makeUrl()],
  config: {
    screens: {
      Game: "/",
      Licenses: "/credit",
      Report: "/report",
      Challenges: "/challenges",
      Preferences: "/settings",
      Social: {
        screens: {
          Leaderboard: "/rank",
          Profile: "/u",
        },
      },
    },
  },
};

// Gets the current screen from navigation state
const getActiveRouteName = (state) => {
  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }

  return route.name;
};

const Navigation = () => {
  const routeNameRef = useRef(null);
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  useEffect(() => {
    if (!navigationRef.current) return;
    const state = navigationRef.current.getRootState();

    // Save the initial route name
    routeNameRef.current = getActiveRouteName(state);
  }, [navigationRef]);

  useEffect(() => {
    // Analytics.setCurrentScreen("Game");
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={(state) => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);

        if (previousRouteName !== currentRouteName) {
          // The line below uses the expo-firebase-analytics tracker
          // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
          // Change this line to use another Mobile analytics SDK
          //   Analytics.setCurrentScreen(currentRouteName);
        }

        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName;
      }}
      linking={linking}
    >
      <AppStack.Navigator
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: Constants.manifest!.primaryColor,
          },
          headerTitleStyle: { color: "white" },
          cardStyle: {
            backgroundColor: "white",
          },
        }}
        initialRouteName="Game"
      >
        <AppStack.Screen
          name="Game"
          component={GameScreen}
          options={{ header: () => null }}
        />
        <AppStack.Screen
          name="Challenges"
          component={ChallengesScreen}
          options={{ presentation: "modal" }}
        />
        <AppStack.Screen
          name="Licenses"
          component={Licenses}
          options={{ presentation: "modal" }}
        />
        <AppStack.Screen
          name="Preferences"
          component={Preferences}
          options={{ presentation: "modal" }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
