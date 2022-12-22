import { useEffect, useState } from "react";
import "./styles.css";

const CardItem = ({ itemDataPokemons }) => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonPhoto, setPokemonPhoto] = useState("");
  const [pokemonAbilities, setPokemonAbilities] = useState([]);

  const renderAbilities = () =>
    pokemonAbilities.map((abilities) => (
      <div className="card-pokemon-abilities">{abilities.ability.name}</div>
    ));

  useEffect(() => {
    const fetchDataCard = async () => {
      await fetch(itemDataPokemons.url)
        .then((response) => response.json())
        .then((data) => {
          setPokemonName(data.name);
          setPokemonPhoto(data.sprites.front_default);
          setPokemonAbilities(data.abilities);
        });
    };
    fetchDataCard();
  }, [itemDataPokemons]);

  return (
    <>
      <section className="card-pokemon">
        <div className="card-pokemon-name">{pokemonName}</div>
        <img src={pokemonPhoto} alt="imagePokemon"/>
        {renderAbilities()}
      </section>
    </>
  );
};

export default CardItem;
