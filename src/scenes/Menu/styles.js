import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    newPackage: {
        backgroundColor: 'white',
        height: width * .2,
        flexDirection: 'row'
    },
    klikNewPackage: {
        flexDirection: 'row'
    },
    imgSection: {
        backgroundColor: '#f0ee9e',
        width: width / 8,
        height: width / 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        margin: width * .03
    },
    Img: {
       width: width * .1,
       height: width * .1
    },
    textSection: {
        margin: width * .03,
        marginLeft: width * .01,
    },
    textNewPackage: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(16)
    },
    textNewDesc: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(13),
        color: Colors.GRAY_DARK,
        marginVertical: width * .01
    },
    Right: {
        justifyContent: "center",
        margin: width * .03
    },
    packageList: {
        height: width * .09,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    textList: {
        flex: 1,
        marginHorizontal: width * .03,
        marginVertical: width * .02,
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(14)
    },
    iconFilter: {
        marginHorizontal: width * .03,
        marginVertical: width * .02,
        fontSize: RFValue(20)
    },
    packageName: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: width * .3,
    },
    imageDetail: {
        width: width * .2,
        height: width * .2,
        borderRadius: 10,
        marginHorizontal: width * .03,
        marginVertical: width * .05
    },
    paketSection: {
        width: width * .7,
        marginVertical: width * .05,
        width: width * .6,
        flex: 1
    },
    textName: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(14)
    },
    textPaket: {
        color: Colors.BLACK_TEXT,
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(12),
        marginTop: width * .02,
    },
    editSection: {
        backgroundColor: 'white',
    },  
    btnUp: {
        flex: 1,
    },
    iconUP: {
        color: Colors.BLACK_TEXT,
        marginLeft: width * .06,
        marginVertical: width * .05
    },
    textEdit: {
        margin: width * .03,
        color: Colors.GREEN,
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(13)
    },
    Line: {

        height: width / width, 
        backgroundColor: Colors.GRAY_DARK, 
        // width: width - 39,
        // marginHorizontal: width * .05,
        // // marginVertical: width * .02
    },
    Menu: {
        // marginHorizontal: width * .03,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    menuImage: {
        width: width * .2,
        height: width * .2,
        borderRadius: 9,
        marginLeft: width * .1,
        marginVertical: width * .03
    },
    infoMenu: {
        marginHorizontal: width * .03,
        flex: 1,
        marginVertical: width * .03
    },  
    Day: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(16),
    },
    foodMenu: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(14),
        marginVertical: width * .02
    },
})