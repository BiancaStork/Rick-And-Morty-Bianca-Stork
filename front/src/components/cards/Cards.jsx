import Card from '../card/Card';
import styles from './cards.module.css'




export default function Cards(props) {
   let id=0;
   const { characters,onClose} = props;
   return (

      <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap:'wrap'}}>
      {
         characters.map(cur=>
            <Card 
            styles={styles.hover}
            key={id+=1}
            name={cur.name}
            species={cur.species}
            gender={cur.gender}
            image={cur.image}
            onClose={()=>onClose(cur.id)}
            id={cur.id}
            />
         )
      }
   </div>
   );
   
}
