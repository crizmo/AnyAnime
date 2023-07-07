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

| **Options** | **Description**      | **Usage**          |
| :---------: | -------------------- | ------------------ |
|    anime    | Anime images / pfp . | `anyanime.anime()` |
|    anime Gif    | Anime gif pfp . | `anyanime.animeGif()` |

## Functions

```javascript
const anyanime = require("anyanime");

await anyanime.anime();
await anyanime.animeGif();

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

const anime = await anyanime.anime();
console.log(anime); // Shows random anime pfp image.

const animeGif = await anyanime.animeGif();
console.log(animeGif); // Shows random anime gif pfp image.
```

## Discord Bot

```javascript
const Discord = require("discord.js");
const client = new Discord.Client();

const anyanime = require("anyanime");
anyanime.checkUpdate(true);

client.on("messageCreate", async (message) => {
  /* Plain Image */
  if (message.content === "plain") {
    const anime = await anyanime.anime();
    message.channel.send({ embeds: [anime] });
  }

  /* Gif Image */
  if (message.content === "gif") {
    const animeGif = await anyanime.animeGif();
    message.channel.send({ embeds: [animeGif] });
  }

  /* Embed Image (D.JS Version 13) */
  if (message.content === "embed") {
    const anime = await anyanime.anime();
    const embed = new Discord.MessageEmbed().setImage(anime);
    message.channel.send({ embeds: [embed] });
  }

  /* Embed Gif Image (D.JS Version 13) */
  if (message.content === "embed gif") {
    const animeGif = await anyanime.animeGif();
    const embed = new Discord.MessageEmbed().setImage(animeGif);
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
- [Replit](https://anyanime-api.kurizu.repl.co/)
- [Github](https://github.com/crizmo/AnyAnime_api)

The installation is given in the [readMe](https://github.com/crizmo/AnyAnime_api/blob/main/README.md) file !

Package Made by: `kurizu.taz` on discord.

## Huge Thanks To Pinterest.

- For the images ofc !
