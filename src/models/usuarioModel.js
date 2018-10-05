const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usuarioSchema = new schema({
    Pnombre: String,
    Snombre: String,
    Papellido: String,
    Mapellido: String,
    emails: [{
        type: schema.Types.ObjectId,
        ref: 'email'
    }]
});

module.exports = mongoose.model('usuario', usuarioSchema);