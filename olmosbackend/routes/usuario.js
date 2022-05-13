const express=require('express')
const router=express.Router();
const usuarioController=require('../controllers/usuarioCont')


router.post('/',usuarioController.crearUsuario);
router.post('/login',usuarioController.logUsuario);
router.get('/',usuarioController.obtenerUsuario);



module.exports=router