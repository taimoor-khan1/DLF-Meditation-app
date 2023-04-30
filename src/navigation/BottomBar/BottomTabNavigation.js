import React from 'react';
import { Image, StyleSheet, Platform, View, Text, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, IMAGES, SCREENS, SIZES } from '../../constants';

import Home from '../../Screens/home/Home';
import Resources from '../../Screens/resources/Resources';
import Timer from '../../Screens/clock/Timer';
// import Profile from '../../screens/user/Profile/Profile';
// import JobPost from '../../screens/user/JobPost/JobPost';
// import More from '../../screens/more/More';
import Icon, { IconType } from '../../components/Icons';
import DailyCalls from '../../Screens/dailyCalls/DailyCalls';
import SetTiming from '../../Screens/clock/SetTiming';
const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};


const tabs = [
  // {
  //   id: 0,
  //   name: SCREENS.Home,
  //   component: Home,
  //   unSelectedicon: IMAGES.unSelectedHome,
  //   Selectedicon: IMAGES.SelectedHome,

  // },
  {
    id: 1,
    name: SCREENS.setTimer,
    component: SetTiming,
    unSelectedicon: IMAGES.unSelectedTimeCircle,
    Selectedicon: IMAGES.selectedTimeCircle,

  },
  {
    id: 2,
    name: SCREENS.dailyCalls,
    component: DailyCalls,
    unSelectedicon: IMAGES.unSelectedCalling,
    Selectedicon: IMAGES.selectedCalling,
  },
  {
    id: 3,
    name: SCREENS.resources,
    component: Resources,
    unSelectedicon: IMAGES.unSelectedUser,
    Selectedicon: IMAGES.selectedUser,
  },

];

const Tab = createBottomTabNavigator();
export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.white,
        // tabBarInactiveTintColor: COLORS.halfWhite,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (


          <ImageBackground source={IMAGES.TabBG} style={[StyleSheet.absoluteFill]} >

          </ImageBackground>

        ),

      }}>
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={({ }) => ({
            tabBarIcon: ({ focused, color }) => (
              <View style={{ alignItems: "center" }}>
                <View style={[styles.tabLine, { borderTopColor: focused && COLORS.BtnYellowColor, borderTopWidth: focused ? 3 : 0 }]} />
                <Image source={focused ? item.Selectedicon : item.unSelectedicon} />
              </View>
            ),
          })}
        />
      ))}

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0,
    position: 'absolute',
    height: SIZES.fifty * 1.1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'android' ? 0 : SIZES.twenty,
  }, tabLine: {
    flex: 1,
    position: "absolute",
    // backgroundColor: "red",
    bottom: Platform.OS === 'android' ? SIZES.fifty / 1.58 : SIZES.fifty / 1.7,
    width: SIZES.twentyFive + SIZES.twentyFive
  }
});
