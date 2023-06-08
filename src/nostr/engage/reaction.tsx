import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { View, Icon, Text } from 'react-native-ui-lib';

type ReactionProps = {
  engage: () => void;
  reactions?: number;
};
export const Reaction = ({ engage, reactions }: ReactionProps) => {
  return (
    <Pressable onPress={() => engage()}>
      <View row centerV>
        <Icon
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/640px-Bitcoin.svg.png',
          }}
          size={25}
        />
        <Text style={styles.reactions}>{reactions ?? ''}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  reactions: {
    paddingLeft: 5,
    color: '#888',
  },
});
