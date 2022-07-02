import React from 'react'
import style from './App.module.css'

import '../../styles/global.css'
import '../../fonts/fonts.css'

import Header from './../Header/Header';
import Info from '../Info/Info';
import Works from '../Works/Works';
import BackDeco from '../BackDeco/BackDeco';

const App: React.FC = () => {
  return (
    <div className={style.App}>
        <Header />
        <Info />
        <Works />
        <BackDeco />
    </div>
  );
}

export default App;
