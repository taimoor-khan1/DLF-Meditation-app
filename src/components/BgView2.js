import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { COLORS, IMAGES, SIZES } from '../constants'
import LinearGradient from 'react-native-linear-gradient';

export default function BgView2(props) {
    useEffect(() => {
        Keyboard.dismiss()
    }, [])

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}
        >


            <ImageBackground source={IMAGES.purpleBg} style={[styles.container, props.style]} resizeMode="stretch">
                {props.children}
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: SIZES.fifty,
        flex: 1,
        backgroundColor: COLORS.BtnBlueColor
    }
})