const TodoListing = ({ item, clickRemoveButtonHandler,clickProgressButtonHandler }) => {
  return (
    <div key={item.id} className="component-style">
      <h2>{item.title}</h2>
      <p>{item.todo}</p>
      <button onClick={() => clickRemoveButtonHandler(item.id)}>삭제</button>
      <button onClick={()=> clickProgressButtonHandler(item.id)}>완료</button>
    </div>
  );
};

export default TodoListing;
