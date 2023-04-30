import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import BgView2 from '../../components/BgView2'
import CustomHeader from '../../components/CustomHeader'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { COLORS, IMAGES, SIZES, width } from '../../constants'
import Row from '../../components/Row'
import Sound from 'react-native-sound'

import { FONTS, height, LABELS, SCREENS, STYLES, tune } from '../../constants/theme'
import BgView3 from '../../components/BgView3'

export default function Timer(props) {
    const { navigation, route } = props
    const { duration1, LeadIn, Outro } = route?.params
    // console.log("Previous Set Meditaion", duration1)
    // console.log("Previous Set LeadIn", LeadIn)
    // console.log("Previous Set Outro", Outro)
    const [play, setPlay] = useState(false)
    const [key, setkey] = useState(0)
    const [Restart, setRestart] = useState(false)
    const [startBtn, setStartBtn] = useState("Start")
    const [canelBtn, setCancelBtn] = useState("Cancel")
    const [title, setTitle] = useState(LABELS.leadinTime)
    const [leadIn, setLeadIn] = useState(LeadIn)
    const [outro, setOutro] = useState(Outro)
    const [duration, setDuration] = useState(leadIn)
    const [mediationTime, setMediationTime] = useState(duration1 === 0 ? 20 * 60 : duration1)
    const [timerSeconds, setTimerSeconds] = useState(0)
    const [timerMinutes, setTimerMinutes] = useState(0)
    const [CountOutro, setCountOutro] = useState(0)
    const [CountMeditate, setCountMeditate] = useState(0)
    const [remainTime, setRemainTime] = useState(0)
    const [bell, setBell] = useState()



    useEffect(() => {
        var ding
        Sound.setCategory('Playback');
        ding = new Sound('tingshabell.mp3', Sound.MAIN_BUNDLE);

        setBell(ding)

    }, [])


    useEffect(() => {
        setkey(prevKey => prevKey + 1)
        if (play) {
            setStartBtn("Pause")
            setCancelBtn("Reset")
        }
        else {
            setStartBtn("Start")
            setCancelBtn("Cancel")
        }

    }, [duration])
    useEffect(() => {
        if (play) {
            setStartBtn("Pause")
            setCancelBtn("Reset")

        }
        else {

            // bell.stop(() => {

            // })
            setStartBtn("Start")
            setCancelBtn("Cancel")
        }

    }, [key])





    // ================timer Remaining time================
    const children = ({ remainingTime }) => {
        setRemainTime(remainingTime)
        if (leadIn !== 0) {
            setTitle(LABELS.leadinTime)
            setLeadIn(remainingTime)
        } else if (leadIn === 0 && mediationTime !== 0) {
            setMediationTime(remainingTime)
        }
        if (remainingTime === 0) {
            if (leadIn !== 0) {

                setLeadIn(remainingTime)
            }
            else if (leadIn === 0 && mediationTime !== 0) {
                if (duration1 === LeadIn) {
                    if (CountMeditate === 0) {
                        setkey(prevKey => prevKey + 1)
                        setTitle(LABELS.OutroTime)
                        setCountMeditate(1)
                        // setStartBtn("Pause")
                        // setCancelBtn("Reset")
                    }
                }
                else {
                    setDuration(outro)
                    setTitle(LABELS.OutroTime)
                }

                setDuration(mediationTime)
                setTitle(LABELS.meditate)

            } else
                if (leadIn === 0 && mediationTime === 0) {

                    if (duration1 === outro) {
                        if (CountOutro === 0) {
                            setkey(prevKey => prevKey + 1)
                            setTitle(LABELS.OutroTime)
                            // setStartBtn("Pause")
                            // setCancelBtn("Reset")
                            setCountOutro(1)
                        }

                    }
                    else {
                        setDuration(outro)
                        setTitle(LABELS.OutroTime)
                    }

                }
        }
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60
        var remain = 0
        if (minutes.toString().length < 2) {
            setTimerMinutes(`${"0"}${minutes}`)
        }
        else {
            setTimerMinutes(`${minutes}`)
        }
        if (seconds.toString().length < 2) {
            setTimerSeconds(`${"0"}${seconds}`)
        }
        else {
            setTimerSeconds(`${seconds}`)
        }

        // if (hours !== 0) {
        //     return remain = `${timerHours}:${timerMinutes}:${timerSeconds}`
        // }
        // else
        if (minutes !== 0) {

            return remain = `${timerMinutes}:${timerSeconds}`

        } else {
            return remain = `${timerSeconds}`
        }
    }
    // ================timer Button ================
    const TimerButton = ({ label, onPress, btnstyle }) => {
        return (
            <TouchableOpacity onPress={onPress} style={[styles.timeBtn, btnstyle, {}]}>
                <Text style={[styles.btnText]}>
                    {label}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <BgView3>
            <CustomHeader
                style={{ marginLeft: SIZES.ten }}
                title={title}
                hasBackArrow />
            {/* ========timer======== */}
            <View activeOpacity={.8} style={styles.timerStyle}>
                <CountdownCircleTimer
                    key={key}
                    size={SIZES.twenty * 18}
                    strokeWidth={15}
                    isPlaying={play}
                    duration={duration !== 0 ? duration : mediationTime}
                    colors={["#f6e448"]}
                    onUpdate={(time) => {
                        console.log("time", time)
                        if (time === 4) {
                            bell.play(success => {
                                if (success) {
                                    console.log('successfully finished playing');
                                } else {
                                    console.log('playback failed due to audio decoding errors');
                                }
                            })
                        }

                    }}
                    onComplete={() => {
                        setCancelBtn("Reset")
                        setStartBtn("Restart")
                    }}
                >
                    {({ remainingTime }) =>

                        <View style={[styles.insideTimer]}>
                            <Text style={[styles.textTimer]}>
                                {children({ remainingTime })}
                            </Text>
                            {/* <Image source={IMAGES.YogaPose} style={{ bottom: -70, width: SIZES.twentyFive * 2.5, height: SIZES.twentyFive * 2.5 }} /> */}
                        </View>
                    }
                </CountdownCircleTimer>
            </View>
            {/* ========buttons====== */}
            <Row style={styles.rowStye}>
                <TimerButton btnstyle={{ backgroundColor: COLORS.black + 30 }} label={canelBtn} onPress={() => {

                    if (canelBtn === "Reset") {
                        setPlay(false)
                        setkey(prevKey => prevKey + 1)
                        setStartBtn("Start")
                        setCancelBtn("Cancel")
                    }
                    else {

                        navigation.goBack()
                    }
                }} />
                <TimerButton label={startBtn} onPress={async () => {
                    setPlay(!play)
                    if (startBtn === "Restart") {
                        setLeadIn(LeadIn)
                        setDuration(LeadIn)
                        setMediationTime(duration1 === 0 ? 20 * 60 : duration1)

                    } else if (duration !== 0) {
                        if (startBtn === "Start") {
                            setStartBtn("Pause")
                            setCancelBtn("Reset")
                        } else {
                            setStartBtn("Start")
                            setCancelBtn("Cancel")
                        }
                    }

                }} />
            </Row>
        </BgView3 >
    )
}

const styles = StyleSheet.create({
    timerStyle: {
        width: width,
        paddingTop: SIZES.ten,
        justifyContent: "center",
        alignItems: "center"
    },
    insideTimer: {

        backgroundColor: COLORS.white + 50,

        shadowColor: COLORS.white,
        width: "75%",
        height: "75%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.fifty * 100,
        shadowColor: "#ffffff",
        borderWidth: 2,
        borderColor: COLORS.white,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    textTimer: {
        fontSize: SIZES.twentyFive * 2,
        position: "absolute",
        color: COLORS.white
    },
    rowStye: {
        justifyContent: "space-between",
        margin: SIZES.twentyFive
    },
    timeBtn: {
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
    }, btnText: {
        color: COLORS.white, shadowColor: COLORS.white,
        color: COLORS.white,
        fontSize: SIZES.fifteen,
        fontWeight: "500",

    },


})