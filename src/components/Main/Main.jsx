import Content from "../Content/Content.jsx";
import SContainer from "../Global/Container.styled.js";
import {SMain,SMainBlock,SMainContent} from './Main.styled.js';

import { useContext } from "react";
import { TaskContext } from "../../context/ContextAPI.js";


function Main(){
    const { tasks, loading, error } = useContext(TaskContext);
    return(
        <SMain>
            <SContainer>
                <SMainBlock>
                    <SMainContent>
                            <Content loading={loading} tasks={tasks} error={error}/>
                    </SMainContent>
                </SMainBlock>
            </SContainer>
        </SMain>
    );
}
export default Main;