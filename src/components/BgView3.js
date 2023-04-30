import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { COLORS, IMAGES, SIZES } from '../constants'
import LinearGradient from 'react-native-linear-gradient';

export default function BgView3(props) {
    return (
        <ImageBackground source={IMAGES.DarkBGdot} style={[styles.container, props.style]} resizeMode="stretch">
            {props.children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: SIZES.fifty,
        flex: 1,
        backgroundColor: COLORS.BtnBlueColor
    }
})