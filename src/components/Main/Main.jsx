import Content from "../Content/Content.jsx";
import SContainer from "../Global/Container.styled.js";
import {SMain,SMainBlock,SMainContent} from './Main.styled.js';


function Main({ loading, tasks, error }){
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