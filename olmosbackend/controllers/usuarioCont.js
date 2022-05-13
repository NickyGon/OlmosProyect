const Usuarios=require("../models/Usuario")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.crearUsuario= async (req,res)=>{
    try {
        let usuario;
        usuario= new Usuarios(req.body);
        await usuario.save();
        res.send(usuario)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error")
    }
    
}

exports.obtenerUsuario= async (req,res)=>{
    try {
       const usuarios= await Usuarios.find();
       res.json(usuarios);
    } catch (error) {
        console.log(error)
        res.status(500).send("Error")
    }
    
}

exports.logUsuario= async (req,res)=>{
    try {
       let usuarioFetched;
       Usuarios.findOne({email:req.body.email})
       .then(usuario=>{
           if(!usuario){
               return res.status(401).json({
                   message: "Fallo de Autenticación 1"
               });
           }
           usuarioFetched=usuario;
           return bcrypt.compare(req.body.password, usuario.password)
       })
       .then(result=>{
           if (!result){
               return res.status(401).json({
                    message: "Fallo de Autenticación 2"
               })
           }
           const token= jwt.sign(
               {email: usuarioFetched.email, userId: usuarioFetched._id},
               "secret_this_should_be_longer",
               {expiresIn: "1h"}
           );
           res.status(200).json({
               usuarioSuccess:usuarioFetched,
               token: token,
               expiresIn: 3600
           });
       })
       .catch(err=>{
           return res.status(401).json({
            message: "Fallo de Autenticación 3"
           })
       });
       
    } catch (error) {
        console.log(error)
        res.status(500).send("Error")
    }
}