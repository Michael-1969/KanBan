import {cardList} from '../../../data.js';
import Card from '../Card/Card.jsx';
import CardLoader from '../CardLoader/CardLoader.jsx';
import {SColumn,
        SColumnBlockTitle,
        SColumnTitles} from '../Column/Column.styled.js';

function Column({title,loading}){
    const cards = cardList.filter((item) => { return item.status === title}).map((item,index) => 
                 {
                       return(
                            // <Card item={item} key={item.id} />
                           loading ? (<CardLoader key={index}/>): (<Card item={item} key={item.id} />)
                       )
                });
        
    return(
        
                <SColumn>
                    <SColumnBlockTitle>
                        <SColumnTitles>{title}</SColumnTitles>
                    </SColumnBlockTitle>
                    {cards}
                </SColumn>
         
    );
}
export default Column;