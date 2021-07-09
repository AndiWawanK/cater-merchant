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

    },
    chevronLeft: {
        fontSize: RFValue(22)
    },
    textHeader: {
        fontSize: RFValue(18),
        fontFamily: Fonts.PMedium,
    },
    tabHeader: {
        flexDirection: "row",
        height: width * .1,
        backgroundColor: Colors.WHITE
    },
    tabContainer: isActive => ({
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 5,
        borderBottomColor: isActive ? Colors.PRIMARY : Colors.WHITE
    }),
    tabTitle: isActive => ({
        fontFamily: Fonts.PMedium,
        color: isActive ? Colors.PRIMARY : Colors.BLACK_TEXT,
        fontSize: RFValue(14)
    })
})