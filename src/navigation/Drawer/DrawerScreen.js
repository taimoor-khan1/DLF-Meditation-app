import React, { useState } from 'react';

import { CommonActions } from '@react-navigation/native';
import { View, Text, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import Row from '../../components/Row';
import {
  COLORS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import Icon, { IconType } from '../../components/Icons';
import { LABELS } from '../../constants/theme';
import LinearGradient from 'react-native-linear-gradient';

export default function More({ navigation }) {
  const dispatch = useDispatch();

  const [SELECTEDTAB, SetSELECTEDTAB] = useState();
  const DrawerBtn = ({ name, IconName, type, Screen }) => {
    return (
      <MyTouchableOpacity
        activeOpacity={1}
        style={[
          STYLES.drawerItem,

        ]}
        // onPressIn={() => SetSELECTEDTAB(name)}
        onPressOut={() => SetSELECTEDTAB(' ')}
        onPress={() => {
          SetSELECTEDTAB(name);
        }}>
        <Row style={{ justifyContent: "space-between", }}>
          <Text
            style={[
              STYLES.drawerText,

            ]}>
            {name}
          </Text>
          <Icon
            name={"right"}
            type={IconType.AntDesign}

            style={[
              STYLES.drawerIcon,
            ]}
          />
        </Row>
      </MyTouchableOpacity>
    );
  };

  const USERTYPE = useSelector(state => state.UserType.value);

  const [isLogoutModalVisible, setisLogoutModalVisible] = React.useState(false);

  const [logOutView, setLogOutView] = React.useState({
    textColor: COLORS.black,
    bgColor: COLORS.white,
  });

  const logout = () => {
    toggleModal();
  };

  const toggleModal = () => {
    setisLogoutModalVisible(!isLogoutModalVisible);
  };

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: SCREENS.Login }],
  });

  return (
    <LinearGradient
      colors={['#FCF6BA', COLORS.primary, '#BF953F']}
      start={{ x: -2, y: 2 }}
      end={{ x: 5, y: 8 }}

      style={[
        STYLES.container,
        {
          flex: 1,
          backgroundColor: COLORS.white,
          borderColor: COLORS.gray,
          borderWidth: 1,
          borderBottomRightRadius: SIZES.twenty,
          borderTopRightRadius: SIZES.twenty,
        },
      ]}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.ten,
          paddingTop: SIZES.ten,
        }}>
        <DrawerBtn
          name={LABELS.resources}
          IconName="location-outline"
          type={IconType.Ionicons}
          Screen={SCREENS.NearByMapView}
        />
        <DrawerBtn
          name={LABELS.dailyCalls}
          IconName="notifications-outline"
          type={IconType.Ionicons}
          Screen={SCREENS.NotificationSetting}
        />

        {/* Start of Logout Container */}
        <MyTouchableOpacity

          activeOpacity={1}
          style={[
            STYLES.drawerItem,
            {
              marginBottom: SIZES.twenty,
            },
          ]}
          onPress={() => {
            logout();
          }}

        >


          <Text style={[STYLES.drawerText, { color: COLORS.Red }]}>
            Log Out
          </Text>

        </MyTouchableOpacity>
        {/* End of Logout Container */}


      </View>


      {/* Start of Logout Modal */}
      <Modal
        isVisible={isLogoutModalVisible}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: SIZES.ten * 2,
            borderRadius: SIZES.ten,
            borderWidth: 1.5,
            borderColor: COLORS.primary,
          }}>
          <Image
            source={IMAGES.Logo}
            resizeMode={'contain'}
            style={{
              alignSelf: 'center',
              width: SIZES.twentyFive * 6,
              height: SIZES.twentyFive * 3,
            }}
          />

          <Text
            style={[
              STYLES.mediumText,
              {
                marginVertical: SIZES.twenty,
                textAlign: 'center',
                color: COLORS.brownGray,
              },
            ]}>
            Are you sure you want to logout?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <MyTouchableOpacity
              onPress={() => {
                navigation.navigate(SCREENS.Splash);
              }}
              style={{
                padding: SIZES.ten,
                width: SIZES.fifty,
                alignItems: 'center',
                marginEnd: SIZES.five,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.ten,
              }}>
              <Text style={[STYLES.mediumText, { color: COLORS.white }]}>
                Yes
              </Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              onPress={() => toggleModal()}
              style={{
                padding: SIZES.ten,
                width: SIZES.fifty,
                alignItems: 'center',
                marginStart: SIZES.five,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.ten,
              }}>
              <Text style={[STYLES.mediumText, { color: COLORS.white }]}>No</Text>
            </MyTouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* End of Logout Modal */}
    </LinearGradient >
  );
}

const styles = StyleSheet.create({});
