const util = require('util');
const fs = require('fs');
const path = require('path');
//const dbconn = require('./dbconn');

// pretend to use DB

module.exports = {
    findAllCards: async function(){
        try{
            const readFile = util.promisify(fs.readFile).bind(fs); // promisify
            const data = await readFile(path.resolve('.','backend','models','json','data.json'),'utf8');
            const results = JSON.parse(data);
            
            return results;
        } catch(error) {
            console.error(e);
        }
        return null;
    },
    insertTask: async function(){
    }
}