import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Metadata, Post } from '@baywallet/components';
import { mockEvents, mockMetadata } from 'example/mocks';
import { Event } from 'nostr-tools';

export const ThatNewNew = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Post
          event={mockEvents[0] as Event}
          metadata={mockMetadata[0] as Metadata}
          replyFn={() => console.log('reply')}
          repostFn={() => console.log('repost')}
          reactionFn={() => console.log('reaction')}
          shareFn={() => console.log('share')}
          goToProfile={() => console.log('go to profile')}
        />
        <Post
          event={mockEvents[1] as Event}
          metadata={mockMetadata[1] as Metadata}
          replyFn={() => console.log('reply')}
          repostFn={() => console.log('repost')}
          reactionFn={() => console.log('reaction')}
          shareFn={() => console.log('share')}
          goToProfile={() => console.log('go to profile')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
