import React, { useEffect, useState } from 'react';
import { Event } from 'nostr-tools';
import { Avatar, Icon, Text, View } from 'react-native-ui-lib';
import { Metadata } from '../types';
import { Pressable, StyleSheet } from 'react-native';
import { formatDate } from '../util';
import { Engage } from './engage/engage';

export type PostDetailProps = {
  event: Event;
  getMetadata: (pubkey: string) => Promise<Metadata>;
  replyFn: () => void;
  repostFn: () => void;
  reactionFn: () => void;
  shareFn: () => void;
  goToProfile?: () => void;
};

export const PostDetail = ({
  event,
  getMetadata,
  replyFn,
  repostFn,
  reactionFn,
  shareFn,
  goToProfile,
}: PostDetailProps) => {
  const { time, date } = formatDate(event.created_at);
  const [metadata, setMetadata] = useState<Metadata>({ pubkey: '', picture: '' });

  const getProfile = async () => {
    const profile = await getMetadata(event.pubkey);
    setMetadata(profile);
  }

  useEffect(() => {
    getProfile();
  }, [])

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
      <View row style={styles.share}>
        <Engage
          replyFn={replyFn}
          repostFn={repostFn}
          reactionFn={reactionFn}
        />
        <Pressable onPress={shareFn}>
          <Icon source={{ uri: "https://cdn.icon-icons.com/icons2/3415/PNG/512/ios_share_icon_218253.png" }} size={20} />
        </Pressable>
      </View>
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
  share: {
    justifyContent: "space-between",
    paddingRight: 20
  }
});
