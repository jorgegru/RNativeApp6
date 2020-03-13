import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const logo = require('./src/imgs/logo.png');
const btnJogar = require('./src/imgs/botao_jogar.png');
const btnSobreJogo = require('./src/imgs/sobre_jogo.png');
const btnOutrosJogos = require('./src/imgs/outros_jogos.png');

export default function Sobre() {
    return (
        <Text style={{ flex: 1, backgroundColor: '#61BD8C'}} >
            Aqui podem ser apresentadas informações sobre o jogo
        </Text>
    );
}