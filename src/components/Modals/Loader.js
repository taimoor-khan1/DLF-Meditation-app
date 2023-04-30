import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import ReactNativeModal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import Lottie from 'lottie-react-native';
import { COLORS, height, IMAGES, SIZES } from '../../constants';
import {

    PulseIndicator,

} from 'react-native-indicators';

export default function Loader() {
    const { loading } = useSelector(state => state.utiltities);
    const dispacth = useDispatch();
    return (

        <ReactNativeModal
            isVisible={loading}
            // isVisible={true}
            style={{
                backgroundColor: COLORS.transparent,
                // margin: 0, justifyContent: 'flex-end'
            }}
            animationIn={"zoomIn"}
            animationInTiming={450}
            animationOutTiming={450}
            hideModalContentWhileAnimating
            deviceHeight={height * height}
            coverScreen
            animationOut={"zoomOut"}
        >
            <PulseIndicator
                color={COLORS.BtnBlueColor}
                size={SIZES.fifty} />
        </ReactNativeModal >
    )
}

const styles = StyleSheet.create({
    lottie: {
        width: SIZES.fifty * 7,
        height: SIZES.fifty * 7,
    },
})