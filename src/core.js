const anime = require("../database/anime.json");

const AnyAnime = () => {
    return {
        anime: () => anime[mathRandom(anime.length)],
    };
};

const mathRandom = (number) => ~~(Math.random() * number);

module.exports = AnyAnime();