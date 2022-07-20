import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, RefreshControl } from "react-native";
import { useDispatch } from "react-redux";
import { saveCategories } from "../actions/reduxActions/categoryReduxActions";
import Products from "../actions/serviceActions/Products";
import Categories from "../actions/serviceActions/Categories";
import { IProduct, ICategories } from "../Interfaces"
import { Spinner } from "../components";
var Styles: any = require("../styles/home");
var Common: any = require("../styles/common");

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

interface IProps { }

const Home = (props: IProps) => {

  const dispatch = useDispatch();
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [spinner, setSpinner] = useState(true);


  useEffect(() => {
    setSpinner(true)
    Products?.FetchProducts().then(data => {
      setProductList(data)
      setSpinner(false)
    })
    Categories?.fetchCategories().then(data => {
      setCategories([{ "name": "All", "id": "" }, ...data]);
      dispatch(saveCategories(data));
    })
  }, [props.navigation.getParam('newProductAdded')]);


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    Products?.FetchProducts().then(data => {
      setProductList(data)
    })
    wait(2000).then(() => setRefreshing(false));
  }, []);


  const renderCategories = () => {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 10 }}
      >
        {categories?.map(({ name = '', id = '' }) => {
          var isSelected = selectedCategoryId === id
          return (
            <TouchableOpacity
              onPress={() => setSelectedCategoryId(id)}
              activeOpacity={0.6}
            >
              <View style={{ ...Styles.categoryItemWrapper, backgroundColor: isSelected ? '#fff' : '#000' }}>
                <Text style={{ ...Styles.categoryItemText, color: isSelected ? '#000' : '#fff' }} >{name}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    )
  }


  const renderProducts = (item) => {
    const { avatar, name, price, description } = item
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate("Detail", { avatar, name, price, description })}
        >
          <View style={Styles.wrapper}>
            <Image source={{ uri: avatar }} style={Styles.image} resizeMode="contain" />
            <View style={Styles.productInfoWrapper}>
              <Text style={Styles.productName}>{`${name}`}</Text>
              <Text style={Styles.productPrice}>{`$${price}`}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }


  const filteredProductList: IProduct[] = selectedCategoryId ? productList?.filter(i => categories?.some(j => j.id == selectedCategoryId && j.name == i.category)) : productList



  return (
    <SafeAreaView>
      <Text style={Common.pageTitle}>Upayments Store</Text>

      {renderCategories()}

      {spinner ? (
        <Spinner />
      ) :
        <FlatList
          data={filteredProductList}
          renderItem={({ item }) => renderProducts(item)}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          style={Styles.productList}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      }


      <TouchableOpacity
        onPress={() => props.navigation.navigate("Create")}
        style={Styles.plusButton}
      >
        <Text style={Styles.plusButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export { Home };
