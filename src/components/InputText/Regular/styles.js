import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    container: radius => ({
        height: width * .13,
        flexDirection: 'row',
        marginVertical: width * .01,
        backgroundColor: Colors.GRAY_MEDIUM,
        borderWidth: 1,
        borderColor: Colors.BLACK_LIGHT,
        borderRadius: radius,
        alignItems: "center",
        width: width * .9,
    }),
    descInput: {
        marginTop: width * .04,
        marginHorizontal: width * .02,
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(17),
        color: Colors.BLACK_TEXT
    },
    inputSection: {
        // marginHorizontal: 10
    },
    input: {
        flex: 1,
        color: Colors.BLACK_TEXT,
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(17),
        marginTop: 3,
        marginHorizontal: width * .03
    },
    descSection: {
        flexDirection: 'row'
    },
    star: {
        marginTop: width * .04,
        marginRight: width * .02,
        color: 'red'
    },
    optional: {
        marginTop: width * .04,
        marginRight: width * .02,
        color: Colors.BLACK_TEXT,
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(17),
    }
})