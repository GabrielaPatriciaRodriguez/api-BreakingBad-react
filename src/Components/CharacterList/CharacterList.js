import React, { useEffect, useState } from "react";

import axios from "axios";

import "./CharacterList.css"

//Component
import CardComponent from "../CardComponent/CardComponent";


const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios("https://breakingbadapi.com/api/characters")
        .then((res) => setCharacters(res.data))
    }, []);

  return (
    <div className="characterListContainer">
      {characters.map((char) => {
        return(
          <div key={char.char_id}>
            <CardComponent />
          </div>
        )
      })}
    </div>
  )
}

export default CharacterList;