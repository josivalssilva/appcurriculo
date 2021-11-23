import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import foto from './assets/foto.jpg';

const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text>Josival dos Santos Silva</Text>
          <Text>Desenvolvedor Web</Text>
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
    backgroundColor: 'E7E7E7',
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
  },
  nome: {}
});

export default App;
