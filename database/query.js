const data = require('./data.json');

const getAll = () =>{
    return data;
}
const getOne = (id) =>{
    return data.find(item => item.code === id);
}
module.exports = {
    getAll,
    getOne
}