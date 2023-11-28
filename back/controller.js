const db = require('./db.js');

class Controller {
    async get(req, res){
        const items = await db.query(`SELECT * FROM coolplanes`);
        res.json(items.rows);
        console.log('get items', items.rows[0]);        
    }
}

module.exports = new Controller();