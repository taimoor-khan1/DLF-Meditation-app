import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { IMAGES, width, height } from '../../constants'

export default function Splash() {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source={IMAGES.Logo}
                resizeMode='contain' />

        </View>
    )
}

const styles = StyleSheet.create({})