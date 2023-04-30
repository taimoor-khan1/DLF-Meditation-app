import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import BgView2 from '../../components/BgView2'
import CustomHeader from '../../components/CustomHeader'
import { COLORS, IMAGES, SIZES, width } from '../../constants'
import Modal from 'react-native-modal';
import { height, LABELS, SCREENS, STYLES } from '../../constants/theme'
import MyTouchableOpacity from '../../components/MyTouchableOpacity'
import LogOutModal from '../../components/Modals/LogOutModal'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../redux/Slices/UserData'
import { logOutNotVisible, logOutVisible } from '../../redux/Slices/Utiltities'

export default function Home(props) {
    const dispatch = useDispatch()


    const { navigation } = props

    return (
        <BgView2  >
            <CustomHeader title={LABELS.Home}
                setting
                onSettingPress={() => {
                    navigation.navigate(SCREENS.setting)
                }}

            />
            <View style={styles.InnerContainer}>
                <Image source={IMAGES.LogoWithoutName} style={styles.img} resizeMode="contain" />

            </View>

        </BgView2 >
    )
}

const styles = StyleSheet.create({
    img: {
        width: width * .7,
        height: height * .25,
        marginTop: -SIZES.fifty * 2,
        // backgroundColor: COLORS.Red
    },
    InnerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})