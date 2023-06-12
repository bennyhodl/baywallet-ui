import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { mockEvents, mockMetadata } from 'example/mocks';
import { Post, Metadata } from '@baywallet/components';
import { useNavigation } from '@react-navigation/native';

export const Feed = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            {mockEvents
              .filter((_, index) => index % 2 === 0)
              .map((event, index) => {
                return <Post key={event.id} event={event} metadata={mockMetadata[index] as Metadata} replyFn={() => console.log('reply')}
                  repostFn={() => console.log('repost')}
                  reactionFn={() => console.log('reaction')}
                  shareFn={() => console.log('share')}
                  // @ts-ignore
                  goToProfile={() => navigation.navigate("profile")}
                  // @ts-ignore
                  goToPost={() => navigation.navigate("post-detail")}
                />
              })}
          </View>
          <View style={{ flex: 1 }}>
            <View>
              {mockEvents
                .filter((_, index) => index % 2 === 1)
                .map((event, index) => {
                  return <Post key={event.id} event={event} metadata={mockMetadata[index + 1] as Metadata} replyFn={() => console.log('reply')}
                    repostFn={() => console.log('repost')}
                    reactionFn={() => console.log('reaction')}
                    shareFn={() => console.log('share')}
                    // @ts-ignore
                    goToProfile={() => navigation.navigate("profile")}
                    // @ts-ignore
                    goToPost={() => navigation.navigate("post-detail")}
                  />
                })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
