import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    Header: {
        height: width * .14, 
        backgroundColor: 'white',
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: width * .03
    },
    headerleft: {
        paddingRight: width * .02
    },
    chevronLeft: {
        fontSize: RFValue(22)
    },
    textHeader: {
        fontSize: RFValue(18),
        fontFamily: Fonts.PMedium,
    },
})