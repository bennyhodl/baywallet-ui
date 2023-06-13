import React from "react"
import { StyleSheet } from "react-native"
import { View } from "react-native-ui-lib"
import { PostDetail, PostDetailProps } from "./post-detail"
import { getProfile } from "example/src/Feed"

export const Reply = ({ event }: PostDetailProps) => {
  return (
    <View row>
      <View style={styles.bar} />
      <View style={styles.reply}>
        <PostDetail event={event}
          getMetadata={getProfile}
          replyFn={() => console.log('reply')}
          repostFn={() => console.log('repost')}
          reactionFn={() => console.log('reaction')}
          shareFn={() => console.log('share')}
          // @ts-ignore
          goToProfile={() => navigation.navigate("profile")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    width: 20,
    borderRightWidth: 1,
    borderRightColor: "#CCC"
  },
  reply: {
    paddingLeft: 10
  }
})