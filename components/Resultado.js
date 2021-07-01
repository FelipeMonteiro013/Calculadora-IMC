import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default props => {

  return (
    <View style={styles.Block}>
      <Text>Resultado: {props.resultado}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Block: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 5,
  },
});