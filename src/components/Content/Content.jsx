
import {cardList} from '../../../data.js';
import Column from "../Column/Column.jsx";
// import Loader from '../Loader/Loader.jsx';

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
        <div className="main__block">
            <div className="main__content">
                { allColums}
            </div>
        </div>
    )
}

export default Content;