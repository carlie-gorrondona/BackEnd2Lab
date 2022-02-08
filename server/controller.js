const { rmSync } = require('fs');
const houses = require('./db.json');
let globalID = 4;

module.exports = {

    getHouses: (req, res) => {
        res.status(200).send(houses);
    },

    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body;
        let newHouse = {
            id: globalID,
            address,
            price,
            imageURL
        }
        houses.push(newHouse);
        res.status(200).send(houses);
        globalID++;
    },

    deleteHouse: (req, res) => {
        let index = houses.findIndex(element => element.id === +req.params.id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    },

    updateHouse: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;
        let index = houses.findIndex(element => element.id === +id);
        
        if (type === 'plus') {
            houses[index].price += 10000;
            res.status(200).send(houses);

        } else if (type === 'minus') {
            houses[index].price -= 10000;
            res.status(200).send(houses);

        } else {
            res.status(400).send('You broke something');
        }

    }
}