import * as Reacr from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
//import SomaDois from './components/SomaDois'
//import { Comp1, Comp2 } from './components/PrimeiroComponente';

import Estilo from './components/estilos'

import Calculadora from './components/Aula03/Calculadora'

export default function App() {
  return (
    <SafeAreaView style={Estilo.container}>
      {/* <Titulo titulo={'Titulo'} subtitulo={'SubTitulo'} /> 
      <Botao /> <Cont />*/ }
   
      <Calculadora />
    </SafeAreaView>

    
  );
}
