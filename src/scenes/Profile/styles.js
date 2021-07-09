import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    headersection: {
        // flex: .5,
        backgroundColor: Colors.WHITE
    },
    headerprofile: {
        backgroundColor: Colors.WHITE,
        margin: width * .04,
        borderWidth: 2,
        borderColor: Colors.GRAY_MEDIUM,
        flexDirection: "row",
        padding: width * .04,
        borderRadius: 8
    },
    avatar: {
        width: width * .1,
        height: width * .1,
        borderRadius: 75
    },
    userinformation: {
        flex: 1,
        paddingHorizontal: width * .03
    },
    username: {
        fontFamily: Fonts.PMedium,
        textTransform: "uppercase",
        color: Colors.BLACK,
        fontSize: RFValue(14)
    },
    userphone: {
        fontFamily: Fonts.PMedium,
        color: Colors.BLACK_TEXT,
        marginVertical: width * .01,
        fontSize: RFValue(12)
    },
    btnedit: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: width * .02
    },
    profiledit: {
        fontFamily: Fonts.PRegular,
        color: Colors.BLACK_TEXT,
        paddingRight: width * .03
    },
    chevronright: {
        fontSize: RFValue(14),
        color: Colors.BLACK_TEXT,
    },
    settinglist: firstChoice => ({
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: width * .04,
        backgroundColor: Colors.WHITE,
        paddingVertical: width * .04,
        marginBottom: firstChoice ? width * .02 : 0
    }),
    settinglable: {
        fontSize: RFValue(14),
        fontFamily: Fonts.PMedium,
        flex: 1,
        color: Colors.BLACK_TEXT
    },
    settingicon: {
        paddingRight: width * .02,
        fontSize: RFValue(16),
        color: Colors.BLACK_TEXT
    },
    chevronlist: {
        fontSize: RFValue(16),
        color: Colors.BLACK_TEXT
    },

    appversion: {
        fontSize: RFValue(10),
        fontFamily: Fonts.PRegular,
        color: Colors.BLACK_LIGHT,
        alignSelf: "center",
        position: 'absolute',
        bottom: 20

    }
})