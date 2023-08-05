import Navbar from './components/Navbar';
import Formtext from './components/Formtext';
import './App.css';

function App() {
  return (
    <>
      <Navbar title="GaPower"/>
      <Formtext lines={10} />
    </>
  );
}

export default App;
