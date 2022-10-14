const tiposTags = {
    historia: "historia",
    viagem: "viagem",
    batalha: "batalha",
    segredo: "segredo",
}
const dados = {
    0: {
        dia: new Date(),
        eventos: [{
            data: new Date(),
            texto: `https://img.olhardigital.com.br/wp-content
            /uploads/2020/11/20201124032733.jpg
            dasdasd
            dasdasd`,
            imagem: "https://img.olhardigital.com.br/wp-content/uploads/2020/11/20201124032733.jpg",
            tags: [tiposTags.historia],
        },
        {
            data: new Date(),
            texto: "https://img.olhardigital.com.br/wp-content/uploads/2020/11/20201124032733.jpg",
            imagem: "https://img.olhardigital.com.br/wp-content/uploads/2020/11/20201124032733.jpg",
            tags: [tiposTags.viagem, tiposTags.segredo],
        }, {
            data: new Date(),
            texto: "https://img.olhardigital.com.br/wp-content/uploads/2020/11/20201124032733.jpg",
            imagem: "https://img.olhardigital.com.br/wp-content/uploads/2020/11/20201124032733.jpg",
            tags: [tiposTags.viagem, tiposTags.segredo],
        }]
    }
}