import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BgView2 from '../../components/BgView2'
import CustomHeader from '../../components/CustomHeader'
import { SIZES } from '../../constants'
import { COLORS, LABELS } from '../../constants/theme'

export default function PrivacyAndPolicy() {
    return (
        <BgView2 style={{ paddingBottom: SIZES.fifteen }}>
            <CustomHeader
                style={{ marginLeft: SIZES.ten }}
                hasBackArrow title={LABELS.PrivacyAndPolicy} />
            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.txt}>
                    The David Lynch Foundation (DLF) respects your privacy. We recognize that donors and visitors to the DLF website may be concerned about the information they provide to us and how we treat that information. This policy applies to all information, whether collected offline or online. Although no transmission on the Internet is 100% secure, DLF exercises care in providing secure transmission of your information from your phone/PC to our servers.
                </Text>
                <Text style={styles.heading}>Selling or Sharing Your Personal Information</Text>
                <Text style={styles.txt}>
                    The David Lynch Foundation does not sell or share personal information about you. This also includes donor information, whether provided online or offline.
                </Text>
                <Text style={styles.heading}>Communications and Management Preferences</Text>
                <Text style={styles.txt}>
                    The David Lynch Foundation communicates with our database members by email, text, conference call, and sometimes other means, such as mail, to provide information and respond to requests. Contact data is processed by and maintained by our staff in SalesForce, and, for texting, Give By Cell. We will never provide this data to any outside party. All contact information has been provided to the David Lynch Foundation voluntarily, through the communications subscription.
                </Text>
                <Text style={styles.heading}>Secure Transactions</Text>
                <Text style={styles.txt}>
                    The David Lynch Foundation takes seriously the protection of sensitive information collected through online donations. DLF selects transaction vendors who agree to comply with industry standards and generally agree upon methods of encryption and encoding. Multiple “firewalls” are used to protect this personal information.
                    {"\n"}  {"\n"}
                    All information is provided to you using SSL (Secure Socket Layer) encryption. SSL is a proven coding system that lets your browser automatically encrypt, or scramble, data before you send it to us.
                    {"\n"}  {"\n"}
                    All online donations, registrations, and other financial transactions completed through pages on our website powered through Classy, Inc. are PCI DSS Level 1 Compliant. PCI DSS is a widely accepted set of standards published by major credit card providers — Visa Inc., MasterCard Worldwide, Discover Network, American Express and JCB — to give consumers the confidence they need to know that organizations accepting electronic payments or donations are doing so in a verified, secure, and consistent fashion. Level 1 is the highest certification offered.
                </Text>
                <Text style={styles.heading}>Cookie Policy</Text>
                <Text style={styles.txt}>
                    Cookies are small text files, stored by your browser on your computer.
                    {"\n"}  {"\n"}
                    We use cookies to improve your experience on our website. By continuing to browse our site you agree to our use of cookies. Most cookies that we use are so-called “session cookies”. They will be deleted automatically after the end of your visit. Other cookies remain on your terminal device.
                    {"\n"}  {"\n"}
                    You may prevent the installation of cookies by adjusting the settings of your browser; however, if you do so, you may be unable to use all the features of this website.
                </Text>

            </ScrollView>
        </BgView2>
    )
}

const styles = StyleSheet.create({
    txt: {
        color: COLORS.white,
        textAlign: "justify",
        fontSize: SIZES.fifteen - 2,
        fontWeight: "400",


    },
    container: {
        flexGrow: 1,
        backgroundColor: COLORS.BtnBlueColor,
        borderRadius: SIZES.fifteen,
        margin: SIZES.fifteen,
        padding: SIZES.twenty,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    heading: {
        color: COLORS.white,
        fontSize: SIZES.twenty - 2,
        fontWeight: "600",
        marginVertical: SIZES.ten,

    }
})