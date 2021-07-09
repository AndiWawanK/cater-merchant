import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFValue } from "react-native-responsive-fontsize";
import { PRegular } from "styles";

export default StyleSheet.create({
    customerSection: {
        flex: 1,
        backgroundColor: 'white',
        marginVertical: width * .01,
        // height: width * .3
    },
    Time: {
        flexDirection: 'row',
        marginHorizontal: width * .03,
        marginTop: width * .04,
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
    infoCustomer: {
        marginHorizontal: width * .03,
        marginVertical: width * .03,
        flexDirection: 'row'
    },  
    avatar: {
        width: width * .1   ,
        height: width * .1,
        borderRadius: 75,
        marginTop: width * .01
    },
    contactCustomer: {
        marginHorizontal: width * .04
    }, 
    nameCustomer: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(14),
    },
    customerStatus: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(14),
        color: Colors.ORANGE,
    },
    customerPaket: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(12)
    },
    anotherSection: {
        flexDirection: 'row',
        marginHorizontal: width * .03
    },
    btnSection: {
        flex: 1,
    },
    contactButton: {
        borderWidth: 1,
        width: width * .3,
        height: width * .05,
        borderColor: '#038801',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: width * .01,
    },
    textContactButton: {
        fontSize: RFValue(11),
        color: '#038801',
        fontFamily: Fonts.PMedium
    },
    Date: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(11),
        color: Colors.BLACK_TEXT,
        marginVertical: width * .02
    },
    menuSchedule: {
        flexDirection: 'row',
        marginHorizontal: width * .03,
        marginVertical: width * .04
    },
    textMenu: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(14),
        flex: 1
    },
    menuBtn: {
        width: width * .4,
        height: width * .07,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.GRAY_MEDIUM,
        flexDirection: 'row'
    },
    textMenuBtn: {
        fontSize: RFValue(13),
        fontFamily: Fonts.PMedium,
        color: Colors.BLACK_TEXT
    },
    Menu: {
        marginHorizontal: width * .03,
        flexDirection: 'row'
    },
    menuImage: {
        width: width * .2,
        height: width * .2,
        borderRadius: 9
    },
    infoMenu: {
        marginHorizontal: width * .04,
        flex: 1
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
    scheduleInfo: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(14),
        justifyContent: 'center',
        color: Colors.SUCCESS
    },
    chevronDown: {
        fontSize: RFValue(15),
        color: Colors.BLACK_TEXT,
        paddingTop: width * .01
    }
})