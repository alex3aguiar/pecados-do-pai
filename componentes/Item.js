function Item({ texto, data, imagem, lado, tags }) {
    return <div className={`timeline__item timeline__item--${lado ? "left" : "right"}`}>

        <div className="timeline__item__inner">
            <div className="timeline__content__wrap">
                <div className="timeline__content">
                    <h2>{data.toLocaleString()}</h2>
                    <div className="line-break"> {texto}</div>
                    <figure className="figure">
                        <img src={imagem}
                            className="figure-img img-fluid rounded" />
                    </figure>
                    <Tags tags={tags}/>
                </div>
            </div>
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

