import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Screen/HomeScreen';
import ComponentScreen from './src/Screen/ComponentScreen';
import ListScreen from './src/Screen/ListScreen';
import ImageScreen from './src/Screen/ImageScreen';
import CounterScreen from './src/Screen/CounterScreen';
import ColorScreen from './src/Screen/ColorScreen';
import SquareScreen from './src/Screen/SquareScreen';
import TextScreen from './src/Screen/TextScreen';
import BoxScreen from './src/Screen/BoxScreen';
import SearchScreen from './src/Screen/SearchScreen';
import RecoveryScreen from './src/Screen/RecoveryScreen';
import RestoreScreen from './src/Screen/RestoreScreen';
import RecoveryPhraseScreen from './src/Screen/RecoveryPhraseScreen';

const navigator = createStackNavigator (
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
    Search: SearchScreen,
    Recovery: RecoveryScreen,
    Restore: RestoreScreen,
    RecoveryPhrase: RecoveryPhraseScreen,


  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions : {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);