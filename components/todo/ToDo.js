import * as React from "react";
import { Text, View, TextInput, TouchableOpacity, Button, Alert, FlatList,StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function ToDoItem({item, AllItems, setAllItems}){
  const [iconName, setIconName]= React.useState(item.status == "Active"? "square": "check-square");


  
  const handleItemStatus= ()=>{
    setIconName(iconName === "square"? "check-square": "square");
    // item.status= (item.status === "Active"? "Done": "Active");
    const allItems= [...AllItems]; 
    allItems.forEach(Item=>{
      if(Item.title === item.title){
        Item.status= (Item.status === "Active"? "Done": "Active")
      }
    });
    setAllItems(allItems);
    }

  return (
    <View style= { styles.BabySharkToDoItem }>
      <Feather onPress= {()=> handleItemStatus()} 
        style= {iconName === "square"? 
        styles.BabySharkToDoItemIcon: styles.BabySharkToDoItemIcon_Pressed}
        name= {iconName} size={20} color="#fff" />
      <Text style= {iconName === "square"? 
        styles.BabySharkToDoItemTitle: styles.BabySharkToDoItemTitle_Pressed}>
        {item.title}
      </Text>
    </View>
      
  );
}


const styles= StyleSheet.create({
  BabySharkToDoItem:{
    display: "flex",
    flexDirection: "row",
  },
  BabySharkToDoItemIcon:{
    marginHorizontal: "10px",
    cursor:'pointer'
  },
  BabySharkToDoItemTitle:{
    color: "#fff",
    padding: "5px",
    fontSize: "15px",
  },
  BabySharkToDoItemIcon_Pressed:{
    marginHorizontal: "10px",
    cursor:'pointer',
    color: "#FF4500",
  },
  BabySharkToDoItemTitle_Pressed:{
    color: "#FF4500",
    padding: "5px",
    fontSize: "15px",
    textDecorationLine: "line-through"
  },
});

export default ToDoItem;