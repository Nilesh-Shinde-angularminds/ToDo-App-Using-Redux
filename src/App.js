import logo from './logo.svg';
import { Provider } from 'react-redux';
import  Store  from '../src/app/Store';
import Todo from './features/Todo';
import './App.css';
import DisplayTodo from './features/DisplayTodo';

function App() {
  return (
   <Provider store={Store}>
      <div className="App">
     <Todo />
     <DisplayTodo />
     </div>
   </Provider>
  );
}

export default App;
