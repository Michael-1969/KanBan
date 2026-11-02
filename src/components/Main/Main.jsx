import Content from "../Content/Content.jsx";
import SContainer from "../Global/Container.styled.js";
import {SMain,SMainBlock,SMainContent} from './Main.styled.js';


function Main({loading}){
    return(
        <SMain>
            <SContainer>
                <SMainBlock>
                    <SMainContent>
                            <Content loading={loading}/>
                    </SMainContent>
                </SMainBlock>
            </SContainer>
        </SMain>
    );
}
export default Main;