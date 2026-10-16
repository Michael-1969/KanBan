import Loader from "../Loader/Loader.jsx";
import './CardLoader.css';

const CardLoader = () =>{

    return(
        <div className="card-loader">
            <div className="card-loader__wrapper">
                 <Loader width={100} />
                 <Loader width={30} />
            </div>
            <div className="card-loader__name-task" height={20}>
                <Loader width={120} />
            </div>
            <Loader width={60} height={13} />
        </div>
    )

}

export default CardLoader;