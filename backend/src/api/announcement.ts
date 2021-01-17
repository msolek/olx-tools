const express = require('express');
const cors = require('cors');
import {getConnection, getManager} from "typeorm";
const app = express;

import  Announcement   from '../models/Announcement';

app.use(cors());
app.use(express.json);
//TODO: 
app.get("/announcement", async(_, res) => {
    console.log()
    try { let listOfAllAnnoucements: any =  
        getManager().find(Announcement);
        res.json(listOfAllAnnoucements);
    } catch (error) {
        console.log(error);
    }

})