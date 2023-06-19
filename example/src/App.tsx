import * as React from 'react';
import { Feed } from './Feed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Test } from './Test';
import BayWalletUIProvider from 'components';
import { theme } from './colors';
import { PostDetailPage } from './PostDetail';
import { Profile } from './Profile';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <BayWalletUIProvider colors={theme} theme="dark">
      <NavigationContainer>
        <Stack.Navigator initialRouteName="thatnewnew">
          <Stack.Screen
            name="test"
            options={{ headerShown: false }}
            component={Test}
          />
          <Stack.Screen
            name="feed"
            options={{ headerShown: false }}
            component={Feed}
          />
          <Stack.Screen
            name="post-detail"
            options={{ headerShown: false }}
            component={PostDetailPage}
          />
          <Stack.Screen
            name="profile"
            options={{ headerShown: false }}
            component={Profile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BayWalletUIProvider>
  );
}

export default App;
