import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {type: String, required: true},
    cpf: {type: Number},
    endereco: {type: String}
},{ versionKey: false });

const clientes = mongoose.model('clientes', clienteSchema);

export default clientes;