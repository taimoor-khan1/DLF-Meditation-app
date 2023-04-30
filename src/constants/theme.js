import { Dimensions, Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useSelector } from 'react-redux';
export const { width, height } = Dimensions.get('window');


/* *************** Colors ********** */

export const COLORS = {
  primary: '#D9A738',
  BtnYellowColor: "#f9e342",
  BtnBlueColor: "#4646c7",
  orange: '#F89A2B',
  backgroundColor: " #1E1E1E",
  secondary: '#181818',
  blackWithopacity: '#00000085',
  black: '#000000',
  textFieldlight: "#4646C7",
  BorderColor: "#F9E342",
  Red: '#FF0000',
  crimson: '#860012',
  white: '#ffffff',
  blue: '#0037c1',
  lightGray: '#D3D3D3',
  gray: '#767577',
  star: '#FFD700',
  golden: '#FFD700',
  purple: '#4e1789',
  lightPurple: '#871af6',
  brownGray: '#5d536a',
  trueGreen: '#1eaf08',
  halfWhite: '#eeeeee',
  charcoalGrey: '#4a4b4d',
  veryLightpink: '#ffeef2',
  transparent: 'transparent',
  textGrey: '#8a7e9a',
  green: "#00FF00",
  turqoiseGreen: '#00FF77',
  veryLightPink: '#e6e6e6',
};

const appTheme = { COLORS };

export default appTheme;

/* * Fonts * */
export const FONTFAMILY = {
  Bold: 'Montserrat-Bold',
  Light: 'Montserrat-Light',
  Medium: 'Montserrat-Medium',
  Regular: 'Montserrat-Regular',
  Ionicons: 'Ionicons',
  AntDesign: 'AntDesign',
  EvilIcons: 'EvilIcons',
  Entypo: 'Entypo',
  FontAwesome: 'FontAwesome',
  Feather: 'Feather',
  MaterialIcons: 'MaterialIcons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  Octicons: 'Octicons',
  SimpleLineIcons: 'SimpleLineIcons',
  Fontisto: 'Fontisto',
};

/* * Tune * */

export const tune = {
  TingshaBell: '../assets/Tune/TingshaBell'
}


/* * Images * */
export const IMAGES = {
  noWifi: require('../assets/images/no-signal.png'),
  purpleBg: require('../assets/images/purpleBg.png'),
  noWifiDark: require('../assets/images/noWifiDark.png'),
  sun: require('../assets/images/sun.png'),
  moon: require('../assets/images/moon.png'),
  noWifiLight: require('../assets/images/NoWifiLight.png'),
  YogaImage: require('../assets/images/YogaImage.png'),
  YogaPose: require('../assets/images/yogaInDark.png'),
  Logo: require('../assets/images/logo.png'),
  LogoWithoutName: require('../assets/images/logoWithOutName.png'),
  User: require('../assets/images/User.png'),
  DarkBg1: require('../assets/images/DarkBG1.png'),
  DarkBg2: require('../assets/images/DarkBG2.png'),
  DarkMenu: require('../assets/images/DarkMenu.png'),
  Logout: require('../assets/images/LogoutBTn.png'),
  Intro: require('../assets/images/IntoText.png'),
  IntroLight: require('../assets/images/IntoTextLight.png'),
  WelcometoDLF: require('../assets/images/WelcometoDLF.png'),
  BgLightStart: require('../assets/images/LightMoodStartBg.png'),
  BgDarkStart: require('../assets/images/DarkMoodStartBg.png'),
  User1: require('../assets/images/User1.png'),
  User2: require('../assets/images/User2.png'),
  Vendor: require('../assets/images/Vender.png'),
  Timer: require('../assets/images/Timer.png'),
  ClockLoader: require('../assets/loader/ClockLoader.json'),
  loader: require('../assets/loader/loader.json'),
  TabBG: require('../assets/images/TabBG.png'),
  DarkBGdot: require('../assets/images/DarkBGdot.png'),
  emailIcon: require('../assets/images/emailicon.png'),
  PasswordIcon: require('../assets/images/passwordIcon.png'),
  userIcon: require('../assets/images/UseIcon.png'),
  setting: require('../assets/images/setting.png'),
  selectedCalling: require('../assets/images/selectedCalling.png'),
  SelectedHome: require('../assets/images/SelectedHome.png'),
  selectedTimeCircle: require('../assets/images/selectedTimeCircle.png'),
  selectedUser: require('../assets/images/selectedUser.png'),
  unSelectedCalling: require('../assets/images/unSelectedCalling.png'),
  unSelectedHome: require('../assets/images/unSelectedHome.png'),
  unSelectedTimeCircle: require('../assets/images/unSelectedTimeCircle.png'),
  unSelectedUser: require('../assets/images/unSelectedUser.png'),
  unSelectedUser: require('../assets/images/unSelectedUser.png'),
  unSelectedCheck: require('../assets/images/unSelectedCheck.png'),
  SelectedCheck: require('../assets/images/SelectedCheck.png'),
  Spinner: require('../assets/images/Spinner.json'),
};

