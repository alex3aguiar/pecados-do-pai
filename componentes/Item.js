
function Imagem({imagem}){
    return imagem && imagem != '' && <img src={imagem} className="card-img-top" alt="..."/>
}

function Item({ texto, data, imagem, lado, tags }) {
    return <div class="card mx-auto mb-5 shadow p-3 mb-5 bg-white rounded"   style={{width: "18rem"}}>
    <Imagem imagem={imagem}/>
    <div className="card-body">
      <h5 className="card-title">{data.toLocaleString()}</h5>
      <p className="card-text">{texto}</p>
    </div>
    <div className="card-body">
    <Tags tags={tags}/>
    </div>
  </div>;
}

function Tags({ tags }) {
    return tags.map(a => {
        return {
            [tiposTags.historia]: <button type="button" className="btn btn-primary">História</button>,
            [tiposTags.viagem]: <button type="button" className="btn btn-success">Viagem</button>,
            [tiposTags.batalha]: <button type="button" className="btn btn-danger">Batalha</button>,
            [tiposTags.segredo]: <button type="button" className="btn btn-secondary">segredo</button>,
        }[a]
    })
}

