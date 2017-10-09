import React, {Componet} from "react";
import { StackNavigator, TabNavigator } from "react-navigation";

import HomeScreen from "./components/HomeScreen";
import SignUp from "./components/SignUp";
import CheckInScreen from "./components/CheckInScreen";
import RewardsList from "./components/RewardsList";

export const SignedOutLayout = StackNavigator({
  SignIn: {screen: HomeScreen},
  SignUp: {screen: SignUp}
});

export const SignedInLayout = TabNavigator({
    CheckIn: {screen: CheckInScreen},
    RewardsList: {screen: RewardsList}
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
