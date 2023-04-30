import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { NavigationContainer, useNavigationContainerRef, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import analytics from '@react-native-firebase/analytics';
import { SCREENS } from '../constants';
import DrawerNavigator from './Drawer/index';
import splash from '../Screens/Auth/Splash';
import StartScreen from '../Screens/Auth/StartScreen';
import Login from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import ForgetPassword from '../Screens/Auth/ForgetPassword';
import Verification from '../Screens/Auth/Verification';
import NewPassword from '../Screens/Auth/NewPassword';
import BottomTabNavigation from './BottomBar/BottomTabNavigation';
import Firebase from '../firebase/firebaseConfig';
import Loader from '../components/Modals/Loader';
import { useSelector } from 'react-redux';
import Timer from '../Screens/clock/Timer';
import Settings from '../Screens/settings/Settings';
import PersonalInformation from '../Screens/personal/PersonalInformation';
import TermsAndConditions from '../Screens/Content/TermsAndConditions';
import PrivacyAndPolicy from '../Screens/Content/PrivacyAndPolicy';
import ChangePassword from '../Screens/changePassword/ChangePassword';
import DeleteAccount from '../Screens/deleteAccount/DeleteAccount';



const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};



export default function (props) {
  const { data } = useSelector(state => state.UserData);
  const [appLoading, setAppLoading] = useState(true);
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();


  useEffect(() => {
    Firebase();
    setTimeout(() => {
      setAppLoading(false);
    }, 1000);
  }, [])

  return (

    <>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer
        ref={navigationRef}
        onReady={() =>
          (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
        }
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name;
          if (previousRouteName !== currentRouteName) {
            await analytics().logEvent(currentRouteName);
          }
          routeNameRef.current = currentRouteName;
        }}

      >
        <Stack.Navigator
          screenOptions={screenOptions}
        // initialRouteName={SCREENS.Splash}
        >
          {appLoading &&
            <Stack.Screen
              name={SCREENS.Splash}
              component={splash}
            />
          }
          {data === null ?
            <>
              <Stack.Screen
                name={SCREENS.Startup}
                component={StartScreen}
              />
              <Stack.Screen
                name={SCREENS.Login}
                component={Login}
              />

              <Stack.Screen
                name={SCREENS.SignUp}
                component={SignUp}
              />

              <Stack.Screen
                name={SCREENS.ForgotPassword}
                component={ForgetPassword}
              />
              <Stack.Screen
                name={SCREENS.Verification}
                component={Verification}
              />
              <Stack.Screen
                name={SCREENS.NewPassword}
                component={NewPassword}
              />
            </> :
            <>
              <Stack.Screen
                name={SCREENS.tabs}
                component={BottomTabNavigation}
              />
              <Stack.Screen
                name={SCREENS.Timer}
                component={Timer}
              />
              <Stack.Screen
                name={SCREENS.setting}
                component={Settings}
              />
              <Stack.Screen
                name={SCREENS.personal}
                component={PersonalInformation}
              />
              <Stack.Screen
                name={SCREENS.TermsAndConditions}
                component={TermsAndConditions}
              />
              <Stack.Screen
                name={SCREENS.PrivacyAndPolicy}
                component={PrivacyAndPolicy}
              />
              <Stack.Screen
                name={SCREENS.changePassword}
                component={ChangePassword}
              />
              <Stack.Screen
                name={SCREENS.deleteAccount}
                component={DeleteAccount}
              />
            </>
          }
        </Stack.Navigator>
        <Loader />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
