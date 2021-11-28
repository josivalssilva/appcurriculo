import {stringLiteral} from '@babel/types';
import React from 'react';
import Card from './components/Card';
import style from './components/Card/style';

import {
  View,
  Image,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';

const App = () => {
  function handleRedeSocial(redeSocial) {
    switch (redeSocial) {
      case 'linkedin':
        Alert.alert(
          'Meu Linkedin',
          'https://www.linkedin.com/in/josival-silva-76029325',
        );
        break;
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://www.facebook.com/josivalssilva');
        break;
      case 'github':
        Alert.alert('Meu GitHub', 'https://www.github.com/josivassilva');
        break;
    }
  }
  return (
    <>
      <ScrollView>
        <View style={style.card_header}>
          <View style={style.container_cabecalho}>
            <Image source={foto} style={style.foto} />
            <Text style={style.nome}>Josival Silva</Text>
            <Text style={style.funcao}>Desenvolvedor Web</Text>
            <View style={style.redes_sociais}>
              <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
                <Icon name="facebook" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
                <Icon name="linkedin" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                <Icon name="github" />
              </TouchableOpacity>
            </View>
            <View>
              <Text>Telefone: (81) 988524664</Text>
              <Text>E-mail: josivalssilva@gmail.com </Text>
            </View>
          </View>
          <View style={style.card_container}>
            <Card titulo="Formação Acadêmica">
              <Text>-Doutorado em Ciências da Computaçao - CIn/UFPE (em andamento)</Text>
              <Text>-Mestrado em Informática Aplicada - PPGIA/UFRPE</Text>
              <Text>-Bacharelado em Siustemas de Informação - FACOL</Text>
            </Card>

            <Card titulo="Experiência Pessoal">
              <Text>-Professor Universitário (Uninassau) - 6 meses</Text>
            </Card>

            <Card titulo="Idioma">
              <Text>-Inglês (Intermediário)</Text>
              <Text>-Espanhol (Intermediário)</Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default App;
