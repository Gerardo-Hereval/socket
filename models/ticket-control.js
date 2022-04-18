const path = require('path');
const fs = require ('fs');




class TicketControl{
    constructor (){
        this.ultimo     =0;
        this.hoy        =new Date().getDate();
        this.tickets    = [];
        this.ultimos5    = [];

        this.init();
    };
    get toJson(){
        return {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimo5: this.ultimos5
        }
    };

    init(){
        const {hoy, tickets, ultimo, ultimos5 } = require('../db/data.json');
        if (hoy === this.hoy) {
            this.tickets    = tickets;
            this.ultimo     =ultimo;
            this.ultimos5   =ultimos5;
        }
        else {
            this.guardarDB();
        }
    };

    guardarDB(){
        const dbPath= path.join(__dirname,'../db/data.json');
        fs.writeFileSync(dbPath,JSON.stringify(this.toJson));
    };
}

module.exports = TicketControl;