import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BgView2 from '../../components/BgView2'
import CustomHeader from '../../components/CustomHeader'
import { SIZES } from '../../constants'
import { COLORS, LABELS, SCREENS } from '../../constants/theme'
import MyTouchableOpacity from '../../components/MyTouchableOpacity'
import Row from '../../components/Row'
import Icon, { IconType } from '../../components/Icons'
import LogOutModal from '../../components/Modals/LogOutModal'
import { useDispatch } from 'react-redux'
import { logOutNotVisible, logOutVisible } from '../../redux/Slices/Utiltities'
import { signOut } from '../../redux/Slices/UserData'
import auth from '@react-native-firebase/auth';


export default function Settings(props) {
    const { navigation } = props
    const dispatch = useDispatch()
    const OnPressSignout = () => {
        // setisLogoutModalVisible(false)
        dispatch(logOutNotVisible())
        setTimeout(async () => {
            await auth()
                .signOut()
                .then(() => console.log('User signed out!'));
            dispatch(signOut())
        }, 1000)
    }

    const RenderData = ({ item, index }) => {


        return (
            <MyTouchableOpacity onPress={() => {
                if (item.title === "Logout") {
                    dispatch(logOutVisible())
                } else {
                    navigation.navigate(item?.screen)
                }

            }
            } >
                <Row style={[styles.row, { borderBottomWidth: index + 1 === data.length ? 0 : 1 }]}>
                    <Text style={styles.txt} >
                        {item.title}
                    </Text>
                    <Icon
                        name="right"
                        type={IconType.AntDesign}
                        color={COLORS.white + 50}
                        size={SIZES.fifteen + 2}
                    />
                </Row>

            </MyTouchableOpacity>
        )
    }

    return (
        <BgView2>
            <CustomHeader
                style={{ marginLeft: SIZES.ten }}
                hasBackArrow
                title={LABELS.setting}
            />
            <FlatList
                contentContainerStyle={styles.container}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={RenderData}
            />
            {/* ===============>Logout Modal==========> */}

            <LogOutModal
                onYesPress={() => {
                    OnPressSignout()
                }}
                onNoPress={() => {
                    dispatch(logOutNotVisible())
                }}
            />
        </BgView2>
    )
}
const data = [
    {
        id: 1,
        title: "Personal Information",
        screen: SCREENS.personal

    },
    {
        id: 2,
        title: "Change Password",
        screen: SCREENS.changePassword
    },
    {
        id: 3,
        title: "Terms & Conditions",
        screen: SCREENS.TermsAndConditions

    },
    {
        id: 4,
        title: "Privacy Policy",
        screen: SCREENS.PrivacyAndPolicy

    },
    {
        id: 5,
        title: "Delete Account",
        screen: SCREENS.deleteAccount

    },
    {
        id: 6,
        title: "Logout",

    }
]

const styles = StyleSheet.create({
    row: {
        justifyContent: "space-between",
        paddingVertical: SIZES.ten,
        borderBottomColor: COLORS.white + 50
    },
    txt: {
        color: COLORS.white,
        fontSize: SIZES.fifteen - 1,
        fontWeight: "400",

    },
    container: {
        backgroundColor: COLORS.BtnBlueColor,
        borderRadius: SIZES.fifteen,
        margin: SIZES.twenty,
        padding: SIZES.twenty
    },

})