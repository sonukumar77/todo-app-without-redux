const TodoInputContainer = ({ inputVal, setInputVal, handleClick }) => {
  return (
    <div>
      <h1>Todo App Without Redux</h1>
      <small>NOTE: To mark and unmark functionality click on the text</small>
      <div style={{ margin: "1rem" }}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoInputContainer;
