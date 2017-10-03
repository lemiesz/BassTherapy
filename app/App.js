import { StackNavigator } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import CheckInScreen from "./components/CheckInScreen";
import RewardScreen from "./components/RewardScreen";
import TabContainer from "./components/TabContainer";

const App = StackNavigator({
  Home: {screen: HomeScreen},
  TabContainer: {screen: TabContainer},
  CheckIn: {screen: CheckInScreen},
  Reward: {screen: RewardScreen }
})

export default App;
