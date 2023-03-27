import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ character }) => {
  return (
    <Link to={`/${character.id}`}>
      <div className="card">
        <img src={character.image} alt={character.name} />
        <p>Name: {character.name}</p>
        <p>Species: {character.species}</p>
        <p>Status: {character.status}</p>
      </div>
    </Link>
  );
};
