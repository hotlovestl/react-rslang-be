const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { addMethods } = require('../../utils/toResponse');
const Schema = mongoose.Schema;

const Uslugi = new Schema(
  {
    id: String,
    name: String,
    unit: String,
    price: Number,
  },
  { collection: 'uslugiList' }
);

});

addMethods(Uslugi);

module.exports = mongoose.model('uslugiList', Uslugi);
