const mongoose=require('mongoose')
const uniqueValidator = require("mongoose-unique-validator");


const UsuarioSchema= mongoose.Schema({
    nombre:{ type: String, required: true },
    apellido:{ type: String, required: true },
    ci:{ type: String, required: true },
    email: {type: String, required: true },
    password: { type: String, required: true },
    access: { type: String, required: true }
})

UsuarioSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Usuarios", UsuarioSchema);