import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef } from 'react'
import BgView1 from '../../components/BgView1'
import Button from '../../components/CustomButton'
import Header from '../../components/CustomHeader'
import { SIZES } from '../../constants'
import Title from '../../components/Title'
import { COLORS, FONTFAMILY, LABELS, SCREENS } from '../../constants/theme'
import OTPInputView from '@twotalltotems/react-native-otp-input';
export default function Verification(props) {
    const { navigation } = props
    const [code, setcode] = useState('');
    const inputRef = useRef(null);


    return (
        <BgView1 style={styles.container}>
            <Header hasBackArrow />
            <Title text={LABELS.Verification} />
            <Text style={styles.txt}>{LABELS.enterCode}</Text>
            <View style={styles.otpArea}>
                <OTPInputView
                    code={code}

                    pinCount={4}
                    ref={inputRef}
                    onCodeChanged={setcode}
                    autoFocusOnLoad={true}
                    codeInputFieldStyle={[styles.otp]}
                    codeInputHighlightStyle={[styles.otpSelected]}
                    style={styles.container}
                />
            </View>
            <Button title={LABELS.next} onPress={() => navigation.navigate(SCREENS.NewPassword)} />


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
    },
    otp: {
        borderRadius: SIZES.fifteen,
        height: SIZES.twenty * 4,
        width: SIZES.twenty * 4,
        fontSize: SIZES.twentyFive,
        fontFamily: FONTFAMILY.Medium,
        backgroundColor: "#4646C7", color: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.blackWithopacity,
        borderRadius: SIZES.ten,
        shadowColor: '#00000035',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 8.3,
        elevation: 13,
    },
    otpSelected: {
        borderRadius: SIZES.fifteen,
        fontSize: SIZES.twentyFive,
        fontFamily: FONTFAMILY.Medium,
        backgroundColor: "#4646C7", color: COLORS.white,
        borderWidth: 1.5,
        borderColor: COLORS.primary,
        borderRadius: SIZES.ten,
        shadowColor: '#00000035',
        shadowOffset: {
            width: 0,
            height: 6,
        }
    },
    otpArea: {
        height: SIZES.twenty * 3,
        marginVertical: SIZES.twenty
    }




})