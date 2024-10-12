// import logo from './logo.svg';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center my-4">Pokémon List</h1>
      <PokemonList />
    </div>
  );
}

export default App;
