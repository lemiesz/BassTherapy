import React, {Componet} from "react";
import { StackNavigator, TabNavigator } from "react-navigation";

import HomeScreen from "./components/HomeScreen";
import SignUp from "./components/SignUp";
import CheckInScreen from "./components/CheckInScreen";
import RewardsList from "./components/RewardsList";
import RewardScreen from "./components/RewardScreen";

export const SignedOutLayout = StackNavigator({
  SignIn: {screen: HomeScreen},
  SignUp: {screen: SignUp}
});


export const CheckInLayout = StackNavigator({
  CheckIn: {screen: CheckInScreen},
  Reward: {screen: RewardScreen}
})

export const SignedInLayout = TabNavigator({
    CheckInLayout: {screen: CheckInLayout},
    RewardsList: {screen: RewardsList},
});


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
