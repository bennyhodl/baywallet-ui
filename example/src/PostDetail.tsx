import React from "react"
import { PostDetail, Reply } from "@baywallet/components"
import { mockEvents } from "example/mocks"
import { Event } from "nostr-tools"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native"
import { getProfile } from "./Feed"

export const PostDetailPage = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <PostDetail
        event={mockEvents[1] as Event}
        getMetadata={getProfile}
        replyFn={() => console.log('reply')}
        repostFn={() => console.log('repost')}
        reactionFn={() => console.log('reaction')}
        shareFn={() => console.log('share')}
        // @ts-ignore
        goToProfile={() => navigation.navigate("profile")}
      />
      <Reply event={mockEvents[0] as Event}
        getMetadata={getProfile}
        replyFn={() => console.log('reply')}
        repostFn={() => console.log('repost')}
        reactionFn={() => console.log('reaction')}
        shareFn={() => console.log('share')}
        // @ts-ignore
        goToProfile={() => navigation.navigate("profile")} />
    </SafeAreaView>
  )
}