const express = require("express")
const router = express.Router()
const UserService = require("../services/service")
const service = new UserService()

// data insert query
router.post("/create", async (req, res)=>{
    const result = await service.createUser(req.body)
    console.log(result)
    res.send({result})
})

router.get("/read", async(req, res)=>{
    const result = await service.readeData()
    res.send(result)
})

router.put("/updateByName/:id",async(req,res)=>{
    const result = await service.updateById(req.params.id, req.body)
    res.send(result)
})

router.delete("/deleteById/:id",async(req,res)=>{
    const result = await service.delete_by_id(req.params.id,req.body)
    res.send(result)
})



module.exports = router