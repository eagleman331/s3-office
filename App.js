import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChat from "./screens/AddChat"
import ChatScreen from "./screens/ChatScreen"

import MainApp from "./screens/MainApp"
import Feed from "./screens/Feed"
import Task from "./screens/Task"
import AddTodoItem from "./screens/Task/AddTodoItem";

const Stack = createStackNavigator();
const FeedStack = createStackNavigator();
const TaskStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tabs = createBottomTabNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#2C6BED"},
  headerTitleStyle: {color: "white", textAlign: "center", flex:1},
  headerTintColor: "white",
};

const FeedStackScreen = () => (
  <FeedStack.Navigator initialRouteName="Feed" screenOptions={
    globalScreenOptions
  } >
    <FeedStack.Screen name="Feed" options={{title:"S3-Section"}} component={Feed} />
  </FeedStack.Navigator>
);
const TaskStackScreen = () => (
  <TaskStack.Navigator initialRouteName="Task" screenOptions={
    globalScreenOptions
  } >
    <TaskStack.Screen name="Task" component={Task} />
    <TaskStack.Screen name="AddTodo" component={AddTodoItem} />
  </TaskStack.Navigator>
);
const ProfileStackScreen = () => (
  <ProfileStack.Navigator initialRouteName="Task" screenOptions={
    globalScreenOptions
  } >
    <ProfileStack.Screen name="Task" component={Task} />
  </ProfileStack.Navigator>
);
const TabsScreen = () => (
  <Tabs.Navigator initialRouteName="Task" screenOptions={
    globalScreenOptions
  }>
  {/*<Stack.Screen  name="LoginScreen" component={LoginScreen} />
  <Stack.Screen  name="register" component={RegisterScreen} />*/}

  <Tabs.Screen  name="Feed" options={{title:"Home"}} component={FeedStackScreen} />
  <Tabs.Screen  name="Task" component={TaskStackScreen} />
  {/*sample Only  Sample Stack*/}
  <Tabs.Screen  name="Map" component={Feed} />  
  <Tabs.Screen  name="Message"  component={Task} /> 
  {/*sample Only */}


  
</Tabs.Navigator>

);
const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabsScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
