import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./detail.module.css";
import { Link } from 'react-router-dom'

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  const handleClick = () => navigate("/home");

  useEffect(() => {
    //front
    //fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
    //back promesas
    //fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
    //Express
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    // <div>{character?
    <div className={styles.container}>      
        
          <img className={styles.imagen} src={character.image} alt="image not found" />
       
        <div >
          <h1 className={styles.title}>{character.name}</h1>
          <h2 className={styles.detail}>{character.status}
         {character.specie}</h2>
         <h2 className={styles.detail}>{character.gender}</h2>
         <h2 className={styles.detail}>{character.origin?.name}</h2>
         <h2 className={styles.detail}>{character.location?.name}</h2>
         </div>
         <Link to='/home'><button className={styles.button}>Volver</button></Link>
       
      
    </div>
  );
}
