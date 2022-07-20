var React = require("react-native");
var ReactNative = require("react-native");
var { StyleSheet } = React;
var { Dimensions } = ReactNative;

const { width: deviceWidth } = Dimensions.get("window");
const { height: deviceHeight } = Dimensions.get("window");

const imageSize: number = deviceWidth - 100;

module.exports = StyleSheet.create({
  categoryTextWrapper: {
    marginLeft: 20,
    marginTop: 15,
    flexDirection: 'row'
  },
  categoryItemsWrapper: {
    marginLeft: 20,
    marginTop: 10
  },
  categoryItem: {
    marginRight: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  categoryItemButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  categoryItemText: {
    paddingHorizontal: 20,
    height: 20,
    alignSelf: 'center'
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    alignSelf: 'center',
    borderRadius: 15
  }
});
