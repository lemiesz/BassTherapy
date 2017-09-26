import { StackNavigator } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import CheckInScreen from "./components/CheckInScreen";

const App = StackNavigator({
  Home: {screen: HomeScreen},
  CheckIn: {screen: CheckInScreen}
})

export default App;
