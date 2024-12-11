import React, {useCallback, useState} from 'react';
import {StyleSheet, SafeAreaView, FlatList, View} from 'react-native';
import {height, inputValues, width} from '../../utils/constants';
import InputButton from '../../components/calculation/inputButton';
import Response from '../../components/calculation/response';
import Switch from '../../components/calculation/switch';
// create a component
const Calculation: React.FC = () => {
  const [inputValue, setInputValue] = useState(0);
  const [switchType,setSwitchType] =useState(1)
  // const handleChangeValue = useCallback(value => {
  //   if (value == '=') handleCalculate();
  //   else setInputValue(prevInput => value + prevInput);
  // });
  const handleCalculate = () => {
    console.log('handleCalculate çalıştı');
  };

  const handleChangeSwitch = (value) => {
    setSwitchType(value)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Switch switchType={switchType} handleChane={handleChangeSwitch}/>
      <Response value={inputValue} />
      <View
        style={{
          width: width - 10,
          height: height / 1000,
          backgroundColor: 'gray',
          alignContent: 'center',
          margin: 10,
        }}
      />
      <View style={{flex: 3, justifyContent: 'flex-end', alignItems: 'center'}}>
        <FlatList
          contentContainerStyle={{flex: 1, justifyContent: 'center'}}
          numColumns={4}
          keyExtractor={item => item.id}
          data={inputValues}
          renderItem={({item}) => (
            <InputButton item={item} handleOnClick={setInputValue} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

//make this component available to the app
export default Calculation;
