
// import {cardList} from '../../../data.js';
import Column from "../Column/Column.jsx";
import Loader from "../Loader/Loader.jsx";


const Content = ({loading, tasks, error}) =>{
    
    //const columns = cardList.filter((card, index, arr) => arr.findIndex(t => t.status === card.status) === index).map((item) => item.status);

    // console.log("columns = ",columns);

    const allColums = 
              ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово",].map((title,indx) => {
            
             return (
                      loading ? (<Loader key={indx} marginRight={30}/>) : (<Column title={title}  key={indx} tasks={tasks} loading={loading}/>)
                    //  <Column title={title}  key={indx} loading={loading}/>
                )
        });
       // const columns = [...new Set(cardList.map(card => card.status))];

    return(
        <>
        {error && (
            <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
              {error}
            </div>
          )}
        {allColums}
        </>
    )
}

export default Content;