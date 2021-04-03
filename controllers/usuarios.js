const { response,request } = require('express');

const usuarioGet = (req = request,res = response) => {
    const { q,edad } = req.query
    res.json({
        msg: 'get API controllador',
        q,
        edad
    });
}
const usuarioPost = (req,res = response) => {

    const {nombre,edad} = req.body;
    res.json({
        msg: 'post API controllador',
        nombre,
        edad
    });
}
const usuarioPut = (req,res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put API controllador',
        id
    });
}
const usuarioPath = (req,res = response) => {
    res.json({
        msg: 'path API controllador'
    });
}
const usuarioDelete = (req,res = response) => {
    res.json({
        msg: 'delete API controllador'
    });
}
module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPath,
    usuarioDelete
}