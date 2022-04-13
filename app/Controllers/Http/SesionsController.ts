// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"

export default class SesionsController {
    async index ({ response}) {
        const sesions=await Database
         .from('sesions')
        .select('sesions.*')
        return response.json(sesions)
    }
    
}
