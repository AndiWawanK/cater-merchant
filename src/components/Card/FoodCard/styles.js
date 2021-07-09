import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    container: last => ({
        marginRight: last ? 0 : width * .05,
        width: width / 2.5,
        height: width * .4,
        backgroundColor: Colors.WHITE,
        elevation: 4,
        marginBottom: width * .02,
        borderRadius: width * .02
    }),
    thumbnail: {
        width: "100%",
        height: width * .23,
        borderTopLeftRadius: width * .02,
        borderTopRightRadius: width * .02,
    },
    content: {
        padding: width * .02
    },
    owner: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(16),
        color: Colors.BLACK,
        marginBottom: width * .03
    },
    starSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    starIcon: {
        marginRight: width * .02,
        color: Colors.PRIMARY,
        fontSize: RFValue(13),
    },
    starTotal: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(12),
    }
})