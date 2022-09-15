import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    textAlign: "center",
  },
  flatlist: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptylistText: {
    paddingTop: '3%',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontSize: 20,
    alignSelf: 'center',
  },
  flatlistText: {
    margin: '5%',
    borderWidth: 1,
    borderColor: colors.red,
  },
};
