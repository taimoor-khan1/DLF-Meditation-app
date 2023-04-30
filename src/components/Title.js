import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { useSelector } from 'react-redux'

export default function Title(props) {

    return (
        <View>
            <Text style={[styles.txt, props.style, { color: COLORS.white }]}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: SIZES.twentyFive * 1.2,
        fontWeight: "500",
        marginTop: SIZES.twentyFive + 5,
        marginBottom: SIZES.ten

    }
})