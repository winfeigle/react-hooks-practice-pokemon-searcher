import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, searchQuery }) {
  
  const renderCollection = pokemon.map(poke => {
    if(poke.name.toLowerCase().includes(searchQuery.toLowerCase())){
      return <PokemonCard key={poke.id} poke={poke}/>
    } else return null;
  })



  return (
    <Card.Group itemsPerRow={6}>
      { renderCollection }
    </Card.Group>
  );
}

export default PokemonCollection;
