import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Spinner, MyAlert } from "../components";
import { TextInput } from "react-native-gesture-handler";
import Products from "../actions/serviceActions/Products";
import { ICategories, IProduct } from "../Interfaces"
var Common: any = require("../styles/common");
var Styles: any = require("../styles/createProduct");

interface IProps { }

const CreateProduct = (props: IProps) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [desc, setDesc] = useState('');
  const [avatar, setAvatar] = useState('');
  const [developerEmail, setDeveloperEmail] = useState('');
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [formValid, setFormValid] = useState(false);


  const rootStateCategories: ICategories[] = useSelector((state: RootState) => {
    return state.categories;
  });

  useEffect(() => {
    setCategories(rootStateCategories[0])
    setFormValid(name && price && desc && avatar && developerEmail && category)
  });


  const renderForm = () => {
    return (
      <View>
        <View>
          {name && <Text style={Common.inputTitle}>Product Title</Text>}
          <TextInput
            placeholder="Product Title"
            value={name}
            onChangeText={(text) => setName(text)}
            style={Common.input}
          />
        </View>
        <View>
          {!!price && <Text style={Common.inputTitle}>Price</Text>}
          <TextInput
            placeholder="Price"
            keyboardType='decimal-pad'
            value={price}
            onChangeText={(text) => setPrice(text.replace(/[^\d+(,\d{1,2})?$]/g, ''))}  // regex float input
            style={Common.input}
          />
        </View>

        <View>
          {desc && <Text style={Common.inputTitle}>Description</Text>}
          <TextInput
            placeholder="Description"
            value={desc}
            onChangeText={(text) => setDesc(text)}
            style={Common.input}
          />
        </View>
        <View>
          {avatar && <Text style={Common.inputTitle}>Image Link</Text>}
          <TextInput
            placeholder="Image Link"
            keyboardType='url'
            value={avatar}
            onChangeText={(text) => setAvatar(text)}
            style={Common.input}
          />
        </View>
        <View>
          {developerEmail && <Text style={Common.inputTitle}>Developer Email</Text>}
          <TextInput
            placeholder="Developer Email"
            keyboardType='email-address'
            value={developerEmail}
            onChangeText={(text) => setDeveloperEmail(text)}
            style={Common.input}
          />
        </View>
      </View>
    )
  }

  const renderCategories = () => {
    return (
      <View>
        <View style={Styles.categoryTextWrapper}>
          <Text>Selected Category: </Text>
          <Text testID="categoryText">{category}</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={Styles.categoryItemsWrapper}
        >
          {categories?.map(({ name = '' }) => {
            var isSelected = category === name
            return (
              <View
                style={{ ...Styles.categoryItem, backgroundColor: isSelected ? '#000' : '#fff'}}
              >
                <TouchableOpacity
                  onPress={() => setCategory(name)}
                  style={Styles.categoryItemButton}
                >
                  <Text style={{ ...Styles.categoryItemText, color: isSelected ? '#fff' : '#000' }} >{name}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
      </View>

    )
  }

  const submitForm = (name, price, category, desc, avatar, developerEmail) => {
    const floatPrice = parseFloat(price)
    const productInfo: IProduct = { name, price: floatPrice, category, description: desc, avatar, developerEmail }
    Products?.PostProduct(productInfo)
    setName(''); setPrice(0); setCategory(''); setDesc(''); setAvatar(''); setDeveloperEmail('')
    props.navigation?.navigate("Home", { newProductAdded: true })
  }

  const renderSubmitButton = () => {
    return (
      <TouchableOpacity
        style={{ ...Styles.submitButton, backgroundColor: formValid ? '#000' : '#888'}}
        disabled={!formValid}
        onPress={() => submitForm(name, price, category, desc, avatar, developerEmail)}
      >
        <Text testID="submitButtonText" style={{ color: '#fff' }}>Add Product</Text>
      </TouchableOpacity>
    )
  }


  return (
    <View style={Common.container}>
      <Text style={Common.pageTitle}>Create Product</Text>
      <ScrollView style={{ marginBottom: 10 }}>
        {renderForm()}
        {renderCategories()}
        {renderSubmitButton()}
      </ScrollView>
    </View>
  );
};

export { CreateProduct };
