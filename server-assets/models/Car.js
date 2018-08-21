let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    default: 'model of car'
  },
  year: {
    type: Number,
    required: true
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
  imgUrl: {

  },
  sold: {
    type: Boolean
  }
})

module.exports = mongoose.model('Car', schema)

// this._id = data._id
// this.make = data.make
// this.model = data.model
// this.year = data.year
// this.price = data.price
// this.description = data.description
// this.imgUrl = data.imgUrl
// this.sold = false