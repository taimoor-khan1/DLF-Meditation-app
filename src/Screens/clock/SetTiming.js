import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import BgView2 from '../../components/BgView2'
import CustomHeader from '../../components/CustomHeader'
import { COLORS, FONTS, height, IMAGES, LABELS, SCREENS, SIZES, STYLES, width } from '../../constants/theme'
import { Row } from 'native-base'
import Icon, { IconType } from '../../components/Icons'
import { Picker, DatePicker } from 'react-native-wheel-pick';
import Modal from 'react-native-modal';
import moment from 'moment'
import utils from '../../utils/index'
export default function SetTiming(props) {
    const { navigation } = props
    const [leadInModalVisible, setLeadInModalVisible] = useState(false);
    const [OutroModalVisible, setOutroModalVisible] = useState(false);
    const [minutes, setMinutes] = useState(0)
    const [preMinutes, setPreMinutes] = useState(0)
    const [second, setSeconds] = useState(0)
    const [preSecond, setPreSeconds] = useState(0)
    const [leadInMin, setLeadInMins] = useState(0)
    const [prevleadInMin, setPrevLeadInMins] = useState(0)
    const [leadInSec, setLeadInSec] = useState(5)
    const [PreleadInSec, setPreLeadInSec] = useState(5)
    const [outroMins, setOutroMins] = useState(0)
    const [preOutroMins, setPreOutroMins] = useState(0)
    const [outroSec, setOutroSec] = useState(20)
    const [PreoutroSec, setPreOutroSec] = useState(20)


    // ================timer Button ================
    const TimerButton = ({ label, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={[styles.timeBtn, {}]}>
                <Text style={[styles.btnText]}>
                    {label}
                </Text>
            </TouchableOpacity>
        )
    }
    useEffect(() => {

        if (leadInModalVisible === true) {
            setLeadInMins(0)
            setLeadInSec(0)
        }
    }, [leadInModalVisible])


    useEffect(() => {

        if (OutroModalVisible === true) {
            setOutroMins(0)
            setOutroSec(0)
        }

    }, [OutroModalVisible])




    return (
        <BgView2>
            <CustomHeader title={LABELS.setTiming}
                setting
                onSettingPress={() => {
                    navigation.navigate(SCREENS.setting)
                }}
            />
            {/* {================================================Main Timer================================================} */}
            <View style={{ flex: 1 }}>
                <View style={{ height: height * .25, }}>

                    {/* {================================================Main Timer================================================} */}
                    <Row
                        style={{
                            justifyContent: "space-between",
                            marginTop: SIZES.fifty,
                            alignItems: "center",
                            paddingHorizontal: SIZES.fifty * 1.8
                        }}
                    >
                        <Text style={[FONTS.mediumFont16, { color: COLORS.white }]}>Minutes</Text>
                        <Text style={[FONTS.mediumFont16, { color: COLORS.white }]}>Seconds</Text>
                    </Row>
                    <Row style={{ justifyContent: "space-between", justifyContent: "space-between", alignItems: "center", alignSelf: "center" }}>
                        <Picker
                            itemStyle={{ color: COLORS.white }}
                            textColor={COLORS.white}
                            style={styles.picker}
                            pickerData={timerData}
                            selectedValue={"20"}
                            onValueChange={value => {
                                const convertSeconds = Number(value) * 60
                                setMinutes(convertSeconds)
                            }}
                        />
                        <Text style={[{ fontSize: SIZES.twentyFive * 2, color: COLORS.white }]}>{" "}:{" "}</Text>
                        <Picker
                            itemStyle={{ color: COLORS.white }}
                            textColor={COLORS.white}
                            style={styles.picker}
                            pickerData={timerData}
                            onValueChange={value => {
                                setSeconds(Number(value))
                            }}
                        />
                    </Row>
                </View>
            </View>

            <View style={styles.TextField}>
                <TouchableOpacity onPress={() => { setLeadInModalVisible(true) }} style={[styles.row, {
                    borderBottomColor: COLORS.gray,
                    borderBottomWidth: 1,
                }]}>
                    <Text style={styles.txt}>
                        Lead-In Time
                    </Text>
                    <Row style={{ alignItems: "center" }}>
                        <Text style={[styles.txt, { fontSize: SIZES.fifteen }]}>
                            {`${leadInMin}:${leadInSec} `}
                            {leadInMin !== 0 ? "Minutes" : "Seconds"}
                        </Text>
                        <Icon
                            name="right"
                            type={IconType.AntDesign}
                            color={COLORS.gray}
                            size={SIZES.fifteen + 2}
                        />
                    </Row>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setOutroModalVisible(true) }} style={styles.row} >
                    <Text style={styles.txt}>
                        Outro Time
                    </Text>
                    <Row style={{ alignItems: "center" }}>
                        <Text style={[styles.txt, { fontSize: SIZES.fifteen }]}>
                            {`${outroMins}:${outroSec} `}
                            {outroMins !== 0 ? "Minutes" : "Seconds"}
                        </Text>
                        <Icon
                            name="right"
                            type={IconType.AntDesign}
                            color={COLORS.gray}
                            size={SIZES.fifteen + 2}
                        />
                    </Row>
                </TouchableOpacity>
            </View>

            {/* {================================================Start button================================================} */}
            <View style={{ marginBottom: SIZES.fifty, }}>
                <TimerButton label={"Start"}
                    onPress={() => {
                        var duration = 0
                        if (leadInSec === 0 && leadInMin === 0) {
                            setMinutes(preMinutes)
                            setSeconds(preSecond)
                            duration = Number(minutes) + Number(second)
                        } else {
                            setPreLeadInSec(leadInSec)
                            setPrevLeadInMins(leadInMin)
                            duration = Number(minutes) + Number(second)
                        }
                        var leadIn = (Number(leadInMin) * 60) + Number(leadInSec)
                        var outro = (Number(outroMins) * 60) + Number(outroSec)
                        // if (duration === 0) {
                        //     utils.errorAlert("Kindly set meditation time please ")
                        // } else {
                        navigation.navigate(SCREENS.Timer, { duration1: duration, LeadIn: leadIn, Outro: outro })
                        // }
                    }}
                />
            </View>
            {/* {================================================Lead in Timer Modal================================================} */}
            <Modal
                isVisible={leadInModalVisible}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}
            >
                <View style={{ marginHorizontal: -SIZES.twentyFive, paddingHorizontal: SIZES.twenty }}>
                    <View
                        source={IMAGES.DarkBg2}
                        style={{
                            backgroundColor: COLORS.golden,
                            borderRadius: SIZES.twentyFive,
                        }}>
                        <Image source={IMAGES.purpleBg} style={{ borderRadius: SIZES.twentyFive, width: '100%', height: "100%", position: "absolute", zIndex: -100 }} />
                        <View
                            style={{ paddingVertical: SIZES.twentyFive }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    if (leadInSec === 0 && leadInMin === 0) {
                                        setLeadInSec(PreleadInSec)
                                        setLeadInMins(prevleadInMin)
                                        setLeadInModalVisible(false);
                                    } else {
                                        setPreLeadInSec(leadInSec)
                                        setPrevLeadInMins(leadInMin)
                                        setLeadInModalVisible(false);

                                    }
                                }}
                                style={{ zIndex: 1000, position: "absolute", backgroundColor: COLORS.black, padding: SIZES.five - 2, borderRadius: SIZES.twentyFive, right: SIZES.ten, top: SIZES.ten }}>
                                <Icon
                                    name="cross"
                                    type={IconType.Entypo}
                                    color={COLORS.white}
                                />
                            </TouchableOpacity>

                            <Row style={{ justifyContent: "space-between", marginVertical: SIZES.fifteen, alignItems: "center", paddingHorizontal: SIZES.fifty * 1.5 }}>
                                <Text style={[FONTS.mediumFont16, { color: COLORS.white }]}>Minutes</Text>
                                <Text style={[FONTS.mediumFont16, { color: COLORS.white }]}>Seconds</Text>
                            </Row>
                            <Row style={{ justifyContent: "space-between", justifyContent: "space-between", alignItems: "center", alignSelf: "center" }}>
                                <Picker
                                    itemStyle={{ color: COLORS.white }}
                                    textColor={COLORS.white}
                                    style={styles.picker}
                                    pickerData={timerData}
                                    selectedValue="00"
                                    onValueChange={value => {
                                        console.log("value: ", typeof value)
                                        if (value !== "00") {
                                            setLeadInMins(Number(value))
                                        }
                                    }}
                                />
                                <Text style={[{ fontSize: SIZES.twentyFive * 1.5, color: COLORS.white }]}>{" "}:{" "}</Text>
                                <Picker
                                    itemStyle={{ color: COLORS.white }}
                                    textColor={COLORS.white}
                                    style={styles.picker}
                                    pickerData={timerData}
                                    onValueChange={value => {
                                        setLeadInSec(Number(value))
                                    }}
                                />
                            </Row>

                            {/* {================================================Start button================================================} */}
                            <TimerButton label={"Set"} onPress={() => {
                                if (leadInSec === 0 && leadInMin === 0) {
                                    setLeadInSec(PreleadInSec)
                                    setLeadInMins(prevleadInMin)
                                    setLeadInModalVisible(false);
                                } else {
                                    setPreLeadInSec(leadInSec)
                                    setPrevLeadInMins(leadInMin)
                                    setLeadInModalVisible(false);

                                }
                            }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            {/* {================================================Outro Time Modal================================================} */}
            <Modal
                isVisible={OutroModalVisible}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}
            >
                <View style={{ marginHorizontal: -SIZES.twentyFive, paddingHorizontal: SIZES.twenty }}>
                    <View
                        source={IMAGES.DarkBg2}
                        style={{
                            backgroundColor: COLORS.golden,
                            borderRadius: SIZES.twentyFive,
                        }}>
                        <Image source={IMAGES.purpleBg} style={{ borderRadius: SIZES.twentyFive, width: '100%', height: "100%", position: "absolute", zIndex: -100 }} />
                        <View style={{ paddingVertical: SIZES.twentyFive }}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (outroMins === 0 && outroSec === 0) {
                                        setOutroModalVisible(false);
                                        setOutroMins(preOutroMins)
                                        setOutroSec(PreoutroSec)
                                    } else {
                                        setPreOutroMins(outroMins)
                                        setPreOutroSec(outroSec)
                                        setOutroModalVisible(false);
                                    }
                                }}
                                style={{ zIndex: 1000, position: "absolute", backgroundColor: COLORS.black, padding: SIZES.five - 2, borderRadius: SIZES.twentyFive, right: SIZES.ten, top: SIZES.ten }}>
                                <Icon
                                    name="cross"
                                    type={IconType.Entypo}
                                    color={COLORS.white}
                                />
                            </TouchableOpacity>
                            <Row
                                style={{
                                    justifyContent: "space-between",
                                    marginVertical: SIZES.fifteen,
                                    alignItems: "center",
                                    paddingHorizontal: SIZES.fifty * 1.5
                                }}>
                                <Text style={[FONTS.mediumFont16, { color: COLORS.white }]}>Minutes</Text>
                                <Text style={[FONTS.mediumFont16, { color: COLORS.white }]}>Seconds</Text>
                            </Row>
                            <Row style={{ justifyContent: "space-between", justifyContent: "space-between", alignItems: "center", alignSelf: "center" }}>
                                <Picker
                                    itemStyle={{ color: COLORS.white }}
                                    textColor={COLORS.white}
                                    style={styles.picker}
                                    pickerData={timerData}
                                    selectedValue="00"
                                    onValueChange={value => {
                                        setOutroMins(Number(value))
                                    }}
                                />
                                <Text style={[{ fontSize: SIZES.twentyFive * 1.5, color: COLORS.white }]}>{" "}:{" "}</Text>
                                <Picker
                                    itemStyle={{ color: COLORS.white }}
                                    textColor={COLORS.white}
                                    style={styles.picker}
                                    pickerData={timerData}
                                    onValueChange={value => {
                                        setOutroSec(Number(value))
                                    }}
                                />
                            </Row>
                            {/* {================================================Start button================================================} */}
                            <TimerButton label={"Set"} onPress={() => {

                                if (outroMins === 0 && outroSec === 0) {
                                    setOutroModalVisible(false);
                                    setOutroMins(preOutroMins)
                                    setOutroSec(PreoutroSec)

                                } else {
                                    setPreOutroMins(outroMins)
                                    setPreOutroSec(outroSec)
                                    setOutroModalVisible(false);
                                }
                            }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </BgView2>
    )
}
const timerData = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",

]

const styles = StyleSheet.create({
    TextField: {
        backgroundColor: COLORS.BtnBlueColor,
        borderRadius: SIZES.ten,
        padding: SIZES.fifteen,
        margin: SIZES.fifteen,
    },
    txt: {
        color: COLORS.white,
        fontSize: SIZES.fifteen + 2,
        textAlign: "justify",
        marginRight: SIZES.ten
    },
    row: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: SIZES.ten,
        flexDirection: "row"

    },
    picker: {
        backgroundColor: COLORS.transparent,
        // width: SIZES.fifty * 1.5,
        width: Platform.OS === "ios" ? SIZES.fifty * 2 : SIZES.fifty * 1.5,
    },
    timeBtn: {

        marginBottom: SIZES.fifty,
        backgroundColor: COLORS.black + 80,
        height: SIZES.twentyFive * 2,
        width: SIZES.fifty * 1.5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.twentyFive,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        alignSelf: "center",
        marginTop: SIZES.twenty * 2
    }, btnText: {
        color: COLORS.white, shadowColor: COLORS.white,
        color: COLORS.white,
        fontSize: SIZES.fifteen
    },
})