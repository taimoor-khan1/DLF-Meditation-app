import { StyleSheet, Text, Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Buttom from '../../components/CustomButton'
import { IMAGES, width, height, COLORS } from '../../constants'
import { useSelector } from 'react-redux'
import { LABELS, SCREENS, SIZES } from '../../constants/theme'

export default function StartScreen(props) {
    const { navigation } = props
    return (
        <View source={IMAGES.BgDarkStart} style={styles.containe}>
            <Image source={IMAGES.Logo} style={styles.img} resizeMode="contain" />
            <Image source={IMAGES.WelcometoDLF} resizeMode="contain" />
            <Text style={styles.intoText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non risus eget leo porttitor cursus accumsan ac erat.
            </Text>
            <Buttom title={LABELS.login} titleStyle={{ color: COLORS.white }} btnStyle={{ width: 180, backgroundColor: COLORS.BtnBlueColor, height: 45 }}
                onPress={() => {
                    navigation.navigate(SCREENS.Login)
                }}
            />
            <Text style={[styles.text, { color: COLORS.BtnBlueColor }]}
                onPress={() => {
                    navigation.navigate(SCREENS.SignUp)
                }}

            > {LABELS.signUP}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    containe: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: -SIZES.fifty
    },
    img: {
        width: width * .8,
        height: height * .3,
        // backgroundColor: COLORS.Red
    },
    text: {
        fontWeight: "700",
        fontSize: 14,
        marginTop: 10
    },
    intoText: {
        fontWeight: "400",
        fontSize: SIZES.fifteen - 2,
        textAlign: "center",
        lineHeight: 19.5,
        color: "#1F1F5C99+60",
        margin: SIZES.fifteen
    }


})