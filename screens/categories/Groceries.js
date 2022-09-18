import { FlatList, Text, SafeAreaView, Platform } from 'react-native';
import React, { useContext, useState } from 'react';
import Modal from "react-native-modal";
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import AppTextInput from '../../components/AppTextInput';
import { BudgetContext } from '../create_context_file';
import { Item } from '../Items';
import defaultStyles from "../../config/styles";
import { today } from '../Date';

// const data = [
//   {
//     id : 1,
//     product : "Gum",
//     cost : "$3",
//     date : today,
//   },
// ];

export default function Groceries() {
  const budget = useContext(BudgetContext);

  const [ModalVisibility, setModalVisibility] = useState(false);

  const toggleModal = () =>{
    setModalVisibility(!ModalVisibility);
  };

  const [productName, setProductName] = useState();
  const [price, setPrice] = useState();
  
  // const [initialElements, changeEl] = useState([{id: '0', text: 'Object 1'}, {id: '1', text: 'Object 2'},]);
  const [initialElements, changeEl] = useState([{id : "0", product : "Gum", cost : "$3", date : today},]);
  const [exampleState, setExampleState] = useState(initialElements);
  const [idx, incr] = useState(initialElements.length);

  const addElement = () => {
    let newArray = [...initialElements , {id: idx, product: `Object ${(idx+1)}`, cost : "$3", date : today}];
    incr(idx + 1);
    setExampleState(newArray);
    changeEl(newArray);
  }

  return (
    <SafeAreaView style={defaultStyles.flatlist}>
      <AppText style={{marginTop: Platform.OS === "android" ?'3%': 0}}>${budget}</AppText>
      <AppButton title='Add new item' onPress={toggleModal}/>
      {/* <AppButton title='Remove item'/> */}
        <FlatList data={exampleState}
        renderItem={Item}
        keyExtractor={item=>item.id}
        ListEmptyComponent={ <Text style={defaultStyles.emptylistText}>There is nothing in this list</Text> } />
        <AppButton title='Add element' onPress={addElement}></AppButton>

        <Modal isVisible={ModalVisibility}>
          <SafeAreaView style={{flex:1}}>
            <AppText>Add your items here</AppText>
            <AppTextInput placeholder='Product name' onChangeText={(productName)=>setProductName(productName)}/>
            <AppTextInput placeholder='Cost' onChangeText={(price)=>setPrice(price)}/>
            <AppButton title='Hide Modal' onPress={toggleModal}/>
            <AppButton title='Add' onPress={()=>{addElement();toggleModal()}}/>
          </SafeAreaView>
        </Modal>
    </SafeAreaView>
  )
}