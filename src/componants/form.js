import React from 'react';

const Form = ({setInputTitle,setInputDesc,toDos,setToDos, inputDesc, onSaveToDos, inputTitle}) => {

    const inputTextHandler1 = (e) => {
        setInputTitle(e.target.value);
    }
    const inputTextHandler2 = (e) => {
        setInputDesc(e.target.value);
    }
    const setToDoHandler =async (e) =>{
      e.preventDefault();
      let newTodo = {
        title: inputTitle,
        description: inputDesc
      }
      onSaveToDos(newTodo)
    }
    return(
    <form>
        <div >
        <div>
      <input onChange={inputTextHandler1} type="text" className="title" />
      </div>
      <div>
      <input onChange={inputTextHandler2} type="text" className="description" />
      <button onClick={setToDoHandler}className="todo-button" type="submit">
        <i className="fas fa-plus-square" ></i>
      </button>
      </div>
      </div>
      
    </form>
    )
}


export default Form;