import { StackNavigator } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import CheckInScreen from "./components/CheckInScreen";
import RewardScreen from "./components/RewardScreen";

const App = StackNavigator({
  Home: {screen: HomeScreen },
  CheckIn: {screen: CheckInScreen},
  Reward: {screen: RewardScreen }
})

export default App;
