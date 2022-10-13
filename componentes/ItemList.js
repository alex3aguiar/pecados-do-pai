function ItemList() {

    return dados.map((item, index) => {
        return <Item {...item} lado={ index % 2 === 0}></Item>
    })

}