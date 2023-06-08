import React from 'react';
import { ViewProps } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

interface RowProps extends ViewProps {
  width?: number;
  children: React.ReactNode;
}

export const Row = (props: RowProps) => {
  const styles = StyleSheet.create({
    row: {
      display: 'flex',
      flexDirection: 'row',
      width: props.width ?? 100,
    },
  });

  return (
    <View style={styles.row} {...props}>
      {props.children}
    </View>
  );
};
