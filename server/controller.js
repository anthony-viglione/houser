module.exports = {
    getAllHouses: (req,res) =>{
        console.log('hit getAllHouses')
        const db = req.app.get('db');

        db.get_all_houses().then(response=>{
            res.status(200).send(response)
        })
    },
    addHouse: (req,res) =>{
        console.log('hit addHouse')
        const db = req.app.get('db')
        const { property_name, address, city, state, zipcode } = req.body;

        db.create_house([property_name, address, city, state, zipcode]).then(response=>{
            // console.log(response)
            res.status(200).send(response)
        })

    }
}