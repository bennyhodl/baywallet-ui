import React from "react"
import { Metadata, NostrPost } from "@baywallet/components"
import { mockEvents, mockMetadata } from "example/mocks"
import { Event } from "nostr-tools"
import { useNavigation } from "@react-navigation/native"

export const PostDetail = () => {
  const navigation = useNavigation()
  return (
    <NostrPost
      event={mockEvents[1] as Event}
      metadata={mockMetadata[1] as Metadata}
      replyFn={() => console.log('reply')}
      repostFn={() => console.log('repost')}
      reactionFn={() => console.log('reaction')}
      shareFn={() => console.log('share')}
      // @ts-ignore
      goToProfile={() => navigation.navigate("profile")}
    />
  )
}