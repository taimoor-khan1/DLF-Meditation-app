import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import { COLORS, SIZES, STYLES } from '../../constants';
import { useSelector } from 'react-redux';
import MyTouchableOpacity from '../MyTouchableOpacity';

export default function LogOutModal(props) {
    const {
        onYesPress,
        onNoPress,
    } = props
    const { logout } = useSelector(state => state.utiltities);

    return (
        <Modal

            isVisible={logout}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600}
        >
            <View
                style={{
                    // backgroundColor: COLORS.black,
                    backgroundColor: "#2B2B2B",
                    padding: SIZES.ten * 2,
                    borderRadius: SIZES.twenty,
                    marginHorizontal: SIZES.twentyFive
                }}>
                <Text
                    style={[
                        STYLES.mediumText,
                        {
                            marginVertical: SIZES.twenty,
                            textAlign: 'center',
                            color: COLORS.white,
                            fontSize: SIZES.twenty
                        },
                    ]}>
                    Are you sure you want to log out?
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    <MyTouchableOpacity
                        onPress={
                            onYesPress
                        }
                        style={{
                            padding: SIZES.ten,
                            width: SIZES.fifty,
                            alignItems: 'center',
                            marginEnd: SIZES.five,
                            // backgroundColor: COLORS.primary,
                            borderRadius: SIZES.ten,
                        }}>
                        <Text style={[STYLES.mediumText, { color: "#D23227" }]}>
                            Yes
                        </Text>
                    </MyTouchableOpacity>


                    <Text style={[STYLES.mediumText, { color: COLORS.white, paddingVertical: SIZES.five, fontSize: SIZES.twenty }]}>
                        {"|"}
                    </Text>


                    <MyTouchableOpacity
                        onPress={onNoPress}
                        style={{
                            padding: SIZES.ten,
                            width: SIZES.fifty,
                            alignItems: 'center',
                            marginStart: SIZES.five,
                            // backgroundColor: COLORS.primary,
                            borderRadius: SIZES.ten,
                        }}>
                        <Text style={[STYLES.mediumText, { color: COLORS.white }]}>No</Text>
                    </MyTouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({})