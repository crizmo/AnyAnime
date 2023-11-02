// This is a test file for anyanime package.
// All tests are valid and working.

// const anyanime = require("anyanime");
const anyanime = require("../index");

// Method 1
async function anime() {
    const anime = await anyanime.getAnime({ type: "png", number: 1 });
    console.log(anime[0]); 
}

anime();

// Method 2
anyanime.getAnime({ type: "png", number: 1 }).then(anime => {
    console.log(anime[0]);
});

// Method 3
anyanime.getAnime({ type: "png", number: 1 }).then(anime => {
    console.log(anime[0]);
}).catch(err => {
    console.log(err);
});