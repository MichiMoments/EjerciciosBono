import './App.css';
import NavBar from './NavBar';
import NavBarRotated from './NavBarRotated';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ margin: '20px 0' }}></div>
      <NavBarRotated/>
    </div>
  );
}

export default App;
