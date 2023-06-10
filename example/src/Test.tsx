import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-ui-lib';

export function Test() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {/** @ts-ignore*/}
      <Button label="Twitter" onPress={() => navigation.navigate('twitter')} />
      <Button
        label="That New New"
        // @ts-ignore
        onPress={() => navigation.navigate('thatnewnew')}
      />
    </SafeAreaView>
  );
}
