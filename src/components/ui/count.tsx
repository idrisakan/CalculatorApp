//import liraries
import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CountPropTypes} from '../../models/ui/count';

// create a component
const Count: React.FC<CountPropTypes> = ({value, title}) => {
  // console.log(`${title} çalıştı` ,value);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>{title + ':' + value}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default memo(Count);
