import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import BgView2 from '../../components/BgView2'
import { COLORS, IMAGES, LABELS, SCREENS, SIZES } from '../../constants/theme'
import CustomHeader from '../../components/CustomHeader'



export default function DailyCalls(props) {
    const { navigation } = props
    // const joinMeeting = async () => {
    //     console.log("joinMeeting.....")
    //     try {
    //         await ZoomUs.joinMeeting({
    //             userName: 'Taimoor',
    //             meetingNumber: '79374704026',
    //             password: 'ThrBAXkWXqWgyZMSwACZV0bkNU3x1H.1',
    //             // noMeetingErrorMessage: true,
    //         })
    //     } catch (error) {
    //         console.log("err", error)
    //     }

    // };
    // useEffect(() => {
    //     initilize()
    // }, [])

    // const initilize = async () => {
    //     await ZoomUs.initialize({
    //         clientKey: 'MhTrOxx0MnqPr8E9MCFxlNpM5DtwHzY6ha7c',
    //         clientSecret: 'q8NwFFFt5ytZxBjzta5ZopkpQLHPa1twBvdJ',
    //         domain: 'zoom.us'
    //     }, {
    //         disableShowVideoPreviewWhenJoinMeeting: true,
    //         enableCustomizedMeetingUI: true
    //     }).then(() => { console.log("successfull initilize") }).catch((err) => {
    //         console.log("err in initialize", err)
    //     });
    // };
    const CallCard = ({ item }) => {
        return (
            <View style={{ marginBottom: SIZES.fifteen, marginHorizontal: SIZES.twenty }}>
                <Text style={styles.cardTitle}>{item.shift}</Text>
                <TouchableOpacity style={styles.Card} activeOpacity={0.7}>
                    <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen + 2, fontWeight: "500" }}>Start Time</Text>
                    <Text style={{ color: COLORS.BtnYellowColor, fontSize: SIZES.fifteen, fontWeight: "500", marginBottom: SIZES.twentyFive, marginTop: SIZES.five }}>{item?.timing}{" "}EST</Text>
                    <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen + 2, fontWeight: "500" }}>Join Meeting</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => { }

                    }>
                        <Text style={{ color: COLORS.black, fontWeight: "800" }}>Join Now</Text>
                    </TouchableOpacity>
                    <Image source={item.image} style={styles.img} resizeMode={"contain"} />

                </TouchableOpacity>
            </View >
        )
    }
    return (
        <BgView2>
            <CustomHeader
                style={{ marginLeft: SIZES.ten }}
                setting
                onSettingPress={() => {
                    navigation.navigate(SCREENS.setting)
                }}
                title={LABELS.dailyCalls} />
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
                data={data}
                keyExtractor={(item) => { item.id }}
                renderItem={CallCard} />
            <View style={{ height: SIZES.fifty }} />
        </BgView2>
    )
}
const data = [
    {
        id: 0,
        image: IMAGES.sun,
        shift: "Mornings",
        timing: "9:00am",
    },
    {
        id: 0,
        image: IMAGES.moon,
        shift: "Evening",
        timing: "4:00pm",
    },
    {
        id: 0,
        image: IMAGES.moon,
        shift: "Daily Recordings",
        timing: "4:00pm",
    },
]

const styles = StyleSheet.create({
    cardTitle: {
        color: COLORS.BtnYellowColor,
        fontSize: SIZES.twenty,
        fontWeight: "700",
        marginVertical: SIZES.ten
    }, Card: {
        backgroundColor: COLORS.BtnBlueColor,
        padding: SIZES.twenty,
        paddingHorizontal: SIZES.twentyFive,
        borderRadius: SIZES.fifteen,
    }, btn: {
        backgroundColor: COLORS.BtnYellowColor,
        width: SIZES.twentyFive * 4,
        padding: SIZES.ten,
        marginVertical: SIZES.ten,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.twenty,
        marginTop: SIZES.twenty

    }, img: {
        position: "absolute",
        bottom: 0,
        zIndex: 100,
        right: 0,
        width: SIZES.fifty * 2,
        height: SIZES.fifty * 2
    }
})