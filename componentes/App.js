
const SearchContext = React.createContext();

const useState = React.useState;
function App() {
    const [search, setSearch] = useState("");
    const [sorted, setSorted] = React.useState(true);
    const [sortedS, setSortedS] = React.useState(true);
    return <>
        <SearchContext.Provider value={{ search, setSearch, sorted, setSorted, sortedS, setSortedS }}>
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


                        {dados.map(a => (<Sessao sessao={a}></Sessao>) )
                       
                         [!sortedS ? 'reverse' : 'slice']()}


                    </div>
                </div>
            </div>
        </SearchContext.Provider>

    </>
}



ReactDOM.render(<App />, document.getElementById('mydiv'))