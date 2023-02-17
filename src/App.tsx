import React from 'react';
import logo from './logo.svg';
import './App.css';


import SigIn from './Pages/Auth/SignIn';
import UiButton from './Components/UiButton';

function App() {
  return (
    <>
       <SigIn/>
        <UiButton isFullWidth>
           checking
        </UiButton>
    </>
  );
}

export default App;
