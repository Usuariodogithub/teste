import React from 'react';

import Display from './Display';
import Botoes from './Botoes';

export default (props) => {
  const [numero, setNumero] = React.useState('0');
  const [expMat, setExpMat] = React.useState('0');
  const [op, setOp] = React.useState(null);

  const atualizarCalc = (n) => {
    if (numero == '0' && n == '0') return;
    if (numero == '0') setNumero(n.toString());
    else setNumero(numero.toString() + n.toString());
  };

  const limpar = () => {
    setNumero('0');
    setExpMat('0');
    setOp(null);
  };

  const operacao = (operador) => {
    switch (operador) {
      case '+':
        setExpMat(expMat + '+' + numero);
        setNumero('0');
        setOp('+');
        break;
      case '-':
        setExpMat(expMat + '-' + numero);
        setNumero('0');
        setOp('-');
        break;
      case 'x':
        if (expMat.length == 1 && expMat.indexOf('0') == 0) {
          setExpMat(expMat + '1' + 'x' + numero);
        } else {
          setExpMat(expMat + 'x' + numero);
        }
        setNumero('x');
        setOp('x');
        break;
      case '=':
        if (op == '=') {
          break;
        }
        setNumero(eval(expMat + op + numero));
        setExpMat('0');
        setOp('=');
        break;
    }
  };

  const virgula = () => {
    if (numero.indexOf(',') != -1) {
      return;
    }
    setNumero(numero.toString() + ',');
  };
  
  
  return (
    <>
      <Display numero={numero} />
      <Botoes
        digito={atualizarCalc}
        funcLimpar={limpar}
        funcvirgula={virgula}
        funcOperacao={operacao}
      />
    </>
  );
};
