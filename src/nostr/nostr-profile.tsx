import React from 'react';
import { Avatar, Image, View, Text, Icon } from 'react-native-ui-lib';
import { Metadata } from '../types';
import { StyleSheet } from 'react-native';
import { Button } from '../base/button';

type NostrProfile = {
  profile: Metadata;
  follow: () => void
  followers: number
  following: number
  relays: number
};

export const NostrProfile = ({ profile, follow, followers, following, relays }: NostrProfile) => {
  return (
    <>
      <Image source={{ uri: profile.banner }} width={'100%'} height={125} />
      <View row right style={styles.action}>
        <Button label='Follow' onPress={follow} width={100} height={40} />
      </View>
      <View style={styles.avatar}>
        <Avatar size={75} source={{ uri: profile.picture }} />
      </View>
      <View style={styles.content}>
        <View row centerV>
          <Text text60R>{profile.name}</Text>
          {profile.nip05 && (
            <>
              <Icon
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png',
                }}
                size={15}
              />
              <Text style={styles.nip5}>
                {profile.nip05.split('@')[1]}
              </Text>
            </>
          )}
        </View>
        <Text style={styles.username}>@{profile.username}</Text>
        <Text text70>{profile.about}</Text>
        <View row style={styles.stats}>
          <Text>{following} Following</Text>
          <Text>{followers} Followers</Text>
          <Text>{relays} Relays</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    position: 'absolute',
    top: 90,
    left: 10,
    borderWidth: 4,
    borderRadius: 100,
    borderColor: '#FFF',
  },
  action: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  nip5: {
    color: '#555',
    marginLeft: 2,
  },
  content: {
    paddingLeft: 10,
  },
  stats: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  username: {
    color: '#555',
  }
});
