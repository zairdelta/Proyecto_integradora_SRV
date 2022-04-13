import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { schema,rules } from '@ioc:Adonis/Core/Validator'
import auth from 'App/Models/auth'
export default class AuthController {

   
    public async register({request,response}:HttpContextContract){
        const validations= await schema.create({
            email:schema.string({},[
               rules.email(),
               rules.unique({table:'auths',column:'email'})
            ]),
            password:schema.string(),

        })
        const data=await request.validate({schema:validations})
        const user=await auth.create(data)
        return response.created(user);
    }

    public async login({request,auth,response}:HttpContextContract){
        const email=request.input('email')
        const password=request.input('password')
        const token= await auth.attempt(email,password)
        response.status(200)
        return token.toJSON()
    }
    
}

