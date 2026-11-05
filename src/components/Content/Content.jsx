
import {cardList} from '../../../data.js';
import Column from "../Column/Column.jsx";


const Content = ({loading}) =>{
    
    const columns = cardList.filter((card, index, arr) => arr.findIndex(t => t.status === card.status) === index).map((item) => item.status);

    const allColums = columns.map((title,indx) => {
            
             return (
                  
                //    loading ? (<Loader marginRight={30}/>) : (<Column title={title}  key={indx} loading={loading}/>)
                     <Column title={title}  key={indx} loading={loading}/>
                )
        });
       // const columns = [...new Set(cardList.map(card => card.status))];

    return(
        <>
        {allColums}
        </>
    )
}

export default Content;