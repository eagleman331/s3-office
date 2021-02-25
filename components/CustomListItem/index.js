import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

export default function index({id, chatName, enterChat }) {
    const [chatMessages, setChatMessages] = useState("");
    
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} buttomDivider >
            <Avatar rounded source={{uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: "800"}} >
                    {chatName}
                </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail" >
             
             abc
            </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}


