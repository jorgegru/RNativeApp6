import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Principal from './src/components/Principal';
import Sobre from './src/components/Sobre';
import Outros from './src/components/Outros';

export default function App() {
  return (

    <Router>
      <Scene key='principal' component={Principal} initial />
      <Scene key='sobre' component={Sobre} />
      <Scene key='outros' component={Outros} />
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61BD8C',
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
