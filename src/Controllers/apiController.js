import Person from "../Database/Models/Person.js";

export async function index(req,res){
    const get = await Person.find(req.body);
    res.send(get);
}