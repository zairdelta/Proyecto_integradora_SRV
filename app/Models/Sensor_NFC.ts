const mongoose2=require("mongoose")

const sensor_NFC=mongoose2.Schema({
  

  NFC:{
    usuario_acceso:{
      type:String,
      required:true
    },
    codigo_acceso:{
        
      type:String,
      required:true
    },
    dia_acceso:{
      type:Date,
      required:true,
      default:Date.now
      
    },
  }
}
);


module.exports=mongoose2.model('sensor_NFC',sensor_NFC);