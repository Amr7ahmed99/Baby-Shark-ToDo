import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  FlatList,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import ToDoItem from './components/todo/ToDo';

export default function App() {
  const [Todo, setToDo] = React.useState('');
  const [ToDoList, setToDoList] = React.useState([]);
  const [AllItems, setAllItems] = React.useState([]);
  const [ListStatus, setListStatus]= React.useState('ALL');

  const handelToDoInput = (e) => {
    setToDo(e.target.value);
  };

  const handleToDoBtns = (e) => {
    
    const items= [...AllItems];
    setListStatus(e.target.innerHTML);
    switch(e.target.innerHTML){
      case "ALL":
        setToDoList([...items]);
        break;
      case "ACTIVE":
        setToDoList( (items.filter(item=> item.status != "Done")) );
        break;
      case "DONE":
        setToDoList( (items.filter(item=> item.status != "Active")) );
        break;
      default:
        alert("Default");
    }


  };

  const handelAddToDo = () => {
    if(ListStatus === "ACTIVE" || ListStatus === "ALL"){
      setToDoList([...ToDoList, {title:Todo, status: "Active"}]);
    }
    setAllItems([...AllItems, {title: Todo, status: "Active"}]);
    setToDo("");
  };

  return (
    <View style={styles.BabyShark}>
      <Text style={styles.BabySharkTitle}> BABY SHARK</Text>
      <Text style={styles.BabySharkText}> TODO-dododoododoodo</Text>
      <View style={styles.BabySharkToDoView}>
        <TextInput
          style={styles.BabySharkInput}
          value={Todo}
          onChange={(e) => handelToDoInput(e)}
        />
        <TouchableOpacity
          style={styles.AddTodoBtn}
          onPress={() => handelAddToDo()}>
          <Text> + </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.BabySharkButtonsView}>
        <TouchableOpacity
        style={styles.BabySharkButton}
        onPress={(e) => handleToDoBtns(e)}
        activeOpacity={0.5}>
         ALL 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.BabySharkButton}
          onPress={(e) => handleToDoBtns(e)}
          activeOpacity={0.5}>
           ACTIVE 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.BabySharkButton}
          onPress={(e) => handleToDoBtns(e)}
          activeOpacity={0.5}>
           DONE 
        </TouchableOpacity>
      </View>

      <View style={styles.BabySharkToDoList}>
        
        <FlatList
          data={ToDoList}
          renderItem={({ item }) => {
            return (
              <ToDoItem item={item}
              AllItems= {AllItems} 
              setAllItems= {setAllItems}
              />
            )
          }}
          keyExtractor={(item, index) => item.toString()}
          ListEmptyComponent={
            <View>
              <Text style={{ color: '#fff' }}> This List Is Empty</Text>
            </View>
          }
        />
        
        {
          // ToDoList.map((item)=>{
          //     return (
          //       <ToDoItem item={item}
          //       AllItems= {AllItems} 
          //       setAllItems= {setAllItems}
          //     />
          //   )
          // })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BabyShark: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#050A30',
  },
  BabySharkTitle: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    marginTop: '50px',
    color: '#FF4500',
  },
  BabySharkText: {
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#fff',
  },
  BabySharkToDoView: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: "red",
    justifyContent: 'space-around',
    margin: '15px',
  },
  BabySharkInput: {
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: '25px',
    padding: '10px',
    width: '70%',
    outline: 'none',
  },
  AddTodoBtn: {
    backgroundColor: '#FF4500',
    padding: '10px',
    borderRadius: '50%',
    color: '#050A30',
    // fontSize: "25px",
    // fontWeight: "bold",
  },
  BabySharkButtonsView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marign: '10px',
  },
  BabySharkButton: {
    backgroundColor: '#fff',
    color: '#000',
    paddingHorizontal: '15px',
    paddingVertical: '10px',
    borderRadius: '20px',
    flex: 0.3,
    textAlign: 'center',
  },
  BabySharkToDoList: {
    padding: '15px',
  },
});
