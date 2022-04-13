const mongoose5=require("mongoose")
const contactos=mongoose5.Schema({
  
  nombre:{
    type:String,
    required:true
  },
  apellido:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  mensaje:{
    type:String,
    required:true
  }
}
);


module.exports=mongoose5.model('contactos',contactos);