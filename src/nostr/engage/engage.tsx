import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';
import { Reply } from './reply';
import { Repost } from './repost';
import { Reaction } from './reaction';
// import { Share } from './share';

export type EngageProps = {
  replyFn: () => void;
  repostFn: () => void;
  reactionFn: () => void;
  shareFn: () => void;
};

export const Engage = ({
  replyFn,
  repostFn,
  reactionFn,
}: // shareFn,
EngageProps) => {
  return (
    <View row space-between style={styles.bar}>
      <Reply engage={replyFn} />
      <Repost engage={repostFn} />
      <Reaction engage={reactionFn} />
      {/* <Share engage={shareFn} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    width: '75%',
    display: 'flex',
    justifyContent: 'space-around',
    paddingHorizontal: 0,
  },
});
