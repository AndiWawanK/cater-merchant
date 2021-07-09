import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    Paket: {
        backgroundColor: 'white',
        marginTop: width * .01
    },  
    Time: {
        flexDirection: 'row',
        marginHorizontal: width * .03,
        marginTop: width * .04
    },
    noOrder: {
        fontFamily: Fonts.PMedium,
        flex: 1,
        color: Colors.GRAY_DARK,
        fontSize: RFValue(15)
    },
    textTime: {
        color: Colors.GRAY_DARK,
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(15)
    },
    paketName: {
        marginTop: width * .03,
        marginHorizontal: width * .03,
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(16)
    },
    paketInfo: {
        margin: width * .03,
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(14),
        color: '#FF6601'
    },
})