import {
  TabNavigator,
} from 'react-navigation';
import CheckInScreen from "./CheckInScreen";
import RewardsList from "./RewardsList";

const TabContainer = TabNavigator({
    CheckIn: {screen: CheckInScreen},
    RewardsList: {screen: RewardsList}
});

export default TabContainer;
