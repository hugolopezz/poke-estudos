import "./App.css";
import Header from "./components/Header";
import CardsList from "./components/CardsList";
import PaginationButtons from "./components/PaginationButtons";
import SearchBar from "./components/SearchBar/";

import { useEffect, useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataPokemons, setDataPokemons] = useState([]);
  let [pokemonLimit, setPokemonLimit] = useState(10);

  useEffect(() => {
    const getInfosPokemons = async () => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonLimit}&offset=0`)
        .then((response) => response.json())
        .then((data) => {
          setDataPokemons(data.results);
        });
    };
    getInfosPokemons();
  }, [pokemonLimit]);

  return (
    <div className="App">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CardsList searchTerm={searchTerm} dataPokemons={dataPokemons} />
      <div className="pagination">
        <PaginationButtons
          onClick={() =>
            setPokemonLimit(
              pokemonLimit === 10 ? (pokemonLimit = 10) : pokemonLimit - 10
            )
          }
          buttonText={"Carregar menos"}
        />
        <PaginationButtons
          onClick={() => setPokemonLimit(pokemonLimit + 10)}
          buttonText={"Carregar mais"}
        />
      </div>
    </div>
  );
}

export default App;
