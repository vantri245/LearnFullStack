import logo from './logo.svg';
import './App.scss';
// import MyComponents from './Example/MyComponents';
import ListToDo from './Todos/ListToDo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello word!!
        </p>
        < ListToDo />
        {/* <div><MyComponents /></div> */}
      </header>
    </div>
  );
}

export default App;
