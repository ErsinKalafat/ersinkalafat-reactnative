var React = require("react-native");
var { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    paddingBottom: 60,
    backgroundColor: '#eee',
  },
  pageTitle: {
    padding: 10,
    fontWeight:'bold',
    fontSize: 20,
    backgroundColor: '#fff',
    marginBottom: 15
  },
  spinner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  input: {
    borderWidth: 0.6,
    borderColor: '#333',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    paddingLeft: 15
  },
  inputTitle: {
    position:'absolute',
    zIndex: 999,
    backgroundColor: '#eee',
    left: 32,
    top: -1,
    paddingHorizontal: 2
  }
});
