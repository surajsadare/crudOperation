const express = require('express');
const router = express.Router();
const studentSchema = require('../models/schemaModel');

router.get('/',async(req,res)=>{
    try{
        const data = await studentSchema.find();
        res.json(data);
    }catch(err){
        res.send("Error",err)
    }

});

router.get('/:id',async(req,res)=>{
    try{
        const data = await studentSchema.findById(req.params.id);
        res.json(data);
    }catch(err){
        res.send("Error",err)
    }

});
router.post('/',async(req,res)=>{
    const data = new studentSchema({
        name: req.body.name,
        age: req.body.age,
        techStack: req.body.techStack
    });
    try{
        const a1 = await data.save();
        res.json(a1);
    }catch(err){
        res.send(err);
    }

});

router.patch('/:id',async(req,res)=>{
    try{
        const data = await studentSchema.findById(req.params.id);
        data.name = req.body.name;
        data.age = req.body.age;
        data.techStack = req.body.techStack;
        const a1 = await data.save();
        res.json(a1);
    }catch(err){
        res.send(err);
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const data = await studentSchema.findById(req.params.id);
        const a1 = await data.remove();
        res.json(a1);
    }catch(err){
        res.send(err);
    }
})

module.exports = router;