// import {cardList} from '../../../data.js';
import Card from '../Card/Card.jsx';
import CardLoader from '../CardLoader/CardLoader.jsx';
import {
        SCards,
        SColumn,
        SColumnBlockTitle,
        SColumnTitles} from '../Column/Column.styled.js';

function Column({ title, tasks, loading }){
    const safeTasks = tasks || [];
    const filteredTasks = safeTasks.filter((task) => {
    const taskStatus = task.status?.toLowerCase().trim();
    const columnTitle = title.toLowerCase().trim();
    return taskStatus === columnTitle;
  });
    
    return(
        
                <SColumn>
                    <SColumnBlockTitle>
                        <SColumnTitles>{title}</SColumnTitles>
                    </SColumnBlockTitle>
                    <SCards>
                        {
                         filteredTasks.map((task) => (
                           loading ? (<CardLoader key={task._id}/>):
                            (<Card 
                                key={task._id}
                                item={{
                                    id: task._id,
                                    topic: task.topic,
                                    title: task.title,
                                    date: new Date(task.date).toLocaleDateString("ru-RU"),
                                    status: task.status,
                                    description: task.description
                                }} 
                            />)
                            ))
                        }
                        {filteredTasks.length === 0 && !loading && (
                            <div style={{ padding: "10px", color: "#94A6BE", textAlign: "start" }}>
                                Нет задач
                            </div>
                        )}
                    </SCards>
                </SColumn>
         
    );
}
export default Column;