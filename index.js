import express from "express";
import Database from "./src/Database/database.js";
import Person from "./src/Database/Models/Person.js";
import { routes } from "./src/Routes/routes.js";
import bodyparser from 'body-parser';


const app  = express();
const PORT = 4000;

app.use(bodyparser.json());
let db = new Database;

app.use(routes);
app.listen(PORT, ()=>{
    console.log("Creation de Serveur sur http://localhost:"+ PORT);
})

//let Person = new Person();
/* Person.create([
    {
        name: "GBAGUIDI",
        age:  17,
        favoriteFoods: ['banane','mangue']

    },

    {
        name: "TOTO",
        age:  17,
        favoriteFoods: ['banane']
    },

    {
        name: "COMLAN",
        age:  18,
        favoriteFoods: ['banane','foutou']
    }
]); */
