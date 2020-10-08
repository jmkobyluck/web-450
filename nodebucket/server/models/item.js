// /*
// ============================================
// ; Title: Nodebucket
// ; Author: Professor Krasso
// ; Modified By: Jonathan Kobyluck
// ; Data: 7 October 2020
// ; Description: setting up the item schema
// ;===========================================
// */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let itemSchema = new Schema({
  text: { type: String },
});

module.exports = itemSchema;
