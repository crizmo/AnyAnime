const anyanime = require("anyanime");

// // Method 1
async function anime() {
    const anime = await anyanime.anime();
    console.log(anime); // Shows random anime pfp image.

    const animeGif = await anyanime.animeGif();
    console.log(animeGif); // Shows random anime gif pfp image.
}

anime();

// // Method 2
async function main() {
    console.log(await anyanime.anime());
}

main();

// Method 3
anyanime.anime().then(console.log);
