import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(setPokemon)
  },[])

  const onSearch = (search) => {
    setSearchQuery(search)
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search
        onSearch={onSearch}
        />
      <br />
      <PokemonCollection pokemon={pokemon} searchQuery={searchQuery}/>
    </Container>
  );
}

export default PokemonPage;