/* * Screens * */
export const SCREENS = {
  Startup: 'Startup',
  tabs: 'Tabs',
  AppliedJob: 'AppliedJob',
  dailyCalls: 'DailyCalls',
  Login: 'Login',
  SignUp: 'SignUp',
  CreateAccount: 'CreateAccount',
  SignUpVendor: 'SignUpVendor',
  AboutApp: 'AboutApp',
  Splash: 'Splash',
  Timer: 'Timer',
  ResetPassword: 'ResetPassword',
  ForgotPassword: 'ForgotPassword',
  Verification: 'Verification',
  NewPassword: 'NewPassword',
  Home: 'Home',
  resources: "Resources",
  UserHome: 'UserHome',
  Noitification: 'Noitification',
  Payment: 'Payment',
  Setting: 'Setting',
  TermsAndConditions: 'TermsAndConditions',
  NewOrder: 'NewOrder',
  OrderHistory: 'OrderHistory',
  OrderDetails: 'OrderDetails',
  Coupons: 'Coupons',
  Additem: 'Additem',
  Profile: 'Profile',
  EditProfile: 'EditProfile',
  RiderLogin: 'RiderLogin',
  SelectType: 'SelectType',
  DrawerNavigator: 'DrawerNavigator',
  HelpAndSupport: 'HelpAndSupport',
  NearByMapView: 'NearByMapView',
  UserMainLayout: 'UserMainLayout',
  PostJob: 'PostJob',
  NotificationSetting: 'NotificationSetting',
  ScheduleTime: 'ScheduleTime',
  BookingConfirm: 'BookingConfirm',
  Rating: 'Rating',
  AddCard: 'AddCard',
  Seacrh: 'Seacrh',
  PrivacyAndPolicy: 'PrivacyAndPolicy',
  VendorProfile: 'VendorProfile',
  More: 'More',
  setTimer: 'setTimer',
  setting: 'setting',
  personal: 'PersonalInformation',
  changePassword: "changePassword",
  deleteAccount: "deleteAccount",

};

// Labels
export const LABELS = {
  signUP: "Sign Up",
  dailyCalls: "Daily Calls",
  meditate: "Meditate",
  Verification: "Verification",
  newPassword: "Create New Password",
  resources: "Resources",
  dailyCalls: "Daily Calls",
  login: "Log In",
  email: "Email address",
  password: "Password",
  next: "Next",
  forgetPassword: "Forgot Password",
  confirmPassword: "Confirm Password",
  forget: "Forgot Password?",
  dont: "Don't have an account?",
  already: "Already have an account?",
  enter: "Enter your registered email address",
  enterCode: "Enter verification code sent to your email",
  setNewPassword: "Set your new password",
  why: "Why do I need to create an account?",
  Home: "Home",
  leadinTime: "Lead-in Time",
  mediation: "Meditate",
  OutroTime: "Outro Time",
  gotowebsite: "Go to Website",
  setTiming: "Set Timer",
  setting: "Settings",
  personal: "Personal Information",
  changePassword: "Change Password",
  update: "Update Password",
  TermsAndConditions: "Terms & Conditions",
  PrivacyAndPolicy: "Privacy Policy",
  deleteAccount: "Delete Account"
};

