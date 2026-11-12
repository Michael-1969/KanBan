import {SLoader} from './Loader.styled'

const Loader = ({ width = 200, height = 14, marginRight = 0}) =>{
    return (
        <SLoader
            style={{ width: width + "px", height: height + "px",marginRight: marginRight + "px" }}
        >
        </SLoader>
    )
}

export default Loader;