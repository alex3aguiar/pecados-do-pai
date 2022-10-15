const tiposTags = {
    historia: "historia",
    viagem: "viagem",
    batalha: "batalha",
    segredo: "segredo",
}
const anoInicial = 1241
const dados = {
    0: {
        dia: new Date(),
        eventos: [{
            data: new Date(anoInicial, 11, 17, 3, 24, 0),
            texto: `
            Nesse dia, uma mãe dá a luz a 3 irmãos gemeos, Hugo, Lui e Zézinho 
            e por conta de uma profecia, os 3 foram separados assim`,
            imagem: "imagens/foto-bebes.png",
            tags: [tiposTags.historia],
        },
        {
            data: new Date(),
            texto: "Hugo cresceu numa família de nobres perto da floresta Nevenunca ",
            imagem: "imagens/mapa-costa-da-espada.png",
            tags: [tiposTags.viagem],
        }, {
            data: new Date(),
            texto: "hteste",
            imagem: "https://img.olhardigital.com.br/wp-content/uploads/2020/11/20201124032733.jpg",
            tags: [tiposTags.viagem, tiposTags.segredo],
        }]
    }
}