import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default props => {
  
  return(
    <View style={styles.Block}>
        <Text>Informe sua Altura:</Text>
        <TextInput
          style={styles.input}
          autoFocus={false}
          keyboardType='numeric'
          // value={peso}
          onChangeText={text => props.aoModificar(text)}
        />
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