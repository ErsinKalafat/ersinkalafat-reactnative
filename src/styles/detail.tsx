var React = require("react-native");
var ReactNative = require("react-native");
var { StyleSheet } = React;
var { Dimensions } = ReactNative;

const { width: deviceWidth } = Dimensions.get("window");
const { height: deviceHeight } = Dimensions.get("window");

const imageSize: number = deviceWidth - 100;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    alignSelf: 'center',
    width: imageSize,
    height: imageSize,
    borderWidth: 1,
    borderRadius: 7
  },
  itemInfoTopWrapper: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  itemInfoDescWrapper: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  itemName: {
    color: '#fff',
    fontWeight: 'bold',
    width: '70%',
    fontSize: 17
  },
  itemPrice: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  itemDesc: {
    color: '#ccc',
    fontSize: 12,
    marginBottom: 20
  }
});
