import React from 'react';
import { View, ViewProps } from 'react-native-ui-lib';

interface RowProps extends ViewProps {
  children: React.ReactNode;
}

export const Row = ({ children }: RowProps) => {
  return (
    <View flex row>
      {children}
    </View>
  );
};
