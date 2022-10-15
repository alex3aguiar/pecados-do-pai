
const SearchContext = React.createContext();

const useState = React.useState;
function App ()  {
    const [search, setSearch] = useState("");
    const [ sorted, setSorted ] = React.useState(true);
    return <>
        <SearchContext.Provider value={{ search, setSearch,sorted, setSorted }}>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto" href="#">
                        Lui
                    </a>
                </div>
            </nav>

            <div className="container mt-5">
                <Filters />
                <div className="timeline timeline--loaded mt-5" id="timeline-vertical">
                    <div className="timeline__wrap">
                        

                            <Sessao></Sessao>

                        
                    </div>
                </div>
            </div>
        </SearchContext.Provider>

    </>
}



ReactDOM.render(<App/>, document.getElementById('mydiv'))