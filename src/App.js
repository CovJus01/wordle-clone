import WordGrid from './components/WordGrid';
import Keyboard from './components/Keyboard';
import {useState} from 'react'
import './App.css';

function App() {
  const [current, setCurrent]= useState({Word:[]});
  let index = 0;
  const keyPressHandle = (letter) => {
    setCurrent({Word: [...current.Word, letter]});
    console.log(`Letter: ${letter} Current: ${current.Word}`);
    index++;
  };

  return (
    <div className='container'>
      <h1>Wurdle</h1>
      <WordGrid word = {current.Word}/>
      <Keyboard keyPress={keyPressHandle}/>
    </div>
  ) ;
}

export default App;
