import {stringLiteral} from '@babel/types';
import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={style.card_header}>
          <View style={style.container_cabecalho}>
            <Image source={foto} style={style.foto} />
            <Text style={style.nome}>Josival Silva</Text>
            <Text style={style.funcao}>Desenvolvedor Web</Text>
            <View style={style.redes_sociais}>
              <Icon name="facebook" />
              <Icon name="linkedin" />
              <Icon name="github" />
            </View>
            <View>
              <Text>Telefone: (81) 988524664</Text>
              <Text>E-mail: josivalssilva@gmail.com </Text>
            </View>
          </View>

          <View style={style.card_container}>
            <View style={style.card}>
              <Text style={style.funcao}>Experiência Profissional</Text>
              <Text>Professor Universitário (Uninassau) - 6 meses</Text>
            </View>
          </View>

          <View style={style.card_container}>
            <View style={style.card}>
              <Text style={style.funcao}>Formação Acadêmica</Text>
              <Text>
                -Doutorado em Ciência da Computação - CIn/UFPE (em andamento)
              </Text>
              <Text>-Mestrado em Informática Aplicada - PPGIA/UFRPE</Text>
              <Text>-Bacharelado Sistemas de Informação - FACOL</Text>
            </View>
          </View>

          <View style={style.card_container}>
            <View style={style.card}>
              <Text style={style.funcao}>Idioma</Text>
              <Text>Inglês (Intermediário)</Text>
              <Text>Espanhol (Intermediário)</Text>
              <Text>Português (Nativo)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  funcao: {
    color: '#000012',
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    backgroundColor: '#FF002',
    marginTop: 10,
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    width: '90%',
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  card_header: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#93ffe3',
  },
});

export default App;
