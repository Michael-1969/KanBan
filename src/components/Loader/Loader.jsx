import './Loader.css'

const Loader = ({ width = 200, height = 14, marginRight = 0}) =>{
    return (
        <div
            className="loader"
            style={{ width: width + "px", height: height + "px",marginRight: marginRight + "px" }}
        >
        </div>
    )
}

export default Loader;