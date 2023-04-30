import React, { useEffect } from "react";
import {
  LogBox,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";
import { COLORS, SIZES } from "./src/constants";
import MainNavigation from "./src/navigation/MainNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import FlashMessage from 'react-native-flash-message';
import { NativeBaseProvider } from "native-base";


const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <NativeBaseProvider>
      <View style={styles.safeAreaView}>
        <StatusBar
          // translucent={true}
          translucent={Platform.OS === "android"}
          barStyle={"light-content"}
        // barStyle={
        //   "light-content"
        // }
        />

        <Provider store={store}>
          <MainNavigation />
          <FlashMessage position="top" floating={true} />
        </Provider>


      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,

  },
  noInternetView: {
    flex: 1,

  },
  imgStyle: {
    marginBottom: SIZES.twentyFive,
  },
  textStyle: {
    textAlign: "center",
    color: COLORS.textGrey,
  },
  headingStyle: {
    color: COLORS.primary,
  },
});

export default App;
