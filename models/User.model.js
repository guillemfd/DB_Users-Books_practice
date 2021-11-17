const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}, //si només posem una propietat, no cal que posem el "type"
    books: [{type: Schema.Types.ObjectId, ref: 'Book'}] //vamos a tener un array de ID'd de Mongo de books. Cada usuario tendrá un array con ID de libros
  }, {timestamps: true}
);

const User = model("User", userSchema);

module.exports = User;

