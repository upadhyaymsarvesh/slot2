export default {
    betConfig: [0.1, 0.2, 0.5, 1.0, 2.0, 5.0],
    gameWidth: 1920,
    gameHeight: 1080,
    reels: [["sym2", "sym7", "sym7", "sym1", "sym1", "sym5", "sym1", "sym4", "sym5", "sym3", "sym2", "sym3", "sym8", "sym4", "sym5", "sym2", "sym8", "sym5", "sym7", "sym2"]
        , ["sym1", "sym6", "sym7", "sym6", "sym5", "sym5", "sym8", "sym5", "sym5", "sym4", "sym7", "sym2", "sym5", "sym7", "sym1", "sym5", "sym6", "sym8", "sym7", "sym6"]
        , ["sym5", "sym2", "sym7", "sym8", "sym3", "sym2", "sym6", "sym2", "sym2", "sym5", "sym3", "sym5", "sym1", "sym6", "sym3", "sym2", "sym4", "sym1", "sym6", "sym8"]
        , ["sym2", "sym6", "sym3", "sym6", "sym8", "sym8", "sym3", "sym6", "sym8", "sym1", "sym5", "sym1", "sym6", "sym3", "sym6", "sym7", "sym2", "sym5", "sym3", "sym6"]
        , ["sym7", "sym8", "sym2", "sym3", "sym4", "sym1", "sym3", "sym2", "sym2", "sym4", "sym4", "sym2", "sym6", "sym4", "sym1", "sym6", "sym1", "sym6", "sym4", "sym8"]],
    symbols: [
        {
            symName: "sym1",
            filename: "assets/images/Wild.png",
            paytable: [0, 4, 40, 200, 500],
            texture: null,
        },
        {
            symName: "sym2",
            filename: "assets/images/palanquin.png",
            paytable: [0, 3, 30, 150, 300],
            texture: null,
        },
        {
            symName: "sym3",
            filename: "assets/images/dragon.png",
            paytable: [0, 3, 25, 100, 200],
            texture: null,
        },
        {
            symName: "sym4",
            filename: "assets/images/pot.png",
            offset: [0, 0],
            paytable: [0, 0, 20, 75, 150],
            texture: null,
        },
        {
            symName: "sym5",
            filename: "assets/images/fish.png",
            paytable: [0, 0, 15, 50, 100],
            texture: null,
        },
        {
            symName: "sym6",
            filename: "assets/images/lamp.png",
            paytable: [0, 0, 10, 30, 80],
            texture: null,
        },
        {
            symName: "sym4",
            filename: "assets/images/Ace.png",
            paytable: [0, 0, 5, 20, 60],
            texture: null,
        },
        {
            symName: "sym7",
            filename: "assets/images/King.png",
            paytable: [0, 0, 5, 20, 60],
            texture: null,
        },
        {
            symName: "sym8",
            filename: "assets/images/Queen.png",
            paytable: [0, 0, 5, 20, 60],
            texture: null,
        },
        {
            symName: "sym9",
            filename: "assets/images/Jack.png",
            paytable: [0, 0, 5, 20, 60],
            texture: null,
        },
        {
            symName: "sym10",
            filename: "assets/images/Ten.png",
            paytable: [0, 0, 4, 15, 50],
            texture: null,
        },
    ],
};
