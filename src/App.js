import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import { Main } from "./pages/Main";
import { CharacterPage } from "./pages/CharacterPage";

function App() {
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    await axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  //Get all characters:
  // const getData = async () => {
  //   let allCharacters = [];
  //   let page = 1;
  //   let response;

  //   do {
  //     response = await axios.get(
  //       `https://rickandmortyapi.com/api/character/?page=${page}`
  //     );
  //     allCharacters = [...allCharacters, ...response.data.results];
  //     page++;
  //   } while (response.data.info.next !== null);

  //   setCharacters(allCharacters);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  console.log(characters);

  return (
    <Routes>
      <Route path="/" element={<Main characters={characters} />} />
      <Route path="/:id" element={<CharacterPage characters={characters} />} />
    </Routes>
  );
}

export default App;
