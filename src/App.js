import logo from './logo.svg';
import './App.css';
import Count from './components/Count';
import Portal from './components/Portal';
import { useReducer } from 'react';

function App() {
  const [state,dispatch] = useReducer()
  return (
    <div className="App">
      <Count></Count>
      <Portal></Portal>
    </div>
  );
}

export default App;
