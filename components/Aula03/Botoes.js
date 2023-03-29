import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default (props) => {
  return (
    <>
      <View style={Estilo.Linha1}>
       <Button title="AC" onPress={() => props.funcLimpar()} />
        <Button title="x" onPress={() => props.funcOperacao('x')} />        
        <Button title="%" onPress={() => props.funcOperacao('%')} />
        <Button title="÷" onPress={() => props.func('÷')} />

     
 

       
      </View>
      <View style={Estilo.Linha}>
     
        <Button title="7" onPress={() => props.digito(7)} />
        <Button title="8" onPress={() => props.digito(8)} />
        <Button title="9" onPress={() => props.digito(9)} />
       <Button title="X" onPress={() => props.funcOperacao(X)} />


       
      </View>
      <View style={Estilo.Linha}>
        
         <Button title="4" onPress={() => props.digito(4)} />
        <Button title="5" onPress={() => props.digito(5)} />
          <Button title="6" onPress={() => props.digito(6)} />
           <Button title="-" onPress={() => props.funcOperacao('-')} />
      </View>
      <View style={Estilo.Linha}>
        <Button title="1" onPress={() => props.digito(1)} />
        <Button title="2" onPress={() => props.digito(2)} />
        <Button title="3" onPress={() => props.digito(3)} />
        <Button title="+" onPress={() => props.funcOperacao('+')} />
        
        
       
      
        
      </View>
    
     <View style={Estilo.Linha}>
             <Button title="%" onPress={() => props.funcdiv('%')}  />
             <Button title="0" onPress={() => props.digito(0)} />
              <Button title="," onPress={() => props.funcvirgula (',')} />
              <Button title="=" onPress={() => props.funcOperacao('=')} />

       </View>

      
    </>

  );
};

const Estilo = StyleSheet.create({
  Linha: {
    flexDirection: 'row',
     height: 30,
     width: 340,
    
     backgroundColor: 'black',
    padding: 10,
    
    textAlign: 'rigth',
     
     
    margin: 0,
    marginTop: 0,
    fontSize: 100,

   flex: 1,
   
    borderColor: '#444',
    
    justifyContent: 'rigth',
    alignItems: 'left',
 },
 Linha1:{
   
     flexDirection: 'row',
     height: 30,
     width: 340,
    
     backgroundColor: 'black',
    padding: 30,
    
    
 
 
  },
});

