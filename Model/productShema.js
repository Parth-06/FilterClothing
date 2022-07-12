const mongoose = require('mongoose');



const productShema = new mongoose.Schema({

  clothes:[{
    id: {type: String},
    name: {type: String},
    price: {type: Number},
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
    description:{type: String}
  }
  ],
  
 

})




const Productlist = mongoose.model('Products',  productShema)

module.exports = Productlist;