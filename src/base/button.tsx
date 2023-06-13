import React from 'react';
import { Button as LibButton } from 'react-native-ui-lib';

export type ButtonProps = {
  label: string
  onPress: () => any
  height?: number
  width?: number
}

export const Button = ({ label, onPress, height, width }: ButtonProps) => {
  return <LibButton label={label} onPress={onPress} style={{ width, height }} />;
}