//import liraries
import React, { memo } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ButtonPropTypes} from '../../models/ui/button';

// create a component
const Button: React.FC<ButtonPropTypes> = ({title, backgroundColor,handle}) => {
  // console.log('Button Çalıştı',title);
  return (
    <TouchableOpacity
    onPress={handle}
    style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      margin:10,
      borderRadius: 8,
  },
  title:{
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  }
});

export default Button;
