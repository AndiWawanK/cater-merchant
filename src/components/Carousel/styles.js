import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: width * .03,
    shadowOffset: {
      width: 0,
      height: 5
    },
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bannerSection: isLast => ({
    paddingHorizontal: isLast ? 0 : width * .04,
  }),
  banner: {
    width: width * .92,
    height: width * .385
  },
  bullets: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: width * .04,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: RFValue(25),
  }
});