function Sessao({sessao}) {
    const { search, sorted } = React.useContext(SearchContext);
    const randomTone = Math.floor(Math.random() * 359);
    const listItens = sessao.eventos.filter(a => a.texto.includes(search)).map((item, index) => {
        return <Item {...item} lado={index % 2 === 0}></Item>
    })[!sorted ? 'reverse' : 'slice']()
    return <div className="  card shadow p-3  rounded" style={{ backgroundColor: `hwb(${randomTone}deg 0% 0% / 7%` }}>
        <h2 className="mx-auto">{sessao.sessao}</h2>
        {listItens}
    </div>


}

