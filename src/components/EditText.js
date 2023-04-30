import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { FONTS, SIZES, COLORS, FONTFAMILY, SCREENS, IMAGES } from '../constants';
import Icon, { IconType } from './Icons';
import MyTouchableOpacity from './MyTouchableOpacity';

const EditText = React.forwardRef((props, ref) => {
  const { title, ForgetPassword } = props;
  const navigation = useNavigation();

  const [borderColor, setBorderColor] = useState(COLORS.BtnBlueColor);
  const [show, setshow] = useState('eye');
  const [showText, setShowText] = useState(true);

  const passwordShow = () => {
    if (show === 'eye') {
      setshow('eye-off');
      setShowText(false);
    } else {
      setShowText(true);
      setshow('eye');
    }
  };

  return (
    <View >
      {/* title View */}
      <View
        style={[
          {
            justifyContent: 'space-between',
            flexDirection: 'row',
            // marginTop: SIZES.five,
          },
          props.styleContainer,
        ]}>
        <Text
          style={[
            FONTS.mediumFont14,
            {
              color: COLORS.black,
            },
          ]}>
          {title}
        </Text>
        {ForgetPassword ? (
          <MyTouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.ForgotPassword, {
                data: props.value,
              });
            }}>
            <Text
              style={{
                fontSize: SIZES.fifteen,
                color: COLORS.primary,
                fontFamily: FONTFAMILY.Medium,
              }}>
              {ForgetPassword}
            </Text>
          </MyTouchableOpacity>
        ) : null}
      </View>
      {/* EditText  */}
      <View
        style={[
          {
            backgroundColor: COLORS.textFieldlight,
            justifyContent: 'center',
            borderWidth: 1,
            paddingHorizontal: SIZES.fifteen,
            height: SIZES.fifty / 1.2,
            borderRadius: SIZES.fifty,
            borderColor: borderColor,
            // marginTop: SIZES.ten,
          },
          props.style,
        ]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            {props.hasIcon ? (
              <Icon
                type={props.type}
                name={props.name}
                color={COLORS.white + 90}
                style={{
                  marginRight: SIZES.ten,
                }}
              />
            ) : props.email ? <TouchableOpacity>
              <Image source={IMAGES.emailIcon} style={{
                marginRight: SIZES.ten,
                width: SIZES.twentyFive, height: SIZES.twentyFive,

              }} />
            </TouchableOpacity> :
              props.password ? <TouchableOpacity>
                <Image source={IMAGES.PasswordIcon} style={{
                  marginRight: SIZES.ten,
                  width: SIZES.twentyFive, height: SIZES.twentyFive,

                }}
                  resizeMode="contain" />
              </TouchableOpacity> :
                props.user && <TouchableOpacity>
                  <Image source={IMAGES.userIcon} style={{
                    marginRight: SIZES.ten,
                    width: SIZES.twentyFive, height: SIZES.twentyFive,
                  }}
                    resizeMode="contain" />
                </TouchableOpacity>
            }

            <TextInput
              ref={ref}
              {...props}
              secureTextEntry={props.password ? showText : false}
              selectionColor={COLORS.BtnYellowColor}
              placeholder={props.placeholder}
              placeholderTextColor={COLORS.lightGray}
              onFocus={() => {
                setBorderColor(COLORS.BtnYellowColor);
              }}
              onBlur={() => {
                setBorderColor(COLORS.BtnBlueColor);
              }}
              style={[
                FONTS.mediumFont14,
                {
                  flex: 1,
                  color: COLORS.white,
                  height: 65,
                },
              ]}
            />
          </View>
          {/* {props.password ? (
            <Text>{show}</Text>
          ) : // <Icon
          //   name={show}
          //   type={IconType.FontAwesome}
          //   color={borderColor}
          //   size={20}
          //   style={{
          //     marginLeft: 5,
          //   }}
          //   onPress={() => {
          //     passwordShow();
          //   }}
          // />
          null} */}
        </View>
        {props.password ? (
          <MyTouchableOpacity
            style={{ position: 'absolute', right: SIZES.fifteen }}
            onPress={() => {
              passwordShow();
            }}>
            {/* <Text
              style={{
                backgroundColor: COLORS.brownGray,
                paddingHorizontal: SIZES.fifteen,
                paddingVertical: SIZES.five * 0.5,
                borderRadius: SIZES.five,
                color: COLORS.white,
              }}>
              {show}
            </Text> */}
            <Icon
              name={show}
              type={IconType.Feather}
              size={SIZES.twenty * 1.15}
              color={COLORS.white}
            />
          </MyTouchableOpacity>
        ) : null}
      </View>
    </View>
  );
});

export default EditText;
