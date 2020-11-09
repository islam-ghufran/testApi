import React,{useState}from 'react';
import './App.css';
import Form from './componants/form';
import { addToDos } from './services/authentication';

function App() {
  const[inputTitle, setInputTitle] = useState("");
  const[inputDesc, setInputDesc] = useState("");
  const[toDos, setToDos] = useState({});

  
  const saveToDos = async (data) => {


   console.log('hello am there',data)
   await setToDos(data)
    const result = await addToDos(data)
  }

  return (
  <div className="App">
    <header>
      <h1>Input title and description</h1>
    </header>
    <Form inputTitle={inputTitle}
     onSaveToDos={(todo) => saveToDos(todo)}
     inputDesc={inputDesc} toDos={toDos} setToDos={setToDos} setInputTitle={setInputTitle} setInputDesc={setInputDesc}/>
  </div>
  );
}

export default App;
