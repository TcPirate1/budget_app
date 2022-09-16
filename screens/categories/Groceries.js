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

const data = [
  {
    title : "Gum",
    cost : "$3",
    date : today,
  },
];

export default function Groceries() {
  const budget = useContext(BudgetContext);

  const [ModalVisibility, setModalVisibility] = useState(false);

  const toggleModal = () =>{
    setModalVisibility(!ModalVisibility);
  };

  return (
    <SafeAreaView style={defaultStyles.flatlist}>
      <AppText style={{marginTop: Platform.OS === "android" ?'3%': 0}}>${budget}</AppText>
      <AppButton title='Add new item' onPress={toggleModal}/>
      <AppButton title='Remove item'/>
        <FlatList data={data} renderItem={Item}
        ListEmptyComponent={ <Text style={defaultStyles.emptylistText}>There is nothing in this list</Text> } ></FlatList>

        <Modal isVisible={ModalVisibility}>
          <SafeAreaView style={{flex:1}}>
            <AppText>Add your items here</AppText>
            <AppTextInput></AppTextInput>
            <AppButton title='Hide Modal' onPress={toggleModal}/>
            <AppButton title='Add'/>
          </SafeAreaView>
        </Modal>
    </SafeAreaView>
  )
}