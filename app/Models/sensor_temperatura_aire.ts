const mongoose3=require("mongoose")

const sensor_temperatura_aire=mongoose3.Schema({
  
  tempe_aire:{
    
    valor:{
      type:String,
      required:true
    }
  }
}
);


module.exports=mongoose3.model('sensor_temperatura_aire',sensor_temperatura_aire);