import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const mongoose=require("mongoose");
const contacto=require("App/Models/contacto")

mongoose
    .connect("mongodb://143.198.185.97/Sensores")
    .then(()=>console.log("conectado"))
    .catch((error)=>console.error(error))
 
export default class NFCController {

  public async index({response}: HttpContextContract) {
    const agg = await contacto.aggregate([
        {
          '$sort': {
            '_id': -1
          }
        }
      ]);
console.log(agg,"aggre")
    
 
   return response.created({
     status:true,
     response:agg
     
   })
  
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {
   const userdata= await request.only(['nombre','apellido','email','mensaje'])
  
    const user=await contacto.create(userdata)
    
    return response.created({
      status:true,
      data:user
    })
   
  
  }

  public async show({params,response}: HttpContextContract) {
  console.log(params)
   const contac= await contacto.findOne({params})

    return response.created({
      status:true,
      data:contac,
      res:"SI"
    })
    
  }

  public async edit({}: HttpContextContract) {}

  public async update({params,request,response}: HttpContextContract) {
    
    const contac = await contacto.findOne(params)
        console.log(contac)
        contac.usuario=request.input("usuario")
        contac.libro=request.input("libro")
        contac.comentario=request.input("comentario")
        await contac.save()
        return response.created({
          status:true,
          data:contac
        
        })
  }

  public async destroy({params,response}: HttpContextContract) {
    console.log(params._id)
    const borrar=params._id
    await contacto.deleteOne({_id:borrar})
    .then(()=>console.log("conectado"),
    response.created({
      status:true,
    }))
    .catch((error)=>console.error(error))
   
  }
}
