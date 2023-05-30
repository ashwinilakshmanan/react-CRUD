import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/create" element = {<Add/>}/>
      <Route path ="/edit" element = {<Edit/>}/>
    </Routes>
      {/* <Home/> */}
    </>
  );
}

export default App;
