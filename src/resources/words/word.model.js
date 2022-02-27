const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { addMethods } = require('../../utils/toResponse');

const WordsSchema = new Schema(
  {
    group: { type: Number, required: true },
    page: { type: Number, required: true },
    name: { type: String, required: true, max: 100 },
    price: { type: Number, required: true, max: 100 },
    unit: { type: String, required: true, max: 100 },
  },
  { collection: 'words' }
);

addMethods(WordsSchema);

module.exports = mongoose.model('Words', WordsSchema);
