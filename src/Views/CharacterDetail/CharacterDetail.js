import React, { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router";

//Component
import CardComponent from "../../Components/CardComponent/CardComponent";

const CharacterDetail = () => {
  const [character, setCharacter] = useState([]);

  let { id } = useParams([]);

  console.log(character);

  useEffect(() => {
    axios(`https://breakingbadapi.com/api/characters/${id}`).then((res) =>
      setCharacter(res.data)
    );
  }, [id]);

  console.log(character);

  return (
    <div>
      {character.map((char) => {
        return (
          <div key={char.char_id}>
            <CardComponent data={char} />
          </div>
        );
      })}
    </div>
  );
};

export default CharacterDetail;
