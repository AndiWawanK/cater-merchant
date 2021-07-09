import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.PRIMARY,
        height: width * .12,
        borderRadius: 75,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: RFValue(16),
        color: Colors.WHITE,
        fontFamily: Fonts.PMedium
    }
})