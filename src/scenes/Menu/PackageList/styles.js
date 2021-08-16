import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
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
        marginVertical: width * .07
    },
    paketSection: {
        width: width * .7,
        marginVertical: width * .07,
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
    iconUP: {
        color: Colors.BLACK_TEXT,
        margin: width * .03,
        marginVertical: width * .06
    },
    editPackage: {
        backgroundColor: 'white',
        flexDirection: 'row',
    },  
    textEdit: {
        margin: width * .03,
        marginVertical: width * .04,
        color: Colors.GREEN,
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(15),
        flex: 1
    },
    Line: {
        height: width / width, 
        backgroundColor: Colors.GRAY_DARK,    
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
    },
    switch: {
        justifyContent: 'center',
    }  
})