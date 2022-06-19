// user input - includes validation
function TodoForm({addTodo}){
  //is addTodo passed in?
  //value takes input from the user & can be put in form.js
  const [value,setValue] = React.useState('');

  //was taken out of index.js
  //keep code that handles the accessing of the code for todos
  //also keep in mind the state
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    //  was taken out of index.js
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}