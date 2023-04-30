import { StyleSheet, Text, View, Keyboard } from 'react-native'
import React, { useState } from 'react'
import BgView1 from '../../components/BgView1'
import Button from '../../components/CustomButton'
import Header from '../../components/CustomHeader'
import { SIZES } from '../../constants'
import { COLORS, LABELS, SCREENS } from '../../constants/theme'
import EditText from '../../components/EditText'

import { useDispatch, useSelector } from 'react-redux'
import auth from '@react-native-firebase/auth';
// import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { startLoading, stopLoading } from '../../redux/Slices/Utiltities'
import utils from '../../utils'
import BgView2 from '../../components/BgView2'


export default function ChangePassword(props) {
    const dispacth = useDispatch();
    const { navigation } = props

    const [NewPassword, setNewPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [currentPassword, setCurrentPassword] = useState(null)
    const { data } = useSelector(state => state.UserData);



    const onPress = async () => {

        console.log("in function")
        try {
            dispacth(startLoading())
            await auth().signInWithEmailAndPassword(data?.email, currentPassword).then(() => {
                console.log("success")
                dispacth(stopLoading())
                auth().currentUser.updatePassword(NewPassword).then(() => {
                    console.log("successfully updated")
                    setNewPassword(null)
                    setCurrentPassword(null)
                    setConfirmPassword('')
                    utils.successAlert("Password updated successfully")
                    Keyboard.dismiss()
                }).catch((e) => {
                    console.log("error", e)
                    if (e.code === 'auth/weak-password') {
                        utils.errorAlert("The given password is invalid or weak!")
                    }
                })
                dispacth(stopLoading())

                Keyboard.dismiss()


            }).catch((e) => {
                dispacth(stopLoading())

                console.log("error", e)
                utils.errorAlert("Password not match")
            })
        } catch (error) {
            console.log("error=======", error)
            dispacth(stopLoading())
        }
        // dispacth(startLoading())
        // auth().sendPasswordResetEmail(email).then((e) => {
        //     dispacth(stopLoading())
        //     utils.successAlert("We've sent the Forget Password link on your email, Please check your Inbox ")
        //     navigation.navigate(SCREENS.Login)
        // }).catch((e) => {
        //     dispacth(stopLoading())
        //     if (e.code === "auth/user-not-found") {
        //         utils.errorAlert("Invalid Email")
        //     }
        //     console.log(e)
        // })

    }

    return (
        <BgView2 style={styles.container}>

            <Header
                title={LABELS.changePassword}
                hasBackArrow
            />

            <EditText
                value={currentPassword}
                onChangeText={(e) => setCurrentPassword(e)}
                password={true}
                placeholder={"Current password"}
            />
            {currentPassword === '' && <Text style={styles.error}>Kindly enter password</Text>}
            <Text style={styles.txt}>You must enter your password in order to change your password.</Text>
            <EditText
                value={NewPassword}
                onChangeText={(e) => setNewPassword(e)}
                password={true}
                placeholder={"New password"}
            />
            {NewPassword === '' && <Text style={styles.error}>Kindly enter new password</Text>}

            <EditText
                value={confirmPassword}
                onChangeText={(e) => setConfirmPassword(e)}
                password={true}
                placeholder={"Confirm password"}
            />
            {confirmPassword !== "" && NewPassword !== confirmPassword && <Text style={styles.error}>Password does not match</Text>}


            <Button
                btnStyle={styles.btn} title={LABELS.update} onPress={() => {
                    if (currentPassword !== null && currentPassword !== "") {
                        if (NewPassword !== null && NewPassword !== "" && confirmPassword !== null && confirmPassword !== "") {
                            if (NewPassword !== currentPassword) {
                                onPress()
                            } else {
                                utils.errorAlert("Password must be different")
                            }
                        } else {
                            if (NewPassword === null) {
                                setNewPassword("")
                            } else if (confirmPassword === "") {
                                utils.errorAlert("Kindly enter confirm password")

                            }
                        }
                    } else {
                        setCurrentPassword("")
                    }

                }
                } />


        </BgView2>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SIZES.twenty,
    }, txt: {
        paddingTop: SIZES.fifteen,
        color: COLORS.white
    },
    SignUp: {
        paddingTop: SIZES.ten,
        fontSize: SIZES.fifteen,
        alignSelf: "center"
    },
    btn: {
        marginTop: SIZES.twentyFive
    },
    error: {
        color: COLORS.Red,
        marginTop: SIZES.ten,
    },
    txt: {
        marginTop: 6,
        fontSize: 11,
        lineHeight: 16.5,
        color: COLORS.white,
        fontWeight: "400"
    },
})