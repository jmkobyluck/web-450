// /*
// ============================================
// ; Title: Nodebucket
// ; Author: Professor Krasso
// ; Modified By: Jonathan Kobyluck
// ;===========================================
// */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let itemSchema = new Schema({
  test: { type: String },
});

module.exports = itemSchema;
