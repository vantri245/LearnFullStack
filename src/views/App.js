import logo from './logo.svg';
import './App.scss';
import Nav from './Example/Nav/Nav';
import HomePage from './Example/Nav/HomePage';
import ListToDo from './Example/Todos/ListToDo';
import MyComponents from './Example/Components/MyComponents';
import ListUsers from './Example/Users/ListUsers';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<ListToDo />} />
            <Route path="/components" element={<MyComponents />} />
            <Route path="/users" element={<ListUsers />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>

  );
}
export default App;
