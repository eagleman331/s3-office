import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./styles";

const index = ({list}) => {
    

    
    return (
        <View style={[styles.listContainer, {backgroundColor: list.colorBox.color}]}>
            <Text style={styles.listTitle} numberOfLines={1} > {list.name} </Text>

            <View>
            <View style={{alignItems: "center"}}>
                <Text style={styles.count}>{list.name}</Text>
                <Text style={styles.subtitle}>Remaining</Text> 
            </View>
            <View style={{alignItems: "center"}}>
                <Text style={styles.count}>{list.name}</Text>
                <Text style={styles.subtitle}>Completed</Text> 
            </View>
           </View>


        </View>
    )
}

export default index