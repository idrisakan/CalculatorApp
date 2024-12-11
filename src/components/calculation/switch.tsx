//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SwitchPropsTypes} from '../../models/ui/switch';
import {height} from '../../utils/constants';

// create a component
const Switch: React.FC<SwitchPropsTypes> = ({switchType,handleChane}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={()=> handleChane(1)}
        style={[
          styles.button,
          {
            backgroundColor: switchType == 1 ? '#339dff' : '#cbe1ff',
          },
        ]}>
        <Text
          style={[
            styles.title,
            {
              color: switchType == 1 ? 'white' : 'black',
            },
          ]}>
          Calculator
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> handleChane(0)}
        style={[
          styles.button,
          {
            backgroundColor: switchType == 0 ? '#339dff' : '#cbe1ff',
          },
        ]}>
        <Text
          style={[
            styles.title,
            {
              color: switchType == 0 ? 'white' : 'black',
            },
          ]}>
          Converter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: height / 18,
    flexDirection: 'row',
    borderRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
});

//make this component available to the app
export default Switch;
