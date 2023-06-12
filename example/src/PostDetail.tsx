import React from "react"
import { Metadata, PostDetail } from "@baywallet/components"
import { mockEvents, mockMetadata } from "example/mocks"
import { Event } from "nostr-tools"
import { useNavigation } from "@react-navigation/native"

export const PostDetailPage = () => {
  const navigation = useNavigation()
  return (
    <PostDetail
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