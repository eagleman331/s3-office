import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View, Text } from 'react-native'
import styles from "./styles";
import CustomListItem from "../../components/CustomListItem"
import { Avatar, registerCustomIconType } from 'react-native-elements';
import { auth, db } from '../../Firebase';
import { TouchableOpacity } from 'react-native';
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons";

const index = ({navigation}) => {
    const [chats, setChats] = useState([]);

const addChat = () => {navigation.navigate("AddChat")}

const signOutUser =() => {
    auth.signOut().then(() => {
        navigation.replace("LoginScreen");
    });
};

useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
    setChats(
        snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }))
     )
    );
    
    return unsubscribe;
}, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: {backgroundColor: "#fff"},
            headerTitleStyle: {color: "black", textAlign:"center", flex:1},
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{marginLeft:20}} >
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>

                    <Avatar rounded source={{ uri: auth?.currentUser?.photoURL}} />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }} >
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={addChat} activeOpacity={0.5}>
                        <SimpleLineIcons name="pencil" size={24} color="black" />

                    </TouchableOpacity>
                </View>
            )
        });
    }, []);

    const enterChat = (id, chatName) => {
        navigation.navigate("Chat", {
            id,
            chatName
        })
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}> 
                {chats.map(({id, data:{chatName}}) => (
                    <CustomListItem id={id} chatName={chatName} enterChat={enterChat} />

                )) }
            </ScrollView>
        </SafeAreaView>
    )
}

export default index
