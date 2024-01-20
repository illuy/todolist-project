import React, { useState } from "react";
import "./App.css";
import TodoListing from "./components/TodoListing";
import TodoListDone from "./components/TodoListDone";

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [toDoListDone, setToDoListDone] = useState([]);

  const titleChangHandler = (event) => {
    setTitle(event.target.value);
  };
  const todoChangHandler = (event) => {
    setTodo(event.target.value);
  };

  // 추가 버튼 클릭
  const clickAddButtonHandler = (e) => {
    e.preventDefault();
    const newToDoList = {
      id,
      title,
      todo,
    };
    setToDoList([...toDoList, newToDoList]);
    setId(id + 1);
    setTitle("");
    setTodo("");
  };
  // 삭제버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    const newToDoList = toDoList.filter((item) => item.id !== id);
    setToDoList(newToDoList);

     // toDoListDone에서 해당 항목을 삭제
     const newToDoListDone = toDoListDone.filter(item  => item.id !== id);
     setToDoListDone(newToDoListDone);
  };

  // 완료버튼 클릭
  const clickProgressButtonHandler = (id) => {
    const selectedTodo = toDoList.find((item) => item.id === id);
    if (selectedTodo) {
      // 완료된 항목을 toDoListDone에 추가
      setToDoListDone([...toDoListDone, selectedTodo]);

      // 기존의 toDoList에서는 해당 항목을 삭제
      const newToDoList = toDoList.filter((item) => item.id !== id);
      setToDoList(newToDoList);
    }
  };

  //취소버튼 클릭
  const ClickCancelButtonHandler=(id)=>{
    const canceledTodo = toDoListDone.find((item) => item.id === id);
    if (canceledTodo) {
      // toDoListDone에서 해당 항목을 삭제
      const newToDoListDone = toDoListDone.filter((item) => item.id !== id);
      setToDoListDone(newToDoListDone);

      // 취소된 항목을 다시 toDoList에 추가
      setToDoList([...toDoList, canceledTodo]);
    }
  }

  return (
    <div className="wrap">
      <div></div>
      <form>
        TITLE : <input value={title} onChange={titleChangHandler} />
        TODO : <input value={todo} onChange={todoChangHandler} />
        <button onClick={clickAddButtonHandler}>add</button>
      </form>
      <div className="app-style">
        {toDoList.map(function (item) {
          return (
            <TodoListing
              key={item.id}
              item={item}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
              clickProgressButtonHandler={clickProgressButtonHandler}
            />
          );
        })}
      </div>
      <div className="app-done-style">
        {toDoListDone.map(function (item) {
          return (
            <TodoListDone
              key={item.id}
              item={item}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
              ClickCancelButtonHandler={ClickCancelButtonHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
