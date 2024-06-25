import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';


function App() {
  const response =[{
    ItemName:"Nirma surf",
    ItemDay:'201',
    ItemMonth:'june',
    ItemYear:'2022',
  },
  {
    ItemName:"surfxel surf",
    ItemDay:'202',
    ItemMonth:'july',
    ItemYear:'2023',
  },
  {
    ItemName:"Huwai",
    ItemDay:'203',
    ItemMonth:'august',
    ItemYear:'2024',
  }
];
  return (
    <div className="App">
      <Item name = {response[0].ItemName} > 
      i am the props children</Item>
      <ItemDate day={response[0].ItemDay} month ={response[0].ItemMonth} year = {response[0].ItemYear}></ItemDate>
      <Item name = {response[1].ItemName}></Item>
      <ItemDate day={response[1].ItemDay} month ={response[1].ItemMonth} year = {response[1].ItemYear}></ItemDate>
      <Item name = {response[2].ItemName}></Item>
      <ItemDate day={response[2].ItemDay} month ={response[2].ItemMonth} year = {response[2].ItemYear}></ItemDate>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with puneet kaushik
        </a>
      </header>
    </div>
  );
}

export default App;
