import * as React from 'react';
import { ThatNewNew } from './ThatNewNew';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TwitterStyle from './Twitter';
import { Test } from './Test';
import BayWalletUIProvider from '@baywallet/components';
import { theme } from './colors';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <BayWalletUIProvider colors={theme} theme="dark">
      <NavigationContainer>
        <Stack.Navigator initialRouteName="thatnewnew">
          <Stack.Screen name="test" component={Test} />
          <Stack.Screen name="twitter" component={TwitterStyle} />
          <Stack.Screen name="thatnewnew" component={ThatNewNew} />
        </Stack.Navigator>
      </NavigationContainer>
    </BayWalletUIProvider>
  );
}

export default App;
