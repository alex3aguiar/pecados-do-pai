function Filters() {

    const { search, setSearch, sorted, setSorted, sortedS, setSortedS } = React.useContext(SearchContext);

    console.log(sorted)
    return <div>
        <form>
            
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Pesquisa</label>
                <input type="text"   className="form-control" placeholder="Pesquisa" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={()=>setSorted(!sorted)}/>
                    <label className="form-check-label" for="flexCheckDefault">
                       ordem inversa das sessões
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox"  id="flexCheckChecked"  onChange={()=>setSortedS(!sortedS)} />
                    <label className="form-check-label" for="flexCheckChecked">
                    ordem inversa dos eventos
                    </label>
            </div>
        </form>
        111
    </div>
}

