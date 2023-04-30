import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import BgView2 from '../../components/BgView2'
import CustomHeader from '../../components/CustomHeader'
import { COLORS, LABELS, SCREENS, SIZES } from '../../constants/theme'
import Button from '../../components/CustomButton'
import Row from '../../components/Row'


import Icon, { IconType } from '../../components/Icons'

export default function Resources(props) {
    const { navigation } = props

    return (
        <BgView2>
            <View style={{ flex: 1 }}>

                <CustomHeader
                    setting
                    onSettingPress={() => {
                        navigation.navigate(SCREENS.setting)
                    }}
                    style={{ marginLeft: SIZES.ten }}
                    title={LABELS.resources} />
                <View style={styles.TextField}>
                    <Row style={[styles.row, {
                        borderBottomColor: COLORS.white + 50,
                        borderBottomWidth: 1,
                    }]}>
                        <Text style={styles.txt}>
                            Donate
                        </Text>
                        <Icon
                            name="right"
                            type={IconType.AntDesign}
                            color={COLORS.white + 50}
                            size={SIZES.fifteen + 2}
                        />
                    </Row>
                    <Row style={styles.row} >

                        <Text style={styles.txt}>
                            More info
                        </Text>
                        <Icon
                            name="right"
                            type={IconType.AntDesign}
                            color={COLORS.gray}
                            size={SIZES.fifteen + 2}
                        />
                    </Row>
                </View>
                <View style={styles.TextField}>
                    <Text style={styles.txt}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus mi, dapibus vitae efficitur id, ultricies quis mauris. Fusce a condimentum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse eget tempor tellus. Nunc imperdiet semper maximus. Aenean egestas consectetur nisi. Mauris accumsan ante vel sapien pulvinar, eget efficitur libero rutrum.
                    </Text>
                </View>
            </View>
            <Button btnStyle={styles.btn} title={LABELS.gotowebsite} onPress={() => { Linking.openURL("https://www.davidlynchfoundation.org/") }} />
        </BgView2>
    )
}

const styles = StyleSheet.create({
    TextField: {
        backgroundColor: COLORS.BtnBlueColor,
        borderRadius: SIZES.ten,
        padding: SIZES.fifteen,
        margin: SIZES.fifteen
    },
    txt: {
        color: COLORS.white,
        fontSize: SIZES.fifteen + 2,
        textAlign: "justify",
    },
    btn: {
        margin: SIZES.fifteen,
        marginBottom: SIZES.fifty * 1.5
    }, row: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: SIZES.ten,
    }
})