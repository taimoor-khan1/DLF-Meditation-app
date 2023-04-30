import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  STYLES,
  SIZES,
  height,
  width,
} from '../constants';
import CircularImage from './CircularImage';

import Row from './Row';
import LinearGradient from 'react-native-linear-gradient';
import Icon, {IconType} from './Icons';
import GradientView from './GradientView';
import MyTouchableOpacity from './MyTouchableOpacity';

const NotificationsComponant = props => {
  const [cardshadow, setcardshadow] = useState(true);
  const [backgroundShadow, setBackgroundShadow] = useState(false);
  // console.log("propsss dataaaa", props.data);
  const leftSwipe = (progress, dragX) => {
    return (
      <LinearGradient
        start={{x: 0, y: 2}}
        end={{x: 5, y: 1}}
        colors={['#FCF6BA', COLORS.primary, '#BF953F']}
        style={styles.deletButton}>
        <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.7}>
          <Icon
            type={IconType.Ionicons}
            name="ios-trash-outline"
            style={{
              color: COLORS.black,
              alignSelf: 'center',
              fontSize: SIZES.twentyFive,
            }}
          />
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  return (
    <View>
      <Swipeable
        renderRightActions={leftSwipe}
        childrenContainerStyle={{}}
        containerStyle={{
          position: 'relative',
          overflow: 'scroll',
          paddingVertical: SIZES.ten,
          borderRadius: SIZES.fifteen,
        }}
        onSwipeableWillClose={() => {
          setcardshadow(true);
        }}
        onSwipeableRightWillOpen={() => {
          setcardshadow(false);
        }}>
        <View style={[cardshadow ? styles.card : styles.shadow, {}]}>
          <MyTouchableOpacity
            onPressIn={() => {
              setBackgroundShadow(props.data?.name);
            }}
            onPressOut={() => {
              setBackgroundShadow('');
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: COLORS.brownGray,
              paddingVertical: SIZES.ten,
              backgroundColor:
                backgroundShadow === props.data?.name ? COLORS.primary : null,
            }}>
            <CircularImage image={IMAGES.User} />
            <View style={{flex: 1, marginHorizontal: SIZES.ten}}>
              <Text style={[FONTS.boldFont16]} numberOfLines={2}>
                {props.data?.name}
              </Text>
              <Text
                style={[FONTS.mediumFont14, {color: COLORS.brownGray}]}
                numberOfLines={2}>
                {props.data?.dec}
              </Text>
            </View>
          </MyTouchableOpacity>
        </View>
      </Swipeable>
      <View style={[STYLES.horLine, {marginVertical: 0}]} />
    </View>
  );
};

export default NotificationsComponant;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.ten,
  },
  shadow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.ten,
  },
  deletButton: {
    paddingHorizontal: SIZES.fifteen,
    marginVertical: SIZES.fifteen,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: SIZES.fifteen,
    borderTopLeftRadius: SIZES.fifteen,
    backgroundColor: COLORS.secondary,
  },
});
