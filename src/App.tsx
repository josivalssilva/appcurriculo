import {stringLiteral} from '@babel/types';
import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';

const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Josival Silva</Text>
          <Text style={style.funcao}>Desenvolvedor Web</Text>
          <View style={style.redes_sociais}>
            <Icon name="facebook" />
            <Icon name="linkedin" />
            <Icon name="github" />
          </View>
        </View>

        <View style={style.card}>
          <View style={style.card_header}>
            <Text style={style.funcao}>Experiência Profissional</Text>
          </View>
          <View style={stringLiteral.card}>
            <Text>Fui Professor</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
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
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    backgroundColor: '#FF002',
    marginTop: 10,
  },
  card: {
    width: '80%',
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    backgroundColor: '#939393',
  },
  card_header: {
    width: '60%',
    justifyContent: 'center',
    backgroundColor: '#939393',
  },
});

export default App;
