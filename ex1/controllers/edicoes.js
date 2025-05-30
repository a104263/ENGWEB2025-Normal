var Edicao = require('../models/edicao')

module.exports.list = () => {
    return Edicao
        .find({}, {anoEdição: 1, organizacao: 1, vencedor: 1})
        .exec()
}

module.exports.findById = (id) => {
    return Edicao
        .findOne({_id : id})
        .exec()
}

module.exports.listByOrganizador = (org) => {
    return Edicao
        .find({organizacao : org}, {anoEdição: 1, organizacao: 1, vencedor: 1})
        .exec()
}

module.exports.listOrganizadores = async () => {
    const edicoes = await Edicao.find().exec()
    const organizadores = {};
    edicoes.forEach(edicao => {
        const org = edicao.organizacao;
        if (!organizadores[org]) organizadores[org] = [];
        organizadores[org].push(edicao.anoEdição);
    });
    return Object.entries(organizadores).sort((a, b) => a[0].localeCompare(b[0]));;
}

module.exports.listVencedores = async () => {
    const edicoes = await Edicao.find().exec()
    const vencedores = {};
    edicoes.forEach(edicao => {
        if(edicao.vencedor){
            const v = edicao.vencedor;
            if (!vencedores[v]) vencedores[v] = [];
            vencedores[v].push(edicao.anoEdição);
        }
    });
    return Object.entries(vencedores).sort((a, b) => a[0].localeCompare(b[0]));;
}

module.exports.listInterpretes = async () => {
    const edicoes = await Edicao.find().exec()
    const interpretes = [];
    edicoes.forEach(edicao => {
        edicao.musicas.forEach(musica => {
            if(!interpretes.some(item => item[0] === musica.intérprete)){
                interpretes.push([musica.intérprete, musica.país]);
            }
        })
    });
    return interpretes.sort((a, b) => a[0].localeCompare(b[0]));;
}


module.exports.insert = async (edicao) => {
    const ed = await Edicao.find({ _id: edicao.id }).exec();
    if (ed.length === 0) {
        const newEdicao = new Edicao(edicao);
        newEdicao._id = edicao.id;
        return await newEdicao.save();
    }
    return null;
}

module.exports.update = (id, edicao) => {
    return Edicao.findByIdAndUpdate(id, edicao)
    .exec()
}

module.exports.delete = (id) => {
    return Edicao.findByIdAndDelete(id)
    .exec()
}