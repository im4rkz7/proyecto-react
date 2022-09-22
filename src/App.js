import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenido Slotco, el mejor lugar para el gamer"}></ItemListContainer>
    </div>
  );
}

export default App;
