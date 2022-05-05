import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import 'bootstrap/dist/css/bootstrap.min.css';
import Acc from './components/Acc';
import Pag from './components/Pag';
import Car from './components/Car';

function App() {
  return (
    <div className="App">
      <Hello/>
<Acc />
<Pag />
<Car/>


    </div>
  );
}

export default App;
