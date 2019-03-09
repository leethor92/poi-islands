'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const poiSchema = new Schema({
  name: String,
  details: String,
  firstName: String,
  lastName: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
});

poiSchema.statics.deleteById = function(id){

  console.log('Selected POI with id: ' + id);

  if (id.match(/^[0-9a-fA-F]{24}$/)) {

    this.findOneAndDelete({_id: id}, function (err) {

        if (err)
          console.log(err);
        else
          console.log('Deleting poi with id: ' + id)

      }
    )
  }
  else
    console.log('Can not find matching id with correct syntax')

};


module.exports = Mongoose.model('PointOfInterest', poiSchema);