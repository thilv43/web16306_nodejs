//fake data
export const data = [
    
    {
        id: 1,
        name: "Products A"
    },
    {
        
        id: 2,
        name: "Products B"
    }

];
//get All
export const getAll = (req , res) => {
    res.jon(data);
}
// get a product
export const list = (req, res) => {
    const result = data.find(item => item.id === +req.params.id);
    res.jon(result);
}
//create
export const create = ( req, res) => {
    data.push(req.body);
    res.jon(data);
}
//get a delete
export const remove = ( req, res) => {
    const newProduct = data.filter(item => item.id !== +req.params.id );
    res.jon(newProduct);
}
// get a update
export const update = (req, res) =>{
    const newProduct = data.map(item => item.id === +req.params.id ? req.body : item);
    res.jon(newProduct);
}