import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { CreateProduct, Home, Detail } from "./pages";

const TabScreen = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    },
    Create: {
      screen: CreateProduct,
      navigationOptions: {
        tabBarLabel: "Create"
      }
    }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: "#1b47a5",
      inactiveTintColor: "#999",
      style: {
        backgroundColor: "#fff",
        paddingTop:0
      },
      labelStyle: {
        textAlign: "center"
      },
      indicatorStyle: {
        borderBottomColor: "#555",
        borderBottomWidth: 2
      }
    }
  }
);

const AppNavigator = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#000",
      title: "Ersin Kalafat"
    }
  },
  Detail: {
    screen: Detail
  }
});

const AppNavigationContainer = createAppContainer(AppNavigator);

export default AppNavigationContainer;
