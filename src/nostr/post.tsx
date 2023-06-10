import React, { useEffect, useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { View, Avatar, Text } from 'react-native-ui-lib';
import { Metadata } from '.';
import { Event } from 'nostr-tools';
import { TextWithClamp } from '../base';
import { Engage } from './engage/engage';

export type PostProps = {
  event: Event;
  metadata: Metadata;
  replyFn: () => void;
  repostFn: () => void;
  reactionFn: () => void;
  shareFn: () => void;
  goToProfile: () => void;
};

export const Post = ({
  event,
  metadata,
  replyFn,
  repostFn,
  reactionFn,
  shareFn,
  goToProfile,
}: PostProps) => {
  const [width, setWidth] = useState<string | undefined>('50%');
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [clamp, setClamp] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (event.content.length > 100) {
      setClamp(true);
    }
  }, []);

  useEffect(() => {
    if (!clamp) return;
    if (open) {
      setWidth(undefined);
      setHeight(undefined);
    } else {
      setWidth('50%');
    }
  }, [open]);

  return (
    <>
      <View
        width={width}
        height={height}
        backgroundColor="#FFF"
        style={styles.post}
      >
        <View right>
          <Text>•••</Text>
        </View>
        <Pressable onPress={() => setOpen(!open)}>
          <TextWithClamp
            ui={{ text70: true }}
            numberOfLines={clamp && !open ? 10 : undefined}
          >
            {event.content}
          </TextWithClamp>
        </Pressable>

        <View height={10} />
        <View row centerV spread>
          <Engage
            replyFn={replyFn}
            repostFn={repostFn}
            reactionFn={reactionFn}
            shareFn={shareFn}
          />
          <Avatar
            size={30}
            source={{ uri: metadata.picture }}
            badgePosition={metadata.nip05 ? 'TOP_RIGHT' : undefined}
            badgeProps={
              metadata.nip05
                ? {
                    backgroundColor: '#FFDF01',
                  }
                : undefined
            }
            onPress={goToProfile}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  post: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  date: {
    fontSize: 12,
    color: '#AAA',
    paddingRight: 5,
  },
  expand: {
    marginTop: 5,
    color: '#00F',
  },
});

/**
 * Possible version of `Read more` section
 * 
  {clamp && (
    <Pressable onPress={() => setOpen(!open)}>
      <Text center style={styles.expand}>
        Read more
      </Text>
    </Pressable>
  )}
*/

/**
 * Possible version of `Read more` section
 * 
  {clamp && (
    <Pressable onPress={() => setOpen(!open)}>
      <Text center style={styles.expand}>
        Read more
      </Text>
    </Pressable>
  )}
*/

// lol animation
// const expandText = () => {
//     console.log('expand', open);
//     setOpen(true);
//     Animated.timing(widthAnimation, {
//       toValue: 100,
//       duration: 200,
//       useNativeDriver: false,
//     }).start();

//     Animated.timing(heightAnimation, {
//       toValue: 500, // Replace with your desired height
//       duration: 200,
//       useNativeDriver: false,
//     }).start();
//   };

//   const closeText = () => {
//     console.log('close', open);
//     setOpen(false);
//     Animated.timing(widthAnimation, {
//       toValue: 0,
//       duration: 200,
//       useNativeDriver: false,
//     }).start();

//     Animated.timing(heightAnimation, {
//       toValue: 300, // Replace with your desired height
//       duration: 200,
//       useNativeDriver: false,
//     }).start();
//   };

//   const handleTextLayout = (event: LayoutChangeEvent) => {
//     const { height } = event.nativeEvent.layout;
//     setTextHeight(height);
//   };

//   console.log(open);
//   const Content = () => {
//     return (
//       <>
//         <Pressable
//           onPress={() => {
//             open ? closeText() : expandText();
//           }}
//         >
//           <TextWithClamp
//             ui={{ text70: true }}
//             numberOfLines={clamp && !open ? 10 : undefined}
//             onLayout={handleTextLayout}
//           >
//             {event.content}
//           </TextWithClamp>
//         </Pressable>
//         <View height={35} />
//         <View style={styles.avatar}>
//           <View row centerV>
//             <Text style={styles.date}>{time}</Text>
//             <Avatar
//               size={30}
//               source={{ uri: metadata.picture }}
//               badgePosition={metadata.nip05 ? 'TOP_RIGHT' : undefined}
//               badgeProps={
//                 metadata.nip05
//                   ? {
//                       backgroundColor: '#FFDF01',
//                     }
//                   : undefined
//               }
//             />
//           </View>
//         </View>
//       </>
//     );
//   };

//   return clamp ? (
//     <Animated.View
//       style={{
//         width: widthAnimation.interpolate({
//           inputRange: [0, 100],
//           outputRange: ['50%', '100%'],
//         }),
//         height: heightAnimation,
//         ...styles.post,
//       }}
//     >
//       <Content />
//     </Animated.View>
//   ) : (
//     <View style={styles.post} width="50%">
//       <Content />
//     </View>
//   );
