const {Model} = require("objection")
const db = require("../config/db")
Model.knex(db)

class User extends Model{
    static get tableName(){
        return "user"
    }

    static get jsonSchema(){
        return {
            type:'object',
            required:['name', 'age', 'gender'],
            properties:{
                id:{
                    type:'integer'
                },
                name:{
                    type:"string"
                },
                age:{
                    type:'integer'
                },
                gender:{
                    type:'string'
                }
            }
        }
    }
}


module.exports = User;