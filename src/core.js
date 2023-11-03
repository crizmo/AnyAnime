const AnyAnime = () => {
    return {

        getAnime: async ({ type, number }) => {
            const axios = require('axios');
            if (!type) type = 'png';
            if (!number) number = 1;
            if (type !== 'png' && type !== 'gif') throw new Error('Type must be png or gif');
            if (typeof number !== 'number') throw new Error('Number must be a number');
            if (number > 10) throw new Error('Number must be less than 10');

            const res = await axios.get(`https://anyanime-api.kurizu.repl.co/v1/anime/${type}/${number}`);
            return res.data.images;
        },

        checkUpdate: async () => {
            if (!require('node-fetch')) return;
            const packageData = await require('node-fetch')(`https://registry.npmjs.com/anyanime`).then(text => text.json())
            if (require('../package.json').version !== packageData['dist-tags'].latest) {
                console.log('\n\n');
                console.log('\x1b[32m' + '---------------------------------------------------');
                console.log('\x1b[32m' + '| @anyanime                                - [] X |');
                console.log('\x1b[32m' + '---------------------------------------------------');
                console.log('\x1b[33m' + `|            The module is\x1b[31m out of date !\x1b[33m          |`);
                console.log('\x1b[35m' + '|             New version is available!           |');
                console.log('\x1b[34m' + `|                   ${require('../package.json').version} --> ${packageData['dist-tags'].latest}              |`);
                console.log('\x1b[36m' + '|             Run "npm i anyanime@latest"         |');
                console.log('\x1b[36m' + '|                    to update!                   |');
                console.log('\x1b[32m' + '---------------------------------------------------\x1b[37m');
                console.log('\n\n');
            }
        }
    };
};

module.exports = AnyAnime();
