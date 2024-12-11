//import liraries
import React, {Component, useCallback, useMemo, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Button from '../../components/ui/button';
import Count from '../../components/ui/count';

// create a component
const Memoization: React.FC = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [count, setCount] = useState(0);

  const calculation = (a: number, b: number) => {
    console.log('calculation çalıştı');
    return a + b;
  };
  const handleChangeCount = useCallback(() => {
    console.log('handleChangeCount');
    setCount(count + 1);
  }, [count]);

  const total = useMemo(() => calculation(a, b), [a, b]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Count value={a} title="A" />
        <Count value={b} title="B" />
        <Count value={total} title="Toplam" />
      </View>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <Count value={count} title="Adım" />
      </View>
      <View style={{flex: 1}}>
        <Button
          handle={() => setA(a + 1)}
          backgroundColor="green"
          title="A Artır"
        />
        <Button
          handle={() => setB(b + 1)}
          backgroundColor="red"
          title="B Artır"
        />
        <Button
          handle={handleChangeCount}
          backgroundColor="black"
          title="Adım Atla"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Memoization;
