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
export const list = ( req , res) => {
    res.json(data);
}
export const get = (req , res) => {
    data.push(req.body);
    res.json(data);
}
export const create = (req, res) => {
    res.json(data.find(item => item.id == req.params.id));
}
export const remove = (req , res) => {
    res.json(data.filter(item => item.id != req.params.id));
}
export const update = ( req , res) =>{
    const result = data.map(item => item.id == req.params.id ? req.body : item)
    res.json(result);
}