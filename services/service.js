const User = require("../models/model")

class UserService{
    async createUser(data){
        try{
            const presentData = await User.query().where({name:data.name})
            if(presentData.length == 0){
                await User.query().insert(data)
                return {message:"data inserted"}
            }else{
                return "data already exist"
            }
        }catch(err){
            console.log({err})
            
        }
    }
    async readeData(data){
        try{
            const presentData = await User.query()
            return ({presentData})
        }catch(err){
            return ({err})
        }
    }
    async updateById(id, newData){
        try{
    
            const presentData = await User.query()
            .where({id})
            if(presentData.length!=0){
                await User.query().where({id:id}).update(newData)
                return {"status":"data updated seccessfully..."}
            }else{
                return {"status":"ID not found..."}
            }
        }catch(err){
            return (err)
        }
    }
    async delete_by_id(id){
        try{
            const data = await User.query().deleteById(id)
            if (data != 0){
                return {"status":"data deleted successfully..."}
            }else{
                return {"status":"ID not found..."}
            }
                
        }catch(err){
            return (err)
        }
    }

}

module.exports = UserService;