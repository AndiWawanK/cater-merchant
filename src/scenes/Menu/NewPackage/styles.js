import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    bannerSection: {
        backgroundColor: "white",
        flexDirection: 'row'
    },
    imgSection: {
        height: width * .2,
        width: width * .2,
        margin: width * .03,
        backgroundColor: Colors.GREY_TEXT,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 15,
        borderColor: Colors.GRAY
    },
    img: {
        height: width * .1,
        width: width / 9
    },
    textSection: {
        margin: width * .03,
        width: width * .5
    },
    textBanner: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(17),
        color: Colors.GREEN,
    },
    desc: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(13),
        color: Colors.BLACK_TEXT,
        marginVertical: width * .02
    },
    inputSection: {
        backgroundColor: 'white',
        marginVertical: width * .02
    },
    input: {
        alignItems: 'center',
        marginBottom: width * .05
    },
    Btn: {
        height: width * .12,
        width: width - 20,
        backgroundColor : Colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: width * .1,
        marginHorizontal: width * .03,
    },
    textBtn: {
        fontFamily: Fonts.PMedium,
        color: Colors.WHITE,
        fontSize: RFValue(17)
    }   
})