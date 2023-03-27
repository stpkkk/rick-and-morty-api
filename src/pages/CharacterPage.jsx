import React from "react";
import { useParams } from "react-router-dom";

export const CharacterPage = ({ characters }) => {
  const { id } = useParams();

  const character = characters.find(item => item.id === Number(id));
  console.log(character);

  return (
    character && (
      <>
        <div className="character">
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          <p>{character.location.name}</p>
        </div>
        <h2>Episodes with {character.name}:</h2>
        <ul className="episodes">
          {character.episode.map(episode => (
            <li key={episode}>
              <a href={episode}>{episode.split("/").pop()}</a>
            </li>
          ))}
        </ul>
      </>
    )
  );
};
