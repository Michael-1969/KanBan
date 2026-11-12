import Loader from "../Loader/Loader.jsx";

import {SCardLoader,
        SCardLoaderWrapper,
        SCardLoaderNameTask} from './CardLoader.styled.js'

const CardLoader = () =>{

    return(
        <SCardLoader>
            <SCardLoaderWrapper>
                 <Loader width={100} />
                 <Loader width={30} />
            </SCardLoaderWrapper>
            <SCardLoaderNameTask height={20}>
                <Loader width={120} />
            </SCardLoaderNameTask>
            <Loader width={60} height={13} />
        </SCardLoader>
    )

}

export default CardLoader;