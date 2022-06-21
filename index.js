// export default addTodo;

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);

  //text is the value of the form. state gets acced ffrom the components
  // const addTodo = text => {
  //   const newTodos = [...todos, {text:text, isCompleted:false}];
  //   setTodos(newTodos);
  // }
  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  //was an event -> index bc it's passed into the toDo component function
  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          //  2 components
          //  items vs forms in the components

          <Todo index={i} todo={todo} remove={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
