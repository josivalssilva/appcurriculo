import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

const Card = ({titulo, children}) => {
  return (
    <View style={style.card}>
      <Text style={style.funcao}>{titulo}</Text>
      {children}
    </View>
  );
};
export default Card;
