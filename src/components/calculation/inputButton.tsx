//import liraries
import React, { Component, memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { width } from '../../utils/constants';
import { InpuButtonprops } from '../../models/ui/inputButton';

// create a component
const InputButton:React.FC<InpuButtonprops> = ({item,handleOnClick}) => {
    console.log(`${item.title} çalıştır`)
    return (
        <TouchableOpacity
        onPress={()=>handleOnClick(item.value)}
        style={styles.container}>
            <Text style={{fontSize:28,color:'white'}}>{item.title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width:width/4-10,
        height:width/4-10,
        borderRadius: 10,
        backgroundColor:'#339dff',
        margin:3,
        padding:10,
    },
});

//make this component available to the app
export default memo(InputButton);
