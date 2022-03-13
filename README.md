<p align="center">
  <a href="https://www.npmjs.com/package/anyanime">
    <img src="" alt="Any Anime">
  </a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/anyanime"><img src="https://img.shields.io/npm/v/anyanime.svg?maxAge=3600" alt="NPM version" /></a>
</p>
<h3 align="center"><strong>Get random anime images / pfp .</strong></h3>

## Installation

```bash
$ npm install anyanime
```

## Options

| **Options** | **Description**      | **Usage**          |
| :---------: | -------------------- | ------------------ |
|    anime    | Random anime images. | `anyanime.anime()` |

## Usage

```javascript
const anyanime = require("anyanime");
const anime = anyanime.anime();
console.log(anime); // Shows random anime image.
```

## Discord Bot

```javascript
const anyanime = require("anyanime");
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("messageCreate", async (message) => {
  /* Plain Text */
  if (message.content === "plain") {
    const anime = anyanime.anime();
    message.channel.send({ embeds: [anime] });
  }
  /* Embed Image (D.JS Version 13) */
  if (message.content === "embed") {
    const anime = anyanime.anime();
    const embed = new Discord.MessageEmbed().setImage(anime);
    message.channel.send({ embeds: [embed] });
  }
});
client.login("TOKEN");
```

## Huge Thanks to Amista.

[Amista](https://github.com/amistaa)
