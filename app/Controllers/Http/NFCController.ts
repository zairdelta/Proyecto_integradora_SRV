import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const mongoose=require("mongoose");
const sensor_NFC=require("App/Models/Sensor_NFC")
mongoose
    .connect("mongodb://143.198.185.97/Sensore")
    .then(()=>console.log("conectado"))
    .catch((error)=>console.error(error))
    
export default class NFCController {
  public async todo({response}: HttpContextContract) {
    const agg = await sensor_NFC.aggregate([
        {
          '$sort': {
            '_id': -1
          }
        }
      ]);
console.log(agg,"aggre")
    
  if (agg.length==0) {
    
    response.status(400);
    response.json({
      message:"Hubo un error"
    })
  }
  else{
   return response.created({
     status:true,
     response:agg
     
   })
  }
  }
  public async index({response}: HttpContextContract) {
    const agg = await sensor_NFC.aggregate([
      {
        '$sort': {
          '_id': -1
        }
      }, {
        '$limit': 1
      }
    ]);
    console.log(agg,"aggre")
        
      if (agg.length==0) {
        
        response.status(400);
        response.json({
          message:"Hubo un error"
        })
      }
      else{
       return response.created({
         status:true,
         response:agg
         
       })
      }
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {
   const userdata= await request.only(['usuario_acceso','codigo_acceso'])
   console.log(userdata.usuario_acceso,userdata.codigo_acceso)
  
    const userdata1={"NFC":userdata}
    console.log(userdata1)
    const user=await sensor_NFC.create(userdata1);
    return response.created({
      status:true,
      data:user
    })
  }

  public async show({params,response}: HttpContextContract) {
   const user= await sensor_NFC.findOne({params})
    return response.created({
      status:true,
      data:user
    })
    
  }

  public async edit({}: HttpContextContract) {}

  public async update({params,request,response}: HttpContextContract) {
    
    const user = await sensor_NFC.findOne(params)
    console.log(user)
        user.usuario=request.input("usuario")
        user.libro=request.input("libro")
        user.comentario=request.input("comentario")
        await user.save()
        return response.created({
          status:true,
          data:user
        
        })
  }

  public async destroy({params,response}: HttpContextContract) {
    console.log(params._id)
    const borrar=params._id
    await sensor_NFC.deleteOne({_id:borrar})
    .then(()=>console.log("conectado"),
    response.created({
      status:true,
    }))
    .catch((error)=>console.error(error))
   
  }
}
