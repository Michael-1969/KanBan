import {cardList} from '../../../data.js';
import Card from '../Card/Card.jsx';
import CardLoader from '../CardLoader/CardLoader.jsx';

function Column({title,loading}){
    const cards = cardList.filter((item) => { return item.status === title}).map((item,index) => 
                 {
                       return(
                         loading ? (<CardLoader key={index}/>): (<Card item={item} key={item.id} />)
                       )
                });
        
    return(
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            {cards}
        </div>
    );
}
export default Column;