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

    const submitFormHandler = (e) => {
        e.preventDefault();
        if (title && todo) {
            const newToDoList = {
                id,
                title,
                todo,
            };
            setToDoList([...toDoList, newToDoList]);
            setId(id + 1);
            setTitle("");
            setTodo("");
        } else {
            alert("제목과 할 일을 입력하세요!"); // 폼이 유효하지 않을 때 경고창 띄우기
        }
    };
    // 삭제버튼 클릭
    const clickRemoveButtonHandler = (id) => {
        const newToDoList = toDoList.filter((item) => item.id !== id);
        setToDoList(newToDoList);

        // toDoListDone에서 해당 항목을 삭제
        const newToDoListDone = toDoListDone.filter((item) => item.id !== id);
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
    const ClickCancelButtonHandler = (id) => {
        const canceledTodo = toDoListDone.find((item) => item.id === id);
        if (canceledTodo) {
            // toDoListDone에서 해당 항목을 삭제
            const newToDoListDone = toDoListDone.filter(
                (item) => item.id !== id
            );
            setToDoListDone(newToDoListDone);

            // 취소된 항목을 다시 toDoList에 추가
            setToDoList([...toDoList, canceledTodo]);
        }
    };

    return (
        <div className="wrap">
            <header className="title">My Todo List</header>
            <form>
                <div>
                    <label htmlFor="inTitle">TITLE</label>
                    <input
                        id="inTitle"
                        value={title}
                        onChange={titleChangHandler}
                        placeholder="제목을 입력하세요."
                        required
                    />
                </div>
                <div>
                    <label htmlFor="inTodo">TODO</label>
                    <input
                        id="inTodo"
                        value={todo}
                        onChange={todoChangHandler}
                        placeholder="할 일을 입력하세요."
                        required
                    />
                </div>
                <button onClick={submitFormHandler}>Add</button>
            </form>
            <div>
                <fieldset>
                    <legend>Woring</legend>
                    <div className="app-style">
                        {toDoList.map(function (item) {
                            return (
                                <TodoListing
                                    key={item.id}
                                    item={item}
                                    clickRemoveButtonHandler={
                                        clickRemoveButtonHandler
                                    }
                                    clickProgressButtonHandler={
                                        clickProgressButtonHandler
                                    }
                                />
                            );
                        })}
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Done</legend>
                    <div className="app-done-style">
                        {toDoListDone.map(function (item) {
                            return (
                                <TodoListDone
                                    key={item.id}
                                    item={item}
                                    clickRemoveButtonHandler={
                                        clickRemoveButtonHandler
                                    }
                                    ClickCancelButtonHandler={
                                        ClickCancelButtonHandler
                                    }
                                />
                            );
                        })}
                    </div>
                </fieldset>
            </div>
        </div>
    );
};

export default App;
