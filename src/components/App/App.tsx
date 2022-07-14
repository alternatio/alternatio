import React from 'react'
import style from './App.module.css'

import '../../styles/global.css'
import '../../fonts/fonts.css'

import Header from './../Header/Header';
import Info from '../Info/Info';
import Works from '../Works/Works';
import Contacts from '../Contacts/Contacs';
import Skills from '../Skills/Skills';

const App: React.FC = () => {
  return (
    <div className={style.App}>
        <Header />
        <Info />
        <Skills />
        <Works />
        <Contacts />
    </div>
  );
}

export default App;
