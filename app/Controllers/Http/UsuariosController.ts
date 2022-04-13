// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from "@adonisjs/core/build/standalone";
import Database from "@ioc:Adonis/Lucid/Database";
import auth from 'App/Models/auth';
export default class UsuariosController {
  async index ({ response}) {
    const users=await Database
    .from('users')
    .join('sesions', 'users.sesion', '=', 'sesions.id')
    .select('users.id')
    .select('users.email')
    .select('sesions.sesion')
    .orderBy('users.id')

    return response.json(users)

    
}
async index2 ({ response}) {
  const users=await Database
  .from('users')
  .select('users.*')

  return response.json(users)

}


  
    async update ({request,params}:HttpContext) {
      const usuario = await auth.findOrFail(params.id)
      usuario.email=request.input("email"),
      usuario.sesion=request.input("sesion"),
      await usuario.save()
    }
  
      async destroy ({params, response}) {
          const usuario= await auth.findOrFail(params.id)
          await usuario.delete();
          return response.json({
            res:true,
            message:"Registro eliminado correctamente"
          })
        }
  
        async show({params}){
          const usuario = await auth.findOrFail(params.id)
          return usuario; 
        }
}
