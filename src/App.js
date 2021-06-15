import './App.css';
import Input from './components/Input'
import DisplayTodos from './components/DisplayTodos'
import TodoFilter from './components/todoFilter';
function App() {
  return (
    <div className="App">
      {/* <h1>Hi</h1> */}
      {/* {todo List} */}
      {/* {done} */}

      <DisplayTodos />
      <Input />
      <TodoFilter/>

     

    </div>
  );
}

export default App;
