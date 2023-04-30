import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BgView1 from '../../components/BgView1'
import Button from '../../components/CustomButton'
import Header from '../../components/CustomHeader'
import { SIZES } from '../../constants'
import Title from '../../components/Title'
import { COLORS, LABELS, SCREENS } from '../../constants/theme'
import EditText from '../../components/EditText'
import Icon, { IconType } from '../../components/Icons'
import { useDispatch, useSelector } from 'react-redux'
import auth from '@react-native-firebase/auth';
// import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { startLoading, stopLoading } from '../../redux/Slices/Utiltities'
import utils from '../../utils'
import BgView2 from '../../components/BgView2'


export default function ForgetPassword(props) {
    const dispacth = useDispatch();
    const { navigation } = props
    const [email, setEmail] = useState(null)


    const onPress = () => {
        if (email !== null && email !== "") {
            dispacth(startLoading())

            auth().sendPasswordResetEmail(email).then((e) => {
                dispacth(stopLoading())
                utils.successAlert("We've sent the Forget Password link on your email, Please check your Inbox ")
                navigation.navigate(SCREENS.Login)
            }).catch((e) => {
                dispacth(stopLoading())
                if (e.code === "auth/user-not-found") {

                    utils.errorAlert("The email is invalid")
                }

                console.log(e)
            })
        } else {
            utils.errorAlert("Please enter your email")
        }
    }

    return (
        <BgView2 style={styles.container}>

            <Header hasBackArrow />
            <Title text={LABELS.forgetPassword} style={{
                marginTop: SIZES.ten,
                marginBottom: 0
            }} />
            <Text style={styles.txt}>{LABELS.enter}</Text>
            <EditText
                value={email}
                onChangeText={(e) => setEmail(e)}
                email={true}
                placeholder={LABELS.email}
            />
            {email === '' && <Text style={styles.error}>Please enter Email</Text>}
            <Button btnStyle={styles.btn} title={LABELS.next} onPress={() => onPress()} />


        </BgView2>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SIZES.twenty,
    }, txt: {
        paddingTop: SIZES.fifteen,
        fontSize: SIZES.twenty / 1.1,
        color: COLORS.white + 60,
        marginBottom: SIZES.ten
    },
    SignUp: {
        paddingTop: SIZES.ten,
        fontSize: SIZES.fifteen,
        alignSelf: "center"
    }, btn: {
        marginTop: SIZES.twentyFive + 20
    },
    error: {
        color: COLORS.Red,
        marginTop: SIZES.ten,
    }
})