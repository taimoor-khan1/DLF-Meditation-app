import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {View, TouchableOpacity} from 'react-native';
import Notifications from '../../screens/Notification/Notification';
import Home from '../../screens/user/Home/Home';
import Profile from '../../screens/user/Profile/Profile';
import JobPost from '../../screens/user/JobPost/JobPost';
import More from '../../screens/more/More';
import Icon, {IconType} from '../../components/Icons';
import {COLORS, SCREENS, SIZES, width} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const tabs = {
  Home: {
    labelStyle: {
      color: COLORS.black,
    },
    icon: {
      component: () => <Icon name="home-outline" type={IconType.Ionicons} />,
      inactiveColor: 'rgba(0,0,0,1)',
    },
  },
  Noitification: {
    labelStyle: {
      color: COLORS.black,
    },
    icon: {
      component: () => (
        <Icon name="ios-notifications-outline" type={IconType.Ionicons} />
      ),
      inactiveColor: 'rgba(0,0,0,1)',
    },
  },
  Profile: {
    labelStyle: {
      color: COLORS.black,
    },
    icon: {
      component: () => (
        <Icon name="ios-person-outline" type={IconType.Ionicons} />
      ),
      inactiveColor: 'rgba(0,0,0,1)',
    },
  },
  PostJob: {
    labelStyle: {
      color: COLORS.black,
    },
    icon: {
      component: () => <Icon name="add-outline" type={IconType.Ionicons} />,
      inactiveColor: 'rgba(0,0,0,1)',
    },
  },
  More: {
    labelStyle: {
      color: COLORS.black,
    },
    icon: {
      component: () => <Icon name="menu-outline" type={IconType.Ionicons} />,

      inactiveColor: 'rgba(0,0,0,1)',
    },
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        headerStyle: {backgroundColor: COLORS.primary},
        tabBarStyle: {
          paddingVertical: SIZES.fifteen,
          backgroundColor: COLORS.primary,
        },
      }}
      initialRouteName={SCREENS.Home}
      tabBar={props => (
        <AnimatedTabBar
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.ten,

            borderTopRightRadius: SIZES.twenty,
            borderTopLeftRadius: SIZES.twenty,
          }}
          preset="flashy"
          tabs={tabs}
          {...props}
        />
      )}>
      <Tab.Screen name={SCREENS.Home} component={Home} />
      <Tab.Screen name={SCREENS.Noitification} component={Notifications} />
      <Tab.Screen name={SCREENS.PostJob} component={JobPost} />
      <Tab.Screen name={SCREENS.Profile} component={Profile} />
      <Tab.Screen
        name={SCREENS.More}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.toggleDrawer();
          },
        }}
        component={More}
      />
    </Tab.Navigator>
  );
}
