import Content from "../Content/Content.jsx";

function Main({loading}){

    return(
        <main className="main">
                <div className="container">
                    <div className="main__block">
                        <div className="main__content">
                            <Content loading={loading}/>
                        </div>
                    </div>
                </div>
        </main>
    );
}
export default Main;