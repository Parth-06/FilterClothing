

const mongoose = require('mongoose');



const Cartshema = new mongoose.Schema({
email:{
type: String
},

cart:[{
  id: {type: String, index:{ unique: true}},
  name: {type: String,  unique: true},
  price: {type: Number, unique: true},
  mrp:{type: String},
  image:{type: String},
  image1:{type: String},
  image2:{type: String},
  image3:{type: String},
  cimage1:{type: String},
  cimage2:{type: String},
  cimage3:{type: String},
  inStock: {type: Number},
  fastDelivery:{type: Boolean}, 
  ratings: {type: Number},
  category: {type: String},
  qty:{type: Number},
  description:{type: String},
 
}],

}
)



                                                                                                                     

const Cartlist = mongoose.model('UserCart',  Cartshema)

module.exports = Cartlist;