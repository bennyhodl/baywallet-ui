import * as React from 'react';
import { mockEvents, mockMetadata } from 'example/mocks';
import { SafeAreaView, ScrollView } from 'react-native';
import { Metadata, NostrPost, NostrProfile } from '@baywallet/components';
import { Event } from 'nostr-tools';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <NostrProfile profile={mockMetadata[0] as Metadata} />
        <NostrPost
          event={mockEvents[0] as Event}
          metadata={mockMetadata[0] as Metadata}
          replyFn={() => console.log('reply')}
          repostFn={() => console.log('repost')}
          reactionFn={() => console.log('reaction')}
          shareFn={() => console.log('share')}
        />
        <NostrPost
          event={mockEvents[1] as Event}
          metadata={mockMetadata[1] as Metadata}
          replyFn={() => console.log('reply')}
          repostFn={() => console.log('repost')}
          reactionFn={() => console.log('reaction')}
          shareFn={() => console.log('share')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
