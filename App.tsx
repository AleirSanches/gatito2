import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native';

import TelaPadrao from './src/componentes/TelaPadrao';
import Rotas from './src/Rotas';
Reactotron.useReactNative().connect()

export default function App() {
  Reactotron.log({
    nome:"Sanches"
  });
  return <TelaPadrao><Rotas /></TelaPadrao>;
}