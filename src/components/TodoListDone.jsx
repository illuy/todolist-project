const TodoListDone = ({ item, clickRemoveButtonHandler ,ClickCancelButtonHandler}) => {
  return (
    <div key={item.id} className="component-style">
      <h2>{item.title}</h2>
      <p>{item.todo}</p>
      <button onClick={() => clickRemoveButtonHandler(item.id)}>삭제</button>
      <button onClick={()=> ClickCancelButtonHandler(item.id)}>취소</button>
    </div>
  );
};

export default TodoListDone;
