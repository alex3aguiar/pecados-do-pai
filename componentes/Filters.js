function Filters() {
    return <div>
        <label for="customRange3" class="form-label">Example range</label>
        <input type="range" class="form-range" min="1" max={dados.length} step="1" id="customRange3"></input>
    </div>
}