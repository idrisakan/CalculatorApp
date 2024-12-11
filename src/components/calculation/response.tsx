//import liraries
import React, {Component, memo, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ResponsePropsTypes } from '../../models/ui/response';

// create a component
const Response: React.FC<ResponsePropsTypes> = ({value}) => {

  console.log('response çalıştır');
  return (
    <View
      style={{
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
      }}>
      <Text style={{color: 'white', fontSize: 30, fontWeight: '600'}}>
        {value}
      </Text>
    </View>
  );
};

export default memo(Response);
