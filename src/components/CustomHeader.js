import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, height, IMAGES, SCREENS, SIZES, width } from "../constants";
// import MyTouchableOpacity from './MyTouchableOpacity';
import Icon, { IconType } from "./Icons";
import MyTouchableOpacity from "./MyTouchableOpacity";
import { useSelector } from "react-redux";


export default function CustomHeader(props) {


  const {
    iconColor,
    title,
    subTitle,
    menu,
    showSearchIcon,
    onSearchPress,
    showShuffleBtn,
    onShuffleClick,
    hasBackArrow,
    showEditIcon,
    ShowLogOutBtn,
    onlogoutPress,
    setting,
    onSettingPress

  } = props;
  const navigation = useNavigation();

  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={{ flex: 0.2 }}>
        {hasBackArrow && (
          <MyTouchableOpacity
            // style={{ padding: 8 }}
            activeOpacity={0.85}
            onPress={() => navigation.goBack()}
          >
            <View
              style={[
                styles.btnStyle,
                props.style,
                // { backgroundColor: COLORS.textFieldlight },
                { backgroundColor: "#4646C7" + 50 },
              ]}
            >
              <Icon
                name="arrow-back"
                type={IconType.Ionicons}
                size={SIZES.twenty}
                color={COLORS.white}
              />
            </View>
          </MyTouchableOpacity>
        )}
        {menu && (
          <MyTouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.openDrawer()}
          >
            <View
              style={[
                styles.btnStyle,
                props.style,
              ]}
            >
              <Image source={IMAGES.DarkMenu} style={{ width: width * .1, height: width * 0.1 }} />
            </View>
          </MyTouchableOpacity>
        )}

      </View>

      {title && (
        <View style={[styles.titleContainer]}>
          <Text
            style={[
              FONTS.mediumFont18,
              styles.titleStyle,
              { fontWeight: "bold", color: COLORS.white },
            ]}
          >
            {title}
          </Text>

          {subTitle ? (
            <Text style={[FONTS.mediumFont10, styles.subTtitleStyle]}>
              {"  "}( {subTitle} )
            </Text>
          ) : null}
        </View>
      )}

      {showSearchIcon ? (
        <MyTouchableOpacity style={styles.iconStyle} onPress={onSearchPress}>
          <Icon
            name={"search1"}
            type={IconType.AntDesign}
            color={COLORS.textGrey}
          />
        </MyTouchableOpacity>
      ) : showEditIcon ? (
        <MyTouchableOpacity
          style={styles.iconStyle}
          onPress={() => navigation.navigate(SCREENS.EditProfile)}
        >
          <Icon
            name="edit"
            type={IconType.Feather}
            color={iconColor || COLORS.black}
            size={SIZES.twenty * 1.3}
          />
        </MyTouchableOpacity>
      ) :
        ShowLogOutBtn ? (
          <MyTouchableOpacity
            activeOpacity={0.85}
            onPress={onlogoutPress}
          >
            <View
              style={[
                styles.btnStyle,
                props.style,
              ]}
            >
              <Image source={IMAGES.Logout} style={{ width: width * .1, height: width * 0.1 }} />
            </View>
          </MyTouchableOpacity>
        ) :
          setting ? (
            <MyTouchableOpacity
              activeOpacity={0.85}
              onPress={onSettingPress}
            >
              <View
                style={[
                  styles.btnStyle,
                  props.style,
                ]}
              >
                <Image source={IMAGES.setting} style={{ width: width * .1, height: width * 0.1 }} />
              </View>
            </MyTouchableOpacity>
          )
            :
            showShuffleBtn ? (
              <MyTouchableOpacity
                style={styles.shuffleBtnStyle}
                onPress={onShuffleClick}
              >
                <Icon
                  name={"shuffle"}
                  type={IconType.Ionicons}
                  color={COLORS.purple}
                  size={SIZES.twenty}
                />

                <Text style={[FONTS.mediumFont12, styles.shuffleTextStyle]}>
                  Shuffle
                </Text>
              </MyTouchableOpacity>
            ) : (
              <View style={{ flex: 0.2 }} />
            )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginHorizontal: SIZES.ten,
    paddingVertical: SIZES.ten,
    // marginTop: SIZES.fifteen,
  },
  btnStyle: {
    // borderWidth: 1,
    height: width * 0.1,
    width: width * 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width,
    marginRight: SIZES.twenty

  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    color: COLORS.black,
  },
  subTtitleStyle: {
    color: COLORS.textColor,
    alignSelf: "flex-end",
    marginBottom: 2,
  },
  iconStyle: {
    flex: 0.2,
    alignItems: "flex-end",
  },
  shuffleBtnStyle: {
    borderWidth: 1,
    height: width * 0.08,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: SIZES.ten,
    borderColor: COLORS.lightPurple,
    marginLeft: -SIZES.twenty * 2.5,
    paddingHorizontal: SIZES.ten,
  },
  shuffleTextStyle: {
    color: COLORS.purple,
    marginLeft: SIZES.five,
  },
});
