const axios = require ("axios")

const kittyStatus = async () => {
    try {
        const {imageOfCat} = await axios.get("https://http.cat/[status_code]")
        res.json({imageOfCat})
    } catch (error) {
        console.log()
    }
}

module.exports = {kittyStatus}