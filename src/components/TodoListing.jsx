const TodoListing = ({ item, clickRemoveButtonHandler,clickProgressButtonHandler }) => {
  return (
    <div key={item.id} className="component-style">
      <h2>{item.title}</h2>
      <p>{item.todo}</p>
      <button className="del" onClick={() => clickRemoveButtonHandler(item.id)}>삭제</button>
      <button className="done" onClick={()=> clickProgressButtonHandler(item.id)}>완료</button>
    </div>
  );
};

export default TodoListing;
