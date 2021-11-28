import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  card: {
    width: '95%',
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 5,
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  card_header: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#93ffe3',
  },
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
});

export default style;
