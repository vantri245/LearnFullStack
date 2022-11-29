import logo from './logo.svg';
import './App.scss';
import MyComponents from './Example/MyComponents';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello word!!
        </p>
        <div><MyComponents /></div>
      </header>
    </div>
  );
}

export default App;
