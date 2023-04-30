import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BgView1 from '../../components/BgView1'
import Button from '../../components/CustomButton'
import Header from '../../components/CustomHeader'
import { SIZES } from '../../constants'
import Title from '../../components/Title'
import { COLORS, LABELS, SCREENS } from '../../constants/theme'
import EditText from '../../components/EditText'
import Icon, { IconType } from '../../components/Icons'
import { useSelector } from 'react-redux'

export default function NewPassword(props) {
    const { navigation } = props

    return (
        <BgView1 style={styles.container}>
            <Header hasBackArrow />
            <Title text={LABELS.newPassword} />
            <Text style={styles.txt}>{LABELS.setNewPassword}</Text>
            <EditText
                hasIcon={true}
                name="lock"
                type={IconType.Feather}
                password={true}
                placeholder={LABELS.password}
            />
            <EditText
                hasIcon={true}
                name="lock"
                type={IconType.Feather}
                password={true}
                placeholder={LABELS.confirmPassword}
            />
            <Button title={LABELS.next} onPress={() => navigation.navigate(SCREENS.tabs)} />
        </BgView1>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SIZES.fifteen,
    }, txt: {
        paddingTop: SIZES.fifteen,
        fontSize: SIZES.twenty / 1.1,
        color: COLORS.gray
    },
    SignUp: {
        paddingTop: SIZES.ten,
        fontSize: SIZES.fifteen,
        alignSelf: "center"



    }
})