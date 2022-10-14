function Filters() {

    const { search, setSearch,sorted, setSorted } = React.useContext(SearchContext);
   

    return <div>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Pesquisa</label>
                <input type="text" class="form-control" placeholder="Pesquisa" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div class="form-check">
                <input onChange={()=>setSorted(true) }  class="form-check-input" type="radio"  checked={sorted}  name="flexRadioDefault"   />
                <label class="form-check-label" for="flexRadioDefault1">
                   data crescente {String(sorted)}
                </label>
            </div>
            <div class="form-check">
                <input onChange={()=>setSorted(false) } class="form-check-input" type="radio"    checked={!sorted}  name="flexRadioDefault"  />
                <label class="form-check-label" for="flexRadioDefault2">
                data decrescente {String(!sorted)}
                </label>
            </div>
        </form>
    </div>
}

