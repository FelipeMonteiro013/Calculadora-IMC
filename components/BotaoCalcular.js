import React from 'react';
import { Text,  View, StyleSheet, TouchableHighlight } from 'react-native';

export default props => {
  
  return(
    <View style={styles.Block}>
        <TouchableHighlight
          style={styles.button}
          onPress={()=>props.aoClicar()}
        >
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableHighlight>
      </View>
  )
}

const styles = StyleSheet.create({
  Block: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#FFF'
  },
});