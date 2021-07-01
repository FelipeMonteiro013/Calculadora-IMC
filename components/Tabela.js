import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function Tabela () {

  return (
    <View style={styles.Block}>
        <Image
          source={require('../assets/tabela_imc.png')}
          style={styles.image}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  Block: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 230,
    resizeMode: 'contain',
  }
});