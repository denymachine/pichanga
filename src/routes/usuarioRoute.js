const router = require('express-promise-router')();
const {
    index,
    nuevoUsuario,
    getUsuario,
    replaceUsuario,
    deleteUsuario,
    getUsuarioEmail,
    nuevoUsuarioEmail

} = require('../controllers/usuarioController');

//acciones Usuario
router.get('/', index);
router.post('/', nuevoUsuario);
router.get('/:usuarioID', getUsuario);
router.put('/:usuarioID', replaceUsuario);
router.delete('/:usuarioID', deleteUsuario);
//acciones Email
router.get('/:usuarioID/email', getUsuarioEmail);
router.post('/:usuarioID/email', nuevoUsuarioEmail);

module.exports = router;