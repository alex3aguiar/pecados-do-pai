
const SearchContext = React.createContext();

const useState = React.useState;
function App ()  {
    const [search, setSearch] = useState("");
    return <>
        <SearchContext.Provider value={{ search, setSearch }}>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Lui
                    </a>
                </div>
            </nav>

            <div className="container mt-5">
                <Filters />
                <div className="timeline timeline--loaded" id="timeline-vertical">
                    <div className="timeline__wrap">
                        <div className="timeline__items" id="timeline__items">

                            <ItemList></ItemList>

                        </div>
                    </div>
                </div>
            </div>
        </SearchContext.Provider>

    </>
}



ReactDOM.render(<App/>, document.getElementById('mydiv'))