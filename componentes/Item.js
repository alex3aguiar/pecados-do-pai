
function Imagem({imagem}){
    return imagem && imagem != '' && <img src={imagem} className="card-img-top" alt="..."/>
}

function Item({ texto, data, imagem, lado, tags, dataIncompleta }) {
    return <div class="mx-auto  mb-5 card shadow p-3 mb-5 bg-white rounded"   style={{width: "18rem"}}>
    <Imagem imagem={imagem}/>
    <div className="card-body">
      <h5 className="card-title">{! dataIncompleta ? data.toLocaleString() : data.getFullYear()}</h5>
      <h6 className="card-title">{data.getYear() + 659} anos</h6>
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
            [tiposTags.historia]: <a className="link-primary">#História </a>,
            [tiposTags.viagem]: <a className="link-success">#Viagem </a>,
            [tiposTags.batalha]: <a className="link-danger">#Batalha </a>,
            [tiposTags.segredo]: <a className="link-secondary">#Segredo </a>,
            [tiposTags.habilidade]: <a className="link-secondary">#Habilida nova </a>,
        }[a]
    })
}

