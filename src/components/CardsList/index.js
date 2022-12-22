import CardItem from "./CardItem/index";
import "./styles.css";

const CardsList = ({ searchTerm, dataPokemons }) => {
  const renderCards = () => {
    let pokemonsCards = [];
    dataPokemons.forEach((item, index) => {
      if (item.name.includes(searchTerm)) {
        return pokemonsCards.push(
          <CardItem key={index} itemDataPokemons={item} />
        );
      }
    });
    return pokemonsCards;
  };

  return (
    <>
      <div className="cards-list-pokemon">
        <div className="cards-list-center">{renderCards()}</div>
      </div>
    </>
  );
};

export default CardsList;
