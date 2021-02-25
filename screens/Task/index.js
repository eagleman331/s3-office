import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native";
import tempData from "./../../tempData";
import colors from "./../../Colors";
import TodoList from "./TodoList";
import { db, auth } from "../../Firebase";
import * as firebase from "firebase";
import { Input } from "react-native-elements";
import { ScrollView } from 'react-native';

const index = ({navigation}) => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    const unsubscribe = db.collection("todo")
    .onSnapshot((querySnapshot) => {
      const todo =[];

      querySnapshot.forEach(documentSnapshot => {
        todo.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setTodo(todo);
      setLoading(false)
    });
    
    return () => unsubscribe();
}, []);


const addTodo = () => {navigation.navigate("AddTodo")}





  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          Todo <Text style={{ fontWeight: "300", color: "#24A6D9" }}>List</Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity onPress={addTodo} style={styles.addList}>
          <AntDesign name="plus" size={16} color="#24A6D9" />
        </TouchableOpacity>

        <Text style={styles.add}>Add List</Text>
      </View>

      <View style={{ height: 275, paddingLeft: 32 }}>

        <FlatList
            
        />
        <View style={{height:275, paddingLeft: 32}}>
       
        <FlatList
        data={todo}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem= {({item}) => (<TodoList list={item}  />)
        }
        />
           
        </View>
      </View>
    </View>
  );
}

export default index