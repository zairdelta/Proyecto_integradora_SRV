import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const mongoose=require("mongoose");
const sensor_temperatura_aire=require("App/Models/sensor_temperatura_aire")

mongoose
    .connect("mongodb://143.198.185.97/Sensores")
    .then(()=>console.log("conectado"))
    .catch((error)=>console.error(error))
 
export default class NFCController {

  public async todo({response}: HttpContextContract) {
    const agg = await sensor_temperatura_aire.aggregate([
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
    const agg = await sensor_temperatura_aire.aggregate([
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
   const userdata= await request.only(['valor'])
   console.log(userdata.valor)
  
    const userdata1={"tempe_aire":userdata}
    const user=await sensor_temperatura_aire.create(userdata1);
    return response.created({
      status:true,
      data:user
    })
   
  
  }

  public async show({params,response}: HttpContextContract) {
  console.log(params)
   const user= await sensor_temperatura_aire.findOne({params})

    return response.created({
      status:true,
      data:user,
      res:"SI"
    })
    
  }

  public async edit({}: HttpContextContract) {}

  public async update({params,request,response}: HttpContextContract) {
    
    const user = await sensor_temperatura_aire.findOne(params)
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
    await sensor_temperatura_aire.deleteOne({_id:borrar})
    .then(()=>console.log("conectado"),
    response.created({
      status:true,
    }))
    .catch((error)=>console.error(error))
   
  }
}
