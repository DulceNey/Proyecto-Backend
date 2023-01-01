const axios = require ("axios")

const byRegion = async (req, res) => {
    try {
        const region = await axios.get("https://pokeapi.co/api/v2/pokedex/2")
        res.json(region.data)
    } catch (error) {
        console.log("we are sorry, but something went wrong")
    }
}

module.exports = {byRegion}