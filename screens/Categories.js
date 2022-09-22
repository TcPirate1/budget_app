import { FlatList, Text, SafeAreaView, Platform, View, TouchableOpacity, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import Modal from "react-native-modal";
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import { BudgetContext } from './create_context_file';
import defaultStyles from "../config/styles";
import { today } from './Date';
import Logout from '../components/Logout';
 

export default function Categories() {
  const weeklyBudget = useContext(BudgetContext);

  let budget = weeklyBudget;



  const [ModalVisibility, setModalVisibility] = useState(false);

  const toggleModal = () =>{
    setModalVisibility(!ModalVisibility);
  };

  const [itemName, setItemName] = useState();
  const [price, setPrice] = useState(); //These are changed by the text input from modal
  
  const [initialElements, changeEl] = useState([]);
  const [listState, setListState] = useState(initialElements);
  const [idx, incr] = useState(initialElements.length);

  let newArray = [...initialElements , {id: idx, product: itemName, cost : `$${price}`, date : today}];

  const addElement = () => {
    incr(idx + 1);
    setListState(newArray);
    changeEl(newArray);
  }
  const removeElement = (id) => {
    const newData = initialElements.filter(item=>item.id !== id);
    setListState(newData)
    changeEl(newData);
    //new state
  }

  const RenderItem = ({item}) => (
    <SafeAreaView >
      <TouchableOpacity onPress={()=>Alert.alert("WARNING!", `You are about to delete ${item.product}\nthat you brought on ${item.date}\nAre you sure?`,
      [{text: "Yes", onPress: ()=>removeElement(item.id)}, {text: "No"}])}>
      <AppText style={defaultStyles.flatlistText}>{item.product}           {item.cost}</AppText>
      <AppText>{item.date}</AppText>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={defaultStyles.flatlist}>
      <View style={{margin: Platform.OS === "android" ?'3%': 0, flexDirection:'row'}}>
        <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
        <AppText>${budget}</AppText>
        </View>
        <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
        <Logout/>
        </View>
      </View>
      <AppButton title='Add new item' onPress={toggleModal}/>
        <FlatList data={listState} renderItem={RenderItem} keyExtractor={item=>item.id} ListEmptyComponent={ <Text style={defaultStyles.emptylistText}>There is nothing in this list</Text> } />

        <Modal isVisible={ModalVisibility} transparent={false}>
          <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'center' }}>
            <AppText style={{backgroundColor:'green', color:'white', borderRadius:15, padding:'3%'}}>Add your items here</AppText>
            <AppTextInput placeholder='Item name' onChangeText={(itemName)=>setItemName(itemName)}/>
            <AppTextInput keyboardType='numeric' placeholder='Cost' onChangeText={(price)=>setPrice(price)}/>
            <AppButton title='Add' onPress={()=>{addElement();toggleModal()}}/>
            <AppButton title='Cancel' onPress={toggleModal}/>
          </SafeAreaView>
        </Modal>
    </SafeAreaView>
  )
}