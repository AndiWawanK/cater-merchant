import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFValue } from "react-native-responsive-fontsize";


export default StyleSheet.create({
    vectorSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: width * .04
    },
    forgotImage: {
        width: width * .7,
        height: width * .7
    },
    formSection: {
        flex: 1,
        paddingHorizontal: width * .06,
    },
    settingPass: {
        fontFamily: Fonts.PMedium,
        color: Colors.BLACK_TEXT,
        fontSize: RFValue(15),
        textAlign: 'center',
        width: width / 1.3,
        marginHorizontal: width * .06,
        marginVertical: width * .05,
        marginTop: width * .01
    },
    btnSection: {
        marginVertical: width * .03
    }
})
