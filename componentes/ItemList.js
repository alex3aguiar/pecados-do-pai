function ItemList() {

    return "palavrabemgrande,nem tanto".split('').map((item, index) => {
        return Item(
            12323,
            12323,
            "https://img.olhardigital.com.br/wp-content/uploads/2020/11/20201124032733.jpg",
            index % 2 === 0

        )
    })

}