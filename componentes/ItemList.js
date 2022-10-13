function ItemList() {
    const {search} = React.useContext(SearchContext);
    return dados.filter(a=> a.texto.includes(search)).map((item, index) => {
        return <Item {...item} lado={ index % 2 === 0}></Item>
    })

}