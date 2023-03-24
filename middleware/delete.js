const {usersData} = require ("../models/UsersData")

const checkDeleteById = async (req, res, next) =>{
    const users= await usersData.findById(req.params.id)
    if(users!==null) {
        next()
    } else {
        res.status(500).json({msg:"Please, check the Id and try again."})
    }}

module.exports = {checkDeleteById}