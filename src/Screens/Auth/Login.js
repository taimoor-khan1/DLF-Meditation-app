import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BgView1 from '../../components/BgView1'
import Button from '../../components/CustomButton'
import { SIZES } from '../../constants'
import Title from '../../components/Title'
import { COLORS, LABELS, SCREENS } from '../../constants/theme'
import EditText from '../../components/EditText'
import Icon, { IconType } from '../../components/Icons'
import auth from '@react-native-firebase/auth';
import utils from "../../utils"
import { useDispatch } from 'react-redux'
import { startLoading, stopLoading } from '../../redux/Slices/Utiltities'
import { setdata } from '../../redux/Slices/UserData'
import analytics from '@react-native-firebase/analytics';
import BgView2 from '../../components/BgView2'

export default function Login(props) {
    const { navigation } = props
    const [email, setEmail] = useState(__DEV__ ? "taimoor1@yopmail.com" : null)
    const [password, setPassword] = useState(__DEV__ ? "Taimoor123!@" : null)
    const dispacth = useDispatch();



    const onLoginPress = async () => {
        if (email !== null && email !== "" && password !== null && password !== "") {
            dispacth(startLoading())
            auth().signInWithEmailAndPassword(email, password).then(async () => {
                const user = auth().currentUser;
                dispacth(setdata(user))
                await analytics().logEvent('basket', {
                    Email: email,
                })

                // user.providerData.forEach((userInfo) => {
                //     dispacth(setdata(userInfo))
                //     console.log('User info for provider: ', userInfo);
                // });

                utils.successAlert("Login successful")
                dispacth(stopLoading())
            }
            ).catch((e) => {
                dispacth(stopLoading())

                if (e.code === "auth/wrong-password") {
                    utils.errorAlert("Incorrect password")
                }
                if (e.code === "auth/user-not-found") {

                    utils.errorAlert("Wrong email or password")
                }
                console.log(e)

            })
        }
        else {
            if (email === null || email === "" && password === null || password === "") {
                utils.errorAlert("Kindly enter email and password")
            } else

                if (email == null || email === "") {
                    utils.errorAlert("Kindly enter email")
                } else
                    if (password === null || password === "") {
                        utils.errorAlert("Kindly enter password")
                    }
        }
    }
    return (
        <BgView2 style={styles.container}>
            <Title text={LABELS.login} />
            <EditText
                value={email}
                onChangeText={(e) => setEmail(e)}
                email={true}
                placeholder={LABELS.email}
            />
            {email !== null && utils.validateEmail(email) === false && <Text style={styles.error}>Email not valid</Text>}
            <EditText
                value={password}
                onChangeText={(e) => setPassword(e)}
                password={true}
                placeholder={LABELS.password}
            />
            {password === '' && <Text style={styles.error}>Please enter your password</Text>}
            <Text style={[styles.txt]}
                onPress={() => {
                    navigation.navigate(SCREENS.ForgotPassword)
                }}
            >{LABELS.forget}</Text>
            <Button title={LABELS.login} onPress={() => onLoginPress()} />
            <Text style={[styles.SignUp, { color: COLORS.white }]}
            >{LABELS.dont}
                <Text style={{ color: COLORS.BtnYellowColor, fontWeight: "600" }} onPress={() => {
                    navigation.navigate(SCREENS.SignUp)
                }}>{" "}{LABELS.signUP}</Text></Text>

        </BgView2>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SIZES.fifteen,
    }, txt: {
        paddingTop: SIZES.ten,
        fontSize: SIZES.fifteen,
        alignSelf: "flex-end",
        textDecorationLine: 'underline',
        color: COLORS.white,
        marginBottom: SIZES.ten,
        fontWeight: "500"
    },
    SignUp: {
        marginTop: SIZES.twenty,
        fontSize: SIZES.fifteen,
        alignSelf: "center",
        color: COLORS.white
    },
    error: {
        color: COLORS.Red,
        marginTop: SIZES.ten,
    }
})