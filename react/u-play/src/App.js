import React ,{createContext} from 'react';
import './App.css';
import ChildA from './components/ChildA';


  const data = createContext();

function App() {
   const name = "kaushik";

  return (
    <div>
      <data.Provider value={name}>
    <ChildA />
      </data.Provider>

    </div>
  );
}

export default App;
export {data};
