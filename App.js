import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './src/views/navigators/DrawerNavigator';
import DetailsScreen from './src/views/screens/DetailsScreen';
import VetCentersScreen from './src/views/screens/VetCentersScreen';
import VetCenterDetailsScreen from './src/views/screens/VetCenterDetailsScreen';
import favourites from './src/views/screens/favourites';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <><NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
        <Stack.Screen name="HomeScreen1" component={DrawerNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="VetCentersScreen" component={VetCentersScreen} />
        <Stack.Screen name="VetCenterDetailsScreen" component={VetCenterDetailsScreen} />
        <Stack.Screen name="New" component={DrawerNavigator} />

      </Stack.Navigator>
    </NavigationContainer></>
  );
};

export default App;
