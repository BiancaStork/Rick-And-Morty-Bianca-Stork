import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../redux/action/action";
import styles from "./card.module.css";



export function Card(props) {
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      const character = {
        key: props.id,
        id: props.id,
        name: props.name,
        image: props.image,
        species: props.species,
        gender: props.gender,
      };
      props.addFavorite(character);
    }
  }


  useEffect(() => {
    props.myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
   
       <div className={styles.div}>
        {isFav ? (
          <button  onClick={handleFavorite} className={styles.buttonFav}>❤️</button>
        ) : (
          <button onClick={handleFavorite} className={styles.buttonFav}>🤍</button>
        )}
        <button className={styles.close} onClick={props.onClose}>X</button>
      
      <img className={styles.imgRedonda} src={props.image} alt={props.name} />
      <Link to={`/detail/${props.id}`}>
        <h2 className={styles.name}>{props.name}</h2>
      </Link>
      <div className={styles.divH2}>
      <h2 className={styles.h2}>{props.species} </h2>
      <h2 className={styles.h2}>{props.gender}</h2>
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: function (fav) {
      console.log("pasamos por dispatch");
      dispatch(addFavorite(fav));
    },
    deleteFavorite: function (id) {
      dispatch(deleteFavorite(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
