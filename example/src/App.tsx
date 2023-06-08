import * as React from 'react';
import { mockEvents, mockMetadata } from 'example/mocks';
import { SafeAreaView } from 'react-native';
import { Metadata, NostrPost } from '@baywallet/components';
import { Event } from 'nostr-tools';

export default function App() {
  return (
    <SafeAreaView>
      <NostrPost
        event={mockEvents[0] as Event}
        metadata={mockMetadata[0] as Metadata}
      />
      <NostrPost
        event={mockEvents[1] as Event}
        metadata={mockMetadata[1] as Metadata}
      />
    </SafeAreaView>
  );
}
