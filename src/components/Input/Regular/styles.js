import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    container: radius => ({
        height: width * .13,
        flexDirection: 'row',
        marginVertical: width * .03,
        backgroundColor: Colors.GRAY_MEDIUM,
        borderRadius: radius,
        alignItems: "center"
    }),
    input: {
        flex: 1,
        color: Colors.BLACK,
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(16),
        marginTop: 3
    },
    icon: isFocused => ({
        fontSize: RFValue(20),
        color: isFocused ? Colors.BLACK : Colors.BLACK_LIGHT,
        marginLeft: width * .06,
        marginRight: width * .02
    })
})