export const SIZES = {
  // global sizes
  five: height * 0.0055,
  ten: height * 0.011,
  fifteen: height * 0.017,
  twenty: height * 0.023,
  twentyWidth: width * 0.05,
  twentyFive: height * 0.03,
  twentyFiveWidth: width * 0.08,
  fifty: height * 0.075,
  fiftyWidth: width * 0.13,

  // font sizes
  h16: width * 0.034,
  h18: width * 0.038,
  h20: width * 0.042,
  h22: width * 0.048,
  h24: width * 0.055,
  body08: width * 0.024,
  body10: width * 0.028,
  body12: width * 0.032,
  body14: width * 0.036,
  body16: width * 0.04,
  body18: width * 0.045,
};

export const FONTS = {
  boldFont16: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h16,
    color: COLORS.black,
    fontWeight: '700',
  },
  boldFont18: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h18,
    color: COLORS.black,
  },
  boldFont20: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h20,
    color: COLORS.black,
  },
  boldFont22: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h22,
    color: COLORS.black,
  },
  boldFont24: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h24,
    color: COLORS.black,
  },
  semiBoldFont16: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h16,
    color: COLORS.black,
  },
  semiBoldFont18: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h18,
    color: COLORS.black,
  },
  semiBoldFont20: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h20,
    color: COLORS.black,
  },
  semiBoldFont22: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h22,
    color: COLORS.black,
  },
  semiBoldFont24: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h24,
    color: COLORS.black,
  },
  mediumFont10: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body10 },
  mediumFont12: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body12 },
  mediumFont14: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body14 },
  mediumFont16: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body16 },
  mediumFont18: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body18 },
  regularFont10: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body10 },
  regularFont12: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body12 },
  regularFont14: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body14 },
  regularFont16: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body16 },
  regularFont18: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body18 },
  lightFont08: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body08 },
  lightFont10: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body10 },
  lightFont12: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body12 },
  lightFont14: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body14 },
  lightFont16: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body16 },
  lightFont18: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body18 },
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:
      Platform.OS === 'android'
        ? SIZES.fifteen * 1.2
        : getStatusBarHeight(true),
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.ten
  },
  splashLogo: {
    width: SIZES.fifteen * 13,
    height: SIZES.fifteen * 13,
    alignSelf: 'center',
  },
  loginView: {
    flex: 1,
    width: '100%',
    marginTop: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
  },
  lightText: {
    fontFamily: FONTFAMILY.Light,
  },
  mediumText: {
    fontFamily: FONTFAMILY.Medium,
  },
  boldText: {
    fontFamily: FONTFAMILY.Bold,
  },
  headingText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.twenty + 5,
    color: COLORS.black,
  },
  paragraphText: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.fifteen - 1,
    color: COLORS.black,
  },
  drawerItem: {
    // alignItems: 'center',
    // borderRadius: SIZES.fifteen,
    paddingVertical: SIZES.fifteen,
    paddingHorizontal: SIZES.fifteen,
  },
  drawerIcon: {
    fontSize: SIZES.fifteen + 5,
  },
  drawerText: {
    fontSize: SIZES.fifteen,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.black,
    marginHorizontal: SIZES.fifteen - 5,
  },
  horLine: {
    height: 0.3,
    marginVertical: SIZES.fifteen,
    backgroundColor: COLORS.brownGrey,
  },
  shadow: {
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    shadowColor: COLORS.black,
    backgroundColor: COLORS.white,
  },
});

export const CONSTANTS = {


  DESTINATIONS: {
    SIGN_UP: 'sign_up',
    FORGOT_PASSWORD: 'forgot_password',
  },

  CACHE_KEYS: {
    DEFAULT_USER: 'access_token',
    IS_FIRST_TIME: 'is_first_time',
  },
};
