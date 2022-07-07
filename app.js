const express = require('express');
const fs = require('fs');
const path = require('path');
const app= express();
const {validationResult}= require('express-validator');
const{validateMoviename} = require('./validator');

const cors = require('cors');

app.use(cors());
app.get('./movies', (req,res)=> res.json(movies));

app.post('./movies', 
 [validateMoviename],
  async (req,res)=>{

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.send({errors});
    }
    const {id,name,rating,release_date} = req.body;

    res.send({
        id,
        name,
        rating,
        release_date
    });
})

app.listen(4000,()=>{
    console.log('Listening on port 4000');
})

const movies =[
    {
        id:0,
        name:'Monster Inc1',
        rating:4,
        release_date:'12/06/2012'
    },
    {
        id:1,
        name:'Monster Inc2',
        rating:3,
        release_date:'12/06/2013'
        
    },
    {
        id:2,
        name:'Monster Inc3',
        rating:2,
        release_date:'12/06/2015'
    },
    {        
        id:3,
        name:'Monster Inc4',
        rating:1,
        release_date:'12/06/2020'
    },
]