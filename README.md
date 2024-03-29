<p align="center">
  <a href="https://www.npmjs.com/package/anyanime">
    <img src="https://media.discordapp.net/attachments/939799133177384993/952452069686644746/Anyanime.png?width=1279&height=196" alt="Any Anime">
  </a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/anyanime"><img src="https://img.shields.io/npm/v/anyanime.svg?maxAge=3600" alt="NPM version" /></a>
</p>
<h3 align="center"><strong>Get random anime images / pfp.</strong></h3>

## Installation

```bash
$ npm install anyanime
```

## Options

| **Options** | **Description**      | **Usage**          | **Params** |
| :---------: | -------------------- | ------------------ | ---------- |
|    getAnime    | Anime images - png / gif | `anyanime.getAnime({})` | `{ type: "png", number: 10 }` |
|    checkUpdate    | Check for new npm package updates. | `anyanime.checkUpdate(true)` | `true or false` |

By default the type is png and number is 1.
Max number of images you can ask for at a time is 10.

## Functions

```javascript
const anyanime = require("anyanime");

anyanime.getAnime({}).then(console.log); // Shows 1 random anime pfp image.

anyanime.getAnime({ type: "png", number: 10 }).then(console.log); // Shows 10 random anime pfp images.
anyanime.getAnime({ type: "gif", number: 10 }).then(console.log); // Shows 10 random anime gif pfp images.

// Both are async functions because it fetches the images from AnyAnime Api and that might take some time.

anyanime.checkUpdate(true);
```

- Search for new npm package updates on bot startup! Latest version will be displayed in console.

# Database

- Png image database images size : 768
- Gif image database images size : 183
- The database size will be updated tho.

## Usage

```javascript
const anyanime = require("anyanime");

async function anime() {
    const anime = await anyanime.getAnime({ type: "png", number: 1 });
    console.log(anime); 

    // by default the type is png and number is 1.
}
// Both are async functions because it fetches the images from AnyAnime Api and that might take some time.
anime();
```

Check the tests/test.js file for more examples. [Click here](https://github.com/crizmo/AnyAnime/blob/main/tests/test.js) to go to the file.

## Discord Bot

```javascript
const Discord = require("discord.js");
const client = new Discord.Client();

const anyanime = require("anyanime");
anyanime.checkUpdate(true);

client.on("messageCreate", async (message) => {
  /* Plain Image */
  if (message.content === "plain") {
    const anime = await anyanime.getAnime({ type: "png", number: 1 });
    message.channel.send({ embeds: [anime[0]] });
  }

  /* Gif Image */
  if (message.content === "gif") {
    const animeGif = await anyanime.getAnime({ type: "gif", number: 1 });
    message.channel.send({ embeds: [animeGif[0]] });
  }

  /* Embed Image (D.JS Version 13) */
  if (message.content === "embed") {
    const anime = await anyanime.getAnime({ type: "png", number: 1 });
    const embed = new Discord.MessageEmbed().setImage(anime[0]);
    message.channel.send({ embeds: [embed] });
  }

  /* Embed Gif Image (D.JS Version 13) */
  if (message.content === "embed gif") {
    const animeGif = await anyanime.getAnime({ type: "gif", number: 1 });
    const embed = new Discord.MessageEmbed().setImage(animeGif[0]);
    message.channel.send({ embeds: [embed] });
  }
});

client.login("TOKEN");
```

## For more information on how to use it visit

- [Prefix usage](https://github.com/crizmo/Elina-dev/blob/main/commands/fun/animepfp.js)
- [Slash Usage](https://github.com/crizmo/Elina-dev/blob/main/src/slash/fun/anyanime.js)

## AnyAnime Api

If you dont want to use the npm package you can use the api instead.

- [Rapid Api](https://rapidapi.com/Kurizu/api/any-anime/)
- [Vercel](https://any-anime-api.vercel.app/)
- [Github](https://github.com/crizmo/AnyAnime_api)

The installation is given in the [readMe](https://github.com/crizmo/AnyAnime_api/blob/main/README.md) file !

Package Made by: `kurizu.taz` on discord.

## Huge Thanks To Pinterest.

- For the images ofc !
