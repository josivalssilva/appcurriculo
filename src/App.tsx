import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {} from 'react-icons';

import foto from './assets/foto.jpg';

const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Josival dos Santos Silva</Text>
          <Text style={style.funcao}>Desenvolvedor Web</Text>
          <View>
            <Text>Facebook</Text>
            <Text>Linkedin</Text>
            <Text>GitHub</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '0000FF',
    flex: 1,
  },
  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 125,
    marginBottom: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  funcao: {
    color: '#939341',
    marginBottom: 15,
  },
});

export default App;
