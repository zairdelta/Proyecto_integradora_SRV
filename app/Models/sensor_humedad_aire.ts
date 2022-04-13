const mongoose=require("mongoose")
const sensor_humedad_aire=mongoose.Schema({
  
  humedad_aire:{
         valor:{
          type:String,
          required:true }
        }
}
);


module.exports=mongoose.model('sensor_humedad_aire',sensor_humedad_aire);