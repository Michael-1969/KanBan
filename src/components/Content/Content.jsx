
// import {cardList} from '../../../data.js';
import Column from "../Column/Column.jsx";
import Loader from "../Loader/Loader.jsx";


const Content = ({loading, tasks, error}) =>{
    
    const allColums = 
              ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово",].map((title,indx) => {
            
             return (
                      loading ? (<Loader key={indx} marginRight={30}/>) : (<Column title={title}  key={indx} tasks={tasks} loading={loading}/>)
                    
                )
        });
       

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