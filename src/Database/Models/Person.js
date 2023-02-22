import mongoose from "mongoose";

let PersonSchema = new mongoose.Schema({
    name          : {type:'string', require:true},
    age           : {type:'number', },
    favoriteFoods : [String],
});

const Person = mongoose.model('person',PersonSchema);

export default Person;