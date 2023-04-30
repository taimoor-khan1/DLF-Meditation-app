import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BgView2 from '../../components/BgView2'
import CustomHeader from '../../components/CustomHeader'
import { SIZES } from '../../constants'
import { COLORS, LABELS } from '../../constants/theme'

export default function TermsAndConditions() {
    return (
        <BgView2>
            <CustomHeader
                style={{ marginLeft: SIZES.ten }}
                hasBackArrow title={LABELS.TermsAndConditions} />
            <View style={styles.container}>


                <Text style={styles.txt}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed metus mi, dapibus vitae
                    efficitur id, ultricies quis mauris. Fusce a condimentum odio.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Suspendisse eget tempor tellus. Nunc
                    simperdiet semper maximus. Aenean egestas consectetur nisi.
                    Mauris accumsan ante vel sapien pulvinar,
                    eget efficitur libero rutrum.
                </Text>
            </View>
        </BgView2>
    )
}

const styles = StyleSheet.create({
    txt: {
        color: COLORS.white,
        textAlign: "justify",
        fontSize: SIZES.fifteen - 2,
        fontWeight: "400",

    },
    container: {
        backgroundColor: COLORS.BtnBlueColor,
        borderRadius: SIZES.fifteen,
        margin: SIZES.twenty,
        padding: SIZES.twenty

    }
})