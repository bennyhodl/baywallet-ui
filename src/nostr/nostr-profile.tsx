import React from 'react';
import { Avatar, Image, View, Text, Button } from 'react-native-ui-lib';
import { Metadata } from '.';
import { StyleSheet } from 'react-native';

type NostrProfile = {
  profile: Metadata;
  accessoryLeft?: React.ReactNode;
};

export const NostrProfile = ({ profile, accessoryLeft }: NostrProfile) => {
  return (
    <>
      <Image source={{ uri: profile.banner }} width={'100%'} height={125} />
      <View row right height={50}>
        <Button   />
      </View>
      <View style={styles.avatar}>
        <Avatar size={75} source={{ uri: profile.picture }} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    position: 'absolute',
    top: 90,
    left: 20,
    borderWidth: 4,
    borderRadius: 100,
    borderColor: '#FFF',
  },
  actions: {},
});
