const mongoose = require('mongoose');
const schema = mongoose.Schema;

const emailSchema = new schema({
    alias: String,
    uso: String,
    descripcion: String
});

module.exports = mongoose.model('email', emailSchema);