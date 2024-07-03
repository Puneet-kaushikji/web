import React ,{createContext} from 'react';
import './App.css';
import ChildA from './components/ChildA';


  // const data = createContext();

  // context hook
  const data =    createContext();
  const data1 = createContext();

function App() {
   const name = "kaushik";
   const gender = "male";

  return (
    <div>
      <data.Provider value={name}>
      <data1.Provider value ={gender}>
        <ChildA />
      </data1.Provider>
      </data.Provider>

    </div>
  );
}

export default App;
export {data,data1};
