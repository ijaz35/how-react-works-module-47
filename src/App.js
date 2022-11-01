import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import SmartWatch from './components/SmartWatch/SmartWatch';

function App() {
  return (
    <div className="App">
      <Device name="iphone" price="50000"></Device>
      <SmartWatch></SmartWatch>
    </div>
  );
}

export default App;
