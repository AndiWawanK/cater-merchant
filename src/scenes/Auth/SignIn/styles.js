import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    vectorSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: width * .04
    },
    cookingImage: {
        width: width * .7,
        height: width * .7
    },
    formSection: {
        flex: 1,
        paddingHorizontal: width * .06
    },
    btnSection: {
        marginVertical: width * .03
    },
    forgotPassword: {
        alignItems: "center",
        marginVertical: width * .03
    },
    forgotPasswordLable: {
        fontFamily: Fonts.PMedium,
        color: Colors.BLACK_TEXT,
        fontSize: RFValue(14)
    },
    footerSection: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: width * .05
    },
    dontHaveAccount: {
        fontFamily: Fonts.PMedium,
        color: Colors.BLACK_TEXT,
        fontSize: RFValue(14)
    },
    dontHaveAccountRegister: {
        fontFamily: Fonts.PMedium,
        color: Colors.BLACK_TEXT,
        fontSize: RFValue(14)
    }
})