var React = require("react-native");
var ReactNative = require("react-native");
var { StyleSheet } = React;
var { Dimensions } = ReactNative;

const { width: deviceWidth } = Dimensions.get("window");
const { height: deviceHeight } = Dimensions.get("window");

const imageSize: number = deviceWidth / 2 - 20;

module.exports = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  wrapper: {
    padding: 10,
    alignItems: "center"
  },
  productInfoWrapper: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingLeft: 10,
    paddingVertical: 3,
    flex: 1,
    width: imageSize,
    marginBottom: 20,
    marginTop: 5
  },
  productName: {
    fontSize: 17,
    color: '#fff'
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#fff'
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderWidth: 1,
    borderRadius: 7
  },
  categoryItemWrapper: {
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 30,
    height: 40
  },
  categoryItemText: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    height: 50,
    justifyContent: 'center'
  },
  plusButton: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: deviceHeight - 230,
    right: 20,
    zIndex: 999,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  plusButtonText: {
    fontSize: 50,
    textAlign: 'center',
    lineHeight: 55
  },
  productList: {
    marginBottom: 150
  }
});
