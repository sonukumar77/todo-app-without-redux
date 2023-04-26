const TodoOutputContainer = ({ list, handleDelete, handleComplete }) => {
  console.log("list", list);
  return (
    <div>
      {list?.map((element, idx) => {
        return (
          <div key={idx}>
            <p
              style={
                element.isCompleted
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
              onClick={() => handleComplete(element.id)}
            >
              {element.data}
            </p>
            <button onClick={() => handleDelete(element.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoOutputContainer;
