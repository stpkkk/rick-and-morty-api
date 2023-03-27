import React, { useState } from "react";
import { Card } from "../components/Card";

export const Main = ({ characters }) => {
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value);
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(name.toLowerCase())
  );
  return (
    <div>
      <h1>Rick and Morty</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter the name"
      />
      <div className="cards-wrapper">
        {filteredCharacters.map(character => (
          <Card key={character.id} character={{ ...character }} />
        ))}
      </div>
    </div>
  );
};
