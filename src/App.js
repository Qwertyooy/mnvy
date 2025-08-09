import React from 'react';
import Header from './components/header'
import './App.css';
import About from'./components/about'
import DetailSec from './components/detail';
import Collaboration from './components/colab';


function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About/>
      <DetailSec/>
      <Collaboration/>
    </div>
  );
}

export default App;
