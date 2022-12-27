import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17.5,
    color: '#D8D8D8',
  },
});

export default function Select({
  propsItem=[]
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(propsItem);

  return(
    <View>
      <DropDownPicker
        open={open} 
        setOpen={setOpen} 
        value={value} 
        setValue={setValue} 
        items={items} 
        setItems={setItems} 

        placeholder='Choose your city' 
        textStyle={styles.text} 
        style={{backgroundColor: '#F34C30'}} 
        listParentContainerStyle={{backgroundColor: '#F34C30'}} 
        dropDownContainerStyle={{backgroundColor: '#DA004E'}} 
        selectedItemContainerStyle={{backgroundColor: '#E7263F'}}
      />
    </View>
  );
};
