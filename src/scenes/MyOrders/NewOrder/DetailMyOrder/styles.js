import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    headerleft: {

    },
    chevronLeft: {
        fontSize: RFValue(22)
    },
    textHeader: {
        margin: width * .03,
        fontSize: RFValue(18),
        fontFamily: Fonts.PRegular,
    },
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
    detailSection: {
        backgroundColor: 'white',
        height: width * .4, 
        marginTop: width * .05
    },
    textDetail: {
        margin: width * .03,
        fontSize: RFValue(14),
        fontFamily: Fonts.PMedium
    },
    imageDetail: {
        width: width * .2,
        height: width * .2,
        borderRadius: 10,
        marginHorizontal: width * .03
    },
    imageSection: {
        flexDirection: 'row',
    },
    paketSection: {
        width: width * .7
    },
    paketName: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(14)
    },
    textPaket: {
        color: Colors.BLACK_TEXT,
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(12),
        marginTop: width * .01  
    },
    Price: {
        height: width * .3,
        backgroundColor: Colors.WHITE,
        marginTop: width * .01
    },
    subTotal: {
        marginHorizontal: width * .05,
        marginTop: width * .07,
        flexDirection: 'row'
    },
    textSubtotal: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(15),
        color: Colors.BLACK_TEXT,
        flex: 1
    },
    textPriceSubTotal: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(14),
        color: Colors.BLACK_TEXT,
    },
    orderingFee: {
        flexDirection: 'row',
        marginHorizontal: width * .05,
    },
    textOrdering: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(15),
        color: Colors.BLACK_TEXT,
        flex: 1
    },
    textPriceOrdering: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(14),
        color: Colors.BLACK_TEXT
    },
    Total: {
        flexDirection: 'row',
        marginHorizontal: width * .05
    },
    textTotal: {
        flex: 1,
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(16)
    },
    textPriceTotal: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(15)
    },
    Line: {
        height: width / width, 
        backgroundColor: Colors.GRAY_MEDIUM, 
        width: width - 39,
        marginHorizontal: width * .05,
        marginVertical: width * .02
    },
    Notes: {
        backgroundColor: 'white',
        height: width * .3,
        marginTop: width * .05
    },
    noteOrder: {
        marginHorizontal: width * .03,
        marginTop: width * .03,
        fontFamily: Fonts.PMedium,
    },
    textNotes: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(13),
        margin: width * .03,
        color: Colors.BLACK_TEXT,
        width: width * .9
    },
    btnSection: {
        alignItems: 'center'
    },
    Btn: {
        height: width * .12,
        width: width - 20,
        backgroundColor : Colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: width * .2,
        marginHorizontal: width * .03,
    },
    textBtn: {
        fontFamily: Fonts.PMedium,
        color: Colors.WHITE,
        fontSize: RFValue(17)
    }   
})
