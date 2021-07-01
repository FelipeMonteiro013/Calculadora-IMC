import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Peso from './components/Peso';
import Altura from './components/Altura';
import BtnCalcular from './components/BotaoCalcular';
import Resultado from './components/Resultado';
import Tabela from './components/Tabela';

export default function calcimc() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  const calcimc = () => {
    if (peso === 0 || !peso) {
      alert('Informe o peso');
      return;
    }
    if (altura === 0 || !altura) {
      alert('Informe a altura');
      return;
    }
    const r = peso / (Math.pow(altura, 2))
    setResultado(r.toFixed(1))
  }


  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.Block}>
        <Text>Calculo de IMC</Text>
      </View>

      <Peso
        aoModificar={setPeso}
      />
      <Altura
        aoModificar={setAltura}
      />
      <BtnCalcular
        aoClicar={calcimc}
      />
      <Resultado
        resultado={resultado}
      />
      <Tabela/>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
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
  image: {
    width: '100%',
    height: 230,
    resizeMode: 'contain',
  }
});


