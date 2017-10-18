import React, {Componet} from "react";
import { StackNavigator, TabNavigator} from "react-navigation";
import { Platform, StatusBar } from "react-native";

import HomeScreen from "./components/HomeScreen";
import SignUp from "./components/SignUp";
import CheckInScreen from "./components/CheckInScreen";
import RewardsList from "./components/RewardsList";
import RewardScreen from "./components/RewardScreen";
import Settings from "./components/Settings";


export const SignedOutLayout = StackNavigator(
  {
    SignIn: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Sign In",
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: "Sign Up",
      }
    }
});

const navigationOptions = Platform.OS == "android" ? {title: "CheckIn", header: null} : {title: "CheckIn"};

export const CheckInLayout = StackNavigator(
  {
    CheckIn: {
      screen: CheckInScreen,
      navigationOptions
    },
    Reward: {
      screen: RewardScreen,
      navigationOptions: {
        title: "New Reward",
      }
    }
  },
  {
    headerMode: "screen"
  }
)

export const SignedInLayout = TabNavigator(
  {
    CheckInLayout: {
      screen: CheckInLayout,
      navigationOptions: {
        tabBarLabel: "Check In"
      }
    },
    RewardsList: {
      screen: RewardsList,
      navigationOptions: {
        tabBarLabel: "My Rewards"
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: "Settings"
      }
    }
  }
);


export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {screen: SignedInLayout},
      SignedOut: {screen: SignedOutLayout}
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  )
}
