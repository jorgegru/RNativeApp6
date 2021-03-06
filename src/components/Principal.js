import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobreJogo = require('../imgs/sobre_jogo.png');
const btnOutrosJogos = require('../imgs/outros_jogos.png');

export default function Principal() {
  return (
    <View style={ styles.container }>
      
      <View style={ styles.apresentacaoJogo }>
        <Image source = { logo }/>
        <Image source = { btnJogar }/>

      </View>


      <View style={ styles.rodape }>
        <Image source = { btnSobreJogo }/>
        <Image source = { btnOutrosJogos }/>
        
      </View>
      
    </View>
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
