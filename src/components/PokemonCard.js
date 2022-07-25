import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
  const [ sprite, setSprite ] = useState(true);
  const { name, hp, sprites } = poke;

  const handleCardClick = () => {
    setSprite(!sprite);
  }

  return (
    <Card>
      <div onClick={handleCardClick}>
        <div className="image">
          <img src={sprite ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
