import React from 'react';
import { Event } from 'nostr-tools';
import { Avatar, Icon, Text, View } from 'react-native-ui-lib';
import { Metadata } from './index';
import { Pressable, StyleSheet } from 'react-native';
import { formatDate } from '../util';
import { Engage } from './engage/engage';

export type NostrEventProps = {
  event: Event;
  metadata: Metadata;
  replyFn: () => void;
  repostFn: () => void;
  reactionFn: () => void;
  shareFn: () => void;
  goToProfile?: () => void;
};

export const NostrPost = ({
  event,
  metadata,
  replyFn,
  repostFn,
  reactionFn,
  shareFn,
  goToProfile,
}: NostrEventProps) => {
  const { time, date } = formatDate(event.created_at);
  return (
    <View style={styles.post}>
      <View row>
        <Avatar onPress={goToProfile} source={{ uri: metadata.picture }} />
        <View style={styles.information} centerV>
          <Pressable onPress={goToProfile}>
            <View row centerV>
              <Text text80BO style={styles.displayName}>
                {metadata.display_name}
              </Text>
              {metadata.nip05 && (
                <>
                  <Icon
                    source={{
                      uri:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png',
                    }}
                    size={15}
                  />
                  <Text style={styles.nip5}>
                    {metadata.nip05.split('@')[1]}
                  </Text>
                </>
              )}
            </View>
          </Pressable>
          <View row>
            <Date text={time} />
            <Date text={' • '} />
            <Date text={date} />
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <Text text70>{event.content}</Text>
      </View>
      <Engage
        replyFn={replyFn}
        repostFn={repostFn}
        reactionFn={reactionFn}
        shareFn={shareFn}
      />
    </View>
  );
};

const Date = ({ text }: { text: string }) => (
  <Text style={styles.postDate}>{text}</Text>
);

const styles = StyleSheet.create({
  post: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  information: {
    paddingLeft: 8,
  },
  postDate: {
    color: '#777',
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  nip5: {
    color: '#555',
    marginLeft: 2,
  },
  displayName: {
    paddingRight: 2,
  },
});
