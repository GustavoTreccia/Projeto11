import React from 'react';
import './global.css';
import Routes from './route';


//Estado é toda aquela variavel que muda de estado. 
//Pode-se utilizar o "useState" (import { useState } from 'react');
//Cada variavel que muda de estado precisa (necessáriamente) de uma variavel para MUDAR o estado da inicial

function App() {
    return ( 
        <Routes />
    );
}

export default App;