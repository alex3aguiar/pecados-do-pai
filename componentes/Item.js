function Item(texto,data,imagem) {
    return <div className="timeline__item timeline__item--right">
        <div className="timeline__item__inner">
            <div className="timeline__content__wrap">
                <div className="timeline__content">
                    <h2>{data}</h2>
                    <p>{texto}</p>
                    <figure className="figure">
                        <img src={imagem}
                            className="figure-img img-fluid rounded" alt="..."/>
                    </figure>
                </div>
            </div>
        </div>
    </div>;
}