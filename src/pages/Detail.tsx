import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

var Styles: any = require("../styles/detail");

const Detail = ({ navigation }) => {

  const getNavigationParam = (param) => {
    return navigation?.getParam(param)
  }

  return (
    <View style={Styles.container}>
      <Image source={{ uri: getNavigationParam('avatar') }} style={Styles.image} resizeMode="contain" />
      <View style={Styles.itemInfoTopWrapper}>
        <Text style={Styles.itemName}>{getNavigationParam('name')}</Text>
        <Text style={Styles.itemPrice}>${getNavigationParam('price')}</Text>
      </View>
      <ScrollView style={Styles.itemInfoDescWrapper}>
        <Text style={Styles.itemDesc}>{getNavigationParam('description')}</Text>
      </ScrollView>
    </View>
  );
};

export { Detail };
