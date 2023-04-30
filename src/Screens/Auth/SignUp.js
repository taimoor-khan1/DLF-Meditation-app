import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal';
import BgView1 from '../../components/BgView1'
import Button from '../../components/CustomButton'
import { SIZES } from '../../constants'
import Title from '../../components/Title'
import { COLORS, IMAGES, LABELS, SCREENS, width } from '../../constants/theme'
import EditText from '../../components/EditText'
import Row from '../../components/Row'
import Icon, { IconType } from '../../components/Icons'
import auth from '@react-native-firebase/auth';
import utils from "../../utils"
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading } from '../../redux/Slices/Utiltities';
import { setdata } from '../../redux/Slices/UserData';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import BgView2 from '../../components/BgView2';


export default function SignUp(props) {
    const { navigation } = props
    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [Selected, setSelected] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const dispacth = useDispatch();


    const SignupPress = async () => {
        if (firstName !== null && firstName !== "") {
            if (lastName !== null && lastName !== "") {

                if (email !== null && email !== "" && password !== null && password !== "") {
                    if (password === confirmPassword) {
                        dispacth(startLoading())
                        await auth()
                            .createUserWithEmailAndPassword(email, password)
                            .then(async () => {
                                utils.successAlert("User account created & signed in")
                                await auth().currentUser.updateProfile({ displayName: `${firstName}#${lastName}` }).then(() => {
                                    dispacth(stopLoading())
                                    dispacth(setdata(auth().currentUser))
                                }).catch(() => {
                                    dispacth(stopLoading())
                                    console.log("error hy bhai yaha bhi")
                                })
                            })
                            .catch(error => {
                                dispacth(stopLoading())
                                console.log("err=========", error)
                                if (error.code === 'auth/email-already-in-use') {
                                    utils.errorAlert("That email address is already in use!")
                                }
                                if (error.code === 'auth/weak-password') {
                                    utils.errorAlert("The given password is invalid or weak!")
                                }
                                if (error.code === 'auth/invalid-email') {
                                    utils.errorAlert("That email address is invalid!")
                                }
                                // utils.errorAlert(error)

                            });
                    }
                    else {
                        utils.errorAlert("Passwords do not match")
                    }
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
            else {
                utils.errorAlert("Kindly enter your last name")
            }

        } else {
            utils.errorAlert("Kindly enter your name")
        }


    }



    return (
        <BgView2 style={styles.container}>
            <Title text={LABELS.signUP} />
            <ScrollView style={{ flexGrow: 1 }}>
                <EditText
                    value={firstName}
                    onChangeText={(e) => setFirstName(e)}
                    user={true}
                    placeholder={"First name"}
                />
                {firstName === "" && <Text style={styles.error}>Please enter your name</Text>}
                <EditText
                    value={lastName}
                    onChangeText={(e) => setLastName(e)}
                    user={true}
                    placeholder={"Last name"}
                />
                {lastName === "" && <Text style={styles.error}>Please enter your name</Text>}
                <EditText
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                    email={true}
                    // placeholder={LABELS.email}
                    placeholder={'Email address'}
                />
                {email === "" && <Text style={styles.error}>Please enter your email</Text>}
                <EditText
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    password={true}
                    // placeholder={LABELS.password}
                    placeholder={"Password"}
                />
                {password === "" && <Text style={styles.error}>Please enter your password</Text>}

                <EditText
                    value={confirmPassword}
                    onChangeText={(e) => setConfirmPassword(e)}
                    password={true}
                    // placeholder={LABELS.confirmPassword}
                    placeholder={"Confirm password"}
                />
                {confirmPassword !== null && password !== confirmPassword && <Text style={styles.error}>Password does not match</Text>}

                <Text style={[styles.TMText]}>
                    Are you trained in TM?
                </Text>

                <Row style={{ alignItems: "center", marginBottom: SIZES.ten, }}>
                    <MyTouchableOpacity
                        onPress={() => {
                            setSelected(true)
                        }}
                    >
                        <Image
                            style={{ width: SIZES.twenty, height: SIZES.twenty }}
                            resizeMode="contain"
                            source={Selected !== null && Selected ? IMAGES.SelectedCheck : IMAGES.unSelectedCheck}
                        />
                    </MyTouchableOpacity>

                    <Text style={[styles.TM, { marginHorizontal: SIZES.ten }]}>
                        YES
                    </Text>
                </Row>
                <Row style={{ alignItems: "center", marginBottom: SIZES.ten }}>
                    <MyTouchableOpacity
                        onPress={() => {
                            setSelected(false)
                        }}
                    >
                        <Image
                            style={{ width: SIZES.twenty, height: SIZES.twenty }}
                            resizeMode="contain"
                            source={Selected !== null && !Selected ? IMAGES.SelectedCheck : IMAGES.unSelectedCheck}
                        />
                    </MyTouchableOpacity>

                    {/* <Icon
                        onPress={() => {
                            setSelected(false)
                        }}
                        name={Selected !== null && !Selected ? "radio-button-checked" : "radio-button-off"}
                        type={IconType.MaterialIcons}
                        color={Selected !== null && !Selected ? COLORS.BtnYellowColor : COLORS.white}
                    /> */}
                    <Text style={[styles.TM, { marginHorizontal: SIZES.ten }]}>
                        No
                    </Text>
                </Row>

                <Button title={LABELS.signUP} onPress={() =>
                    // navigation.navigate(SCREENS.tabs)
                    SignupPress()
                }
                />
                <Text style={[styles.SignUp, { color: COLORS.white, marginVertical: SIZES.ten }]}
                    onPress={() => {
                        navigation.navigate(SCREENS.Login)
                    }}

                >{LABELS.already}<Text style={{ color: COLORS.BtnYellowColor }}>{" "}{LABELS.login}</Text></Text>
                <Text style={[styles.txt]}
                    onPress={() => {
                        setVisible(true);
                    }}
                >{LABELS.why}</Text>
            </ScrollView>

            <Modal visible={visible}

            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.black + 90, margin: -SIZES.twenty, paddingHorizontal: SIZES.twenty }}>


                    <View
                        style={{ backgroundColor: COLORS.BtnBlueColor, padding: SIZES.twenty, borderRadius: SIZES.ten }} >
                        <TouchableOpacity
                            onPress={() => {
                                setVisible(false);
                            }}
                            style={{ position: "absolute", backgroundColor: COLORS.black, padding: SIZES.five - 2, borderRadius: SIZES.twentyFive, right: SIZES.ten, top: SIZES.ten }}>
                            <Icon
                                name="cross"
                                type={IconType.Entypo}
                                color={COLORS.white}
                                size={SIZES.fifteen + 2}
                            />
                        </TouchableOpacity>
                        <Text style={[styles.whyHeading]}

                        >{LABELS.why}</Text>
                        <Text style={[styles.content]}
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec venenatis purus, id fermentum neque. Sed dapibus lacinia sem, sit amet sagittis nulla rutrum eu. Nulla vestibulum posuere lacus, at dictum nunc ultrices ut. Fusce a nisl sodales, pharetra metus aliquet, ornare nibh. Integer nisi sem,
                        </Text>
                        <Text style={[styles.content]}
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec venenatis purus, id fermentum neque. Sed dapibus lacinia sem, sit amet sagittis nulla rutrum eu. Nulla vestibulum posuere lacus, at dictum nunc ultrices ut. Fusce a nisl sodales, pharetra metus aliquet, ornare nibh. Integer nisi sem,
                        </Text>
                    </View>
                </View>
            </Modal>
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
        textDecorationLine: 'underline'

    },
    SignUp: {
        paddingTop: SIZES.ten,
        fontSize: SIZES.fifteen,
        alignSelf: "center"
    },
    txt: {
        marginTop: SIZES.five,
        fontSize: SIZES.fifteen,
        alignSelf: "center",
        textDecorationLine: 'underline',
        color: COLORS.BtnYellowColor,

    }, whyHeading: {
        fontSize: SIZES.twentyFive,
        color: COLORS.BtnYellowColor,
        fontWeight: "500",
        marginBottom: SIZES.ten,
        marginRight: SIZES.fifteen,

    },
    content: {
        color: COLORS.white,
        fontSize: SIZES.fifteen,
        textAlign: "justify",
        marginVertical: SIZES.five
    }, TM: {
        color: COLORS.white,
        // backgroundColor: COLORS.textGrey
    },
    TMText: {
        color: COLORS.white,
        marginTop: SIZES.twenty,
        marginBottom: SIZES.ten
    },
    error: {
        color: COLORS.Red,
        marginTop: SIZES.ten
    }
})