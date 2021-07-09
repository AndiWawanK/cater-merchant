import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.GRAY_MEDIUM,
        borderRadius: width * .03,
        height: width * .1,
        flexDirection: "row",
        alignItems: "center"
    },
    searchIcon: {
        fontSize: RFValue(20),
        marginHorizontal: width * .02,
        color: Colors.BLACK_LIGHT
    },
    input: {
        flex: 1,
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(14),
        color: Colors.BLACK_TEXT
    }
})