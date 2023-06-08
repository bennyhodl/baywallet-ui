import * as React from 'react';

import { SafeAreaView, Text } from 'react-native';
import { Row } from '@baywallet/components';

export default function App() {
  return (
    <SafeAreaView>
      <Row>
        <Text>Result</Text>
        <Text>Row</Text>
      </Row>
    </SafeAreaView>
  );
}
