import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import { Button, Input } from "react-native-elements";
import { db } from "../../../Firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import { KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const index = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [colorTodo, setColorTodo] = useState("yellow");

  const backgroundColors = [
    "#5CD859",
    "#24A6D9",
    "#595BD9",
    "#8022D9",
    "#D159D8",
    "#d85963",
    "#D88559",
  ];

  const renderColors = () => {
    backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, { backgroundColor: color }]}
          onPress={() => setColorTodo({ color })}
        />
      );
    });
  };

  const createTodo = async () => {
    await db
      .collection("todo")
      .add({
        name: input,
        colorBox: colorTodo,
        task: task,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
        <Text style={styles.title}>Create a Todo List</Text>
        <Input
          style={styles.input}
          placeholder="Enter a Task name"
          value={input}
          onChangeText={(text) => setInput(text)}
          leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black" />
          }
        />
        <Input
          style={styles.input}
          placeholder="todo"
          value={task}
          onChangeText={(text) => setTask(text)}
          onSubmitEditing={createTodo}
          leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black" />
          }
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 12,
        }}
      >
        {backgroundColors.map((color) => {
          return (
            <TouchableOpacity
              key={color}
              style={[styles.colorSelect, { backgroundColor: color }]}
              onPress={() => setColorTodo({ color })}
            />
          );
        })}
      </View>

      <Button
        onPress={createTodo}
        title="Create a Task"
        style={{marginTop: 10 }}
      />
    </KeyboardAvoidingView>
  );
};

export default index;
