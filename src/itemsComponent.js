import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default GroceryItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.iContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.groceriesContainer}>
                <Text style={styles.groceries}></Text>
                <TouchableOpacity onPress={() => props.deleteGrocery()}>
                <MaterialIcons style={styles.delete} name="delete" size={18} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    iContainer:{
       backgroundColor:'#1ff076',
       marginRight: 12,
       alignItems: 'center',
       justifyContent: 'center',
       width: 50,
       height:50
    },
    index: {
        color: '#fff',
        fontsize: 20
    },
    groceriesContainer: {
        backgroundColor: '#1ff076',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    groceries: {
        color: '#fff',
        width: '90%',
        fontSize: 16,
    },
    delete: {
        marginLeft: 10,
    },
});