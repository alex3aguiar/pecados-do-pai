function Filters() {
    
    const {search, setSearch} = React.useContext(SearchContext);
    return <div>
          <input
           type="text"
           placeholder="Search a Coin"
           className="form-control bg-dark text-light border-0 mt-4 text-center w-100 "
           autoFocus
          onChange={(e) => setSearch(e.target.value)}
         />
    </div>
}

