import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import { COLORS, FONTS, SIZES } from '../constants';
import Icon, { IconType } from './Icons';

export default function CommonButton(props) {
  const {
    title,
    btnStyle,
    titleStyle,
    onPress,
    disabled,
    hasForwordArrow,
  } = props;


  return (

    <MyTouchableOpacity onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: COLORS.BtnYellowColor,
        },
        btnStyle,
      ]}
    // disabled={disabled}
    >
      <Text
        style={[
          FONTS.boldFont18,

          styles.textStyle,

          {
            color: COLORS.black
          }, titleStyle
        ]}>
        {title}
      </Text>
      {hasForwordArrow && (
        <Icon
          name="right"
          type={IconType.AntDesign}
          size={SIZES.twenty}
          color={COLORS.white}
          style={styles.iconStyle}
        />
      )}
    </MyTouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    marginTop: 20,
    // paddingVertical: SIZES.fifteen * 1.3,
    borderRadius: SIZES.fifty,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.twenty,
  },
  textStyle: {
    fontWeight: "700",
    fontSize: 14
  },
  iconStyle: {
    right: SIZES.fifteen,
    position: 'absolute',
  },
});
