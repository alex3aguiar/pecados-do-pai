const tiposTags = {
    historia: "historia",
    viagem: "viagem",
    batalha: "batalha",
    segredo: "segredo",
    habilidade: "habilidade",
}
const anoInicial = 1241
const dados = [
    {
        dia: new Date(),
        sessao : "sessão zero",
        eventos: [{
            data: new Date(anoInicial, 11, 17, 3, 24, 0),
            texto: `
            Nesse dia, uma mãe dá a luz a 3 irmãos gemeos, Hugo, Lui e Zézinho 
            e por conta de uma profecia, os 3 foram separados assim que nasceram`,
            imagem: "imagens/foto-bebes.png",
            tags: [tiposTags.historia],
        },
        {
            data: new Date(),
            texto: `Um casal de nobres de Nevenunca que não estavam conseguindo ter filhos naturalmnte adotou Hugo.
            Ele foi criado como se fosse um filho legítimo, sempre foi muito amado por seus país adotivos, até o dia da catastrofe no vulcão`,
            imagem: "imagens/mapa-costa-da-espada.png",
            tags: [tiposTags.historia],
        },
        {
            data: new Date(),
            texto: `Ninguém sabe para onde o Zézinho foi levado`,
            tags: [tiposTags.historia],
        },
        {
            data: new Date(),
            imagem : "https://i.pinimg.com/736x/c1/42/bf/c142bf52427dacdd7d7ee6f294b85c46.jpg",
            texto: `e o protagonista dessa história, Lui, foi levado pra um continente distante, Khorvaire`,
            tags: [tiposTags.historia],
        },
        {
            data: new Date(),
            imagem : "https://i.imgur.com/tMj8SQN.jpg",
            texto: `La ele cresceu na Cidade das Torres, mais especificamente em Cantonorte, Escadão.
            Nos primeiros anos ele cresceu sendo cuidado por moradores de rua, logo muito cedo aprendeu que conseguia ganhar um pão ou dois vendendo sucada para guilda dos artesões.
            Ele sempre teve muita vontade de descobrir sua origem
            Ele observava os ferreiros, escultores, funileiros trabalhando`,
            tags: [tiposTags.historia],
        },
        {
            data: new Date(),
            imagem : "https://i.pinimg.com/originals/2d/fe/1d/2dfe1d17b8e5fe8c5ab058863314cda9.png",
            texto: `Uma vez uma ferreira anã, Barbara, Punhos de Marreta  viu Lui  tentando recriar um mecanismo mágico,
             notou o talento dele e o adotou.
             Ele trabalhava ajudando ela, sempre muito interessado em aprender os mais diversos tipos de artesanato.
             E ela cuidava dele como um filho`,
            tags: [tiposTags.historia, tiposTags.habilidade],
        },
        {
            data: new Date(),
            imagem : "imagens/lui.png",
            texto: `Aos 25 ele ja era uma membro respeitado na guilda dos artesãos`,
            tags: [tiposTags.historia],
        },
        {
            data: new Date(),
            imagem : "imagens/lui.png",
            texto: `Ele sempre demonstrava muita vontade de conhecer sua origem, quando chega aos 26 começa pedir ajuda da Barbara pra achar seus parentes`,
            tags: [tiposTags.historia],
        },
        {
            data: new Date(),
            imagem : "https://static1-br.millenium.gg/articles/7/97/67/@/119743-o-famigerado-nexus-de-summoners-rift-imagem-riot-games-article_m-1.png",
            texto: `Barbara e Lui conseguem construir um maquina arcana que vai teletransportar o Lui para perto do parente mais próximo`,
            tags: [tiposTags.historia],
        },
        {
            data: new Date(),
            imagem : "https://cdn.jwplayer.com/v2/media/ExSbFRYO/poster.jpg?width=720",
            texto: `Lui se prepara pra viagem para o desconhecido, se despede e usa a máquina arcana e é teletranspotado para Baldur's Gate `,
            tags: [tiposTags.historia, tiposTags.viagem],
        },
        {
            data: new Date(),
            texto: `Lui  começa a investigar pra ver se acha alguma informação`,
            tags: [tiposTags.historia],
        },
        {
            data: new Date(),
            imagem: "https://as2.ftcdn.net/v2/jpg/00/68/27/29/1000_F_68272941_RxnsIm3EgCbifoDHEe0ZUrTW1d95iDO0.jpg",
            texto: `f3r357r3l3 d0rm170rulu1 m3u,
            d1n c4m3r4 m34 4 unu14 d1n7r3 m1l104n3l3 d1n lum3 d35pr3 c4r3 n1m3n1 nu șt13c1n3e573
            (Și dacar 7i c1ne357ec3 arș71 ei
            dais l4mi57erulun31 57rz17rav3r5473c0n57an7d304m3ni5pre o57radă1n4cces1b1l7u7uror 6ndur1l0r,r34limp051bild3r34l 51gurfăr5 ș7iesigur,
            cumi573rul lucrur1l0rde5ubp137reif1in3cu mo4r73a umedpep3r31 1părul4lb p3 bărb4țicude57inulc0nducândcru47utur0rpe drumulnim1culu1`,
            tags: [tiposTags.segredo],
        },
        
    ]
    },
    {
        dia: new Date(),
        sessao : "sessão 1",
        eventos: [{
            data: new Date(anoInicial, 11, 17, 3, 24, 0),
            texto: `
            Ndadasdasdasdm`,
            imagem: "",
            tags: [tiposTags.historia],
        },
        {
            data: new Date(),
            texto: "asdasdasd ",
            imagem: "https://img.olhardigital.com.br/wp-content/uploads/2020/11/20201124032733.jpg",
            tags: [tiposTags.viagem],
        }, {
            data: new Date(),
            texto: "hteste",
            imagem: "https://img.olhardigital.com.br/wp-content/uploads/2020/11/20201124032733.jpg",
            tags: [tiposTags.viagem, tiposTags.segredo],
        }]
    }
]