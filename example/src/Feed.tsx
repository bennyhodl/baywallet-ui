import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { mockEvents, mockMetadata } from 'example/mocks';
import { Post, Metadata } from 'components';
import { useNavigation } from '@react-navigation/native';

export const getProfile = async (pubkey: string): Promise<Metadata> => {
  return (
    (await mockMetadata.find((metadata) => metadata.pubkey === pubkey)) ??
    (mockMetadata[0] as Metadata)
  );
};

export const Feed = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            {mockEvents
              .filter((_, index) => index % 2 === 0)
              .map((event) => {
                return (
                  <Post
                    key={event.id}
                    event={event}
                    getMetadata={getProfile}
                    replyFn={() => console.log('reply')}
                    repostFn={() => console.log('repost')}
                    reactionFn={() => console.log('reaction')}
                    shareFn={() => console.log('share')}
                    // @ts-ignore
                    goToProfile={() => navigation.navigate('profile')}
                    // @ts-ignore
                    goToPost={() => navigation.navigate('post-detail')}
                  />
                );
              })}
          </View>
          <View style={{ flex: 1 }}>
            <View>
              {mockEvents
                .filter((_, index) => index % 2 === 1)
                .map((event) => {
                  return (
                    <Post
                      key={event.id}
                      event={event}
                      getMetadata={getProfile}
                      replyFn={() => console.log('reply')}
                      repostFn={() => console.log('repost')}
                      reactionFn={() => console.log('reaction')}
                      shareFn={() => console.log('share')}
                      // @ts-ignore
                      goToProfile={() => navigation.navigate('profile')}
                      // @ts-ignore
                      goToPost={() => navigation.navigate('post-detail')}
                    />
                  );
                })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
