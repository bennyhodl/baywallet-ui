import * as React from 'react';
import { ThatNewNew } from './ThatNewNew';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TwitterStyle from './Twitter';
import { Test } from './Test';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="test" component={Test} />
        <Stack.Screen name="twitter" component={TwitterStyle} />
        <Stack.Screen name="thatnewnew" component={ThatNewNew} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
