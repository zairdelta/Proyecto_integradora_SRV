const mongoose1=require("mongoose")

const sensor_humedad_suelo=mongoose1.Schema({
  
  humedad_suelo:{
   
  valor:{
    type:String,
    required:true
  },
  }

}
);


module.exports=mongoose1.model('sensor_humedad_suelo',sensor_humedad_suelo);