import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BgView2 from '../../components/BgView2'
import CustomHeader from '../../components/CustomHeader'
import { SIZES } from '../../constants'
import { COLORS, LABELS } from '../../constants/theme'
import EditText from '../../components/EditText'
import auth from '@react-native-firebase/auth';
import Button from '../../components/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../redux/Slices/UserData'
import utils from '../../utils'
import { startLoading, stopLoading } from '../../redux/Slices/Utiltities'


export default function DeleteAccount() {
    const [password, setPassword] = useState(" ")
    const { data } = useSelector(state => state.UserData);

    const dispatch = useDispatch()
    const deleteAccount = async () => {

        dispatch(startLoading())
        try {
            // dispatch(stopLoading())
            await auth().signInWithEmailAndPassword(data?.email, password).then(() => {
                console.log("success")
                auth().currentUser.delete().then(() => {
                    dispatch(signOut())
                    dispatch(stopLoading())

                }).catch((error) => {
                    console.log(error, "error")
                })
            }).catch((e) => {
                dispatch(stopLoading())

                console.log("error", e)
                utils.errorAlert("Password not match")
            })
        } catch (error) {
            console.log("error=======", error)
            dispatch(stopLoading())
        }



    }

    return (
        <BgView2 >
            <CustomHeader
                style={{ marginLeft: SIZES.ten }}
                hasBackArrow title={LABELS.deleteAccount} />
            <View style={styles.container}>
                <EditText
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    password={true}
                    placeholder={LABELS.password}
                />
                <Text style={styles.txt}>You must enter your password in order to delete your account.</Text>
                <Button
                    titleStyle={{ color: COLORS.white }}
                    btnStyle={styles.btn} title={LABELS.deleteAccount} onPress={() => deleteAccount()} />
            </View>

        </BgView2>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#E03F34"
    },
    container: {
        paddingHorizontal: SIZES.twenty
    }, txt: {
        color: COLORS.white,
        fontSize: 11,
        marginTop: SIZES.ten,
    }


})