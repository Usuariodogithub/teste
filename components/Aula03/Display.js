import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default ({ numero = 0 }) => {
  return (
    <View style={Estilo.Tela}>
  
      <Text style={Estilo.Texto}>{numero}</Text>
    </View>
  );
};


const Estilo = StyleSheet.create({
Tela: {
      margintop: 0,

    backgroundColor: 'black',
    padding: 10,
    width: 950,
    textAlign: 'rigth',
     
  
  },
  Texto: {
    color: 'white',
    fontSize: 100,
    textAlign: 'right',
    paddingRight: 300,
    flex: 100,
  

  },
  
 
});

