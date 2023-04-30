import { StyleSheet, Text, View, Keyboard } from 'react-native'
import React from 'react'
import BgView2 from '../../components/BgView2'
import CustomHeader from '../../components/CustomHeader'
import { SIZES } from '../../constants'
import { COLORS, LABELS } from '../../constants/theme'
import { useState } from 'react'
import EditText from '../../components/EditText'
import Button from '../../components/CustomButton'
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux'
import utils from '../../utils'
import { startLoading, stopLoading } from '../../redux/Slices/Utiltities'
import { setdata } from '../../redux/Slices/UserData'

export default function PersonalInformation() {
    const { data } = useSelector(state => state.UserData);
    const dispatch = useDispatch()
    const name = data?.displayName.split('#');
    const [firstName, setFirstName] = useState(name[0])
    const [lastName, setLastName] = useState(name[1])
    const UpdateName = async () => {
        try {
            if (firstName !== "" && firstName !== null) {
                dispatch(startLoading())
                await auth().currentUser.updateProfile({ displayName: `${firstName}#${lastName}` }).then(() => {
                    dispatch(stopLoading())
                    utils.successAlert("Name updated successfully")
                    dispatch(setdata(auth().currentUser))
                    Keyboard.dismiss()
                }).catch(() => {
                    dispatch(stopLoading())

                    console.log("error hy bhai yaha bhi")
                })
            }
            else {
                utils.errorAlert("Kindly enter your name ")
            }



        } catch (error) {
            dispatch(stopLoading())
            console.log("Catch karlia bhai error======", error)
        }

    }

    return (
        <BgView2>
            <CustomHeader
                style={{ marginLeft: SIZES.ten }}
                hasBackArrow title={LABELS.personal} />
            <View style={styles.conatiner}>
                <EditText
                    value={firstName}
                    onChangeText={(e) => setFirstName(e)}
                    user={true}
                    placeholder={"First name"}
                />
                {firstName === "" && <Text style={styles.error}>Kindly enter your name</Text>}
                <EditText
                    value={lastName}
                    onChangeText={(e) => setLastName(e)}
                    user={true}
                    placeholder={"Last name"}
                />
                <Button
                    title={"Save"} onPress={() => { UpdateName() }} />
            </View>

        </BgView2>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        padding: SIZES.fifteen
    },
    error: {
        color: COLORS.Red,
        marginTop: SIZES.ten
    }
})