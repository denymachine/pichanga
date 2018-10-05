const Usuario = require('../models/usuarioModel');
const Email = require('../models/emailModel');

module.exports = {

    index: async(req, res, next) => {
        const usuarios = await Usuario.find().populate('emails');
        res.status(200).json(usuarios);
    },
    nuevoUsuario: async(req, res, next) => {
        const nuevoUsuario = new Usuario(req.body);
        const usuario = await nuevoUsuario.save();
        res.status(200).json(usuario);
    },
    getUsuario: async(req, res, next) => {
        const { usuarioID } = req.params;
        const usuario = await Usuario.findById(usuarioID);
        res.status(200).json(usuario);
    },
    replaceUsuario: async(req, res, next) => {

        const { usuarioID } = req.params;
        const nuevoUsuario = req.body;
        const viejoUsuario = await Usuario.findByIdAndUpdate(usuarioID, nuevoUsuario);
        res.status(200).json({ success: true });

    },
    updateUsuario: async(req, res, next) => {

        const { usuarioID } = req.params;
        const nuevoUsuario = req.body;
        const viejoUsuario = await Usuario.findByIdAndUpdate(usuarioID, nuevoUsuario);
        res.status(200).json({ success: true });

    },
    deleteUsuario: async(req, res, next) => {
        const { usuarioID } = req.params;
        const usuarioEl = await Usuario.findByIdAndRemove(usuarioID);
        res.status(200).json({ success: true });
    },
    getUsuarioEmail: async(req, res, next) => {
        const { usuarioID } = req.params;
        const usuario = await Usuario.findById(usuarioID).populate('emails');
        res.status(200).json(usuario);
    },
    nuevoUsuarioEmail: async(req, res, next) => {
        //Rescato el id del usuario
        const { usuarioID } = req.params;
        //Busco el usuario con el id y lo guardo en una variable
        const usuario = await Usuario.findById(usuarioID);
        //creo un nuevo email con los datos que rescato
        const nuevoEmail = new Email(req.body);
        //guardo el email en la bd
        await nuevoEmail.save();
        //en el usuario rescatado le agrego su nuevo email
        usuario.emails.push(nuevoEmail);
        //guardo en la db al usuario
        const nuevoUsuario = await usuario.save();
        console.log(usuario);
        console.log(nuevoEmail);
        await usuario.save();
        res.status(200).json(nuevoUsuario.populate('emails'));
    }

};