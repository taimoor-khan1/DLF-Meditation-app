import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { COLORS, IMAGES, SIZES } from '../constants'

export default function BgView1(props) {
    useEffect(() => {
        Keyboard.dismiss()
    }, [])
    return (<TouchableWithoutFeedback
        onPress={() => {
            Keyboard.dismiss()
        }}
    >
        <ImageBackground source={IMAGES.DarkBg1} style={[styles.container, props.style,]} resizeMode="stretch">
            {props.children}
        </ImageBackground>
    </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: SIZES.fifty,
        backgroundColor: COLORS.BtnBlueColor

    }
})