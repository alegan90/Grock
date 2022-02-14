import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default GroceryInput = (props) => {
    const [item, setItem] = useState();

    const handleAddItem = (value);
    setItem(null);
}

return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
       
       <TextInput style ={styles.inputField} value={item} onChangeText={text => setItem(text)} placeholder={'Start your grocery list!'} placeholderTextColor={'#fff'} />
       <TouchableOpacity></TouchableOpacity>
        </KeyboardAvoidingView>

        
)