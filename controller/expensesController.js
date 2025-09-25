const ECategory = require("../model/categoryModel");
const EExpenses = require("../model/expensesModel");

const getExpenses = async(req,res)=>{
    try{
        const data = await EExpenses.findAll({  
        where:{is_deleted:false},
        include:[{
            model: ECategory,       
            attributes: ['category_id', 'category_name'],
            as: 'category'  
        }]
    })
    res.status(200).json(data); 
    }catch{
        res.status(500).json('GET EXPENSES ERROR')
    }
}

const createExpenses = async(req,res)=>{
    try{
        const category =await ECategory.findOne({
            where:{ category_id:req.body.category_id,is_deleted:false}
        })
        if(category){
            const data = await EExpenses.create(req.body)
            res.status(201).json(data)
        }else{
            res.status(404).json({error:"Category not found"}) // changed from 400 to 404
            return; // Prevent further execution
        }
    }catch(error){
        res.status(500).json(error)
    }
}

const updateExpenses = async(req,res)=>{
    try{
        const data=await EExpenses.findByPk(req.body.expenses_id)
        if(data){
            const updatedData = await EExpenses.update(req.body)
            res.status(200).json(updatedData)
        }else{
            res.status(404).josn('Expenses id not found')
        }
    }catch{
        res.status(500).json('Update expenses error');
    }
}

const deleteExpenses = async(req,res)=>{
    try{
        const deleted =await EExpenses.update({is_deleted:true},
            {where:{expenses_id:req.params.id}}
        )
        if(deleted){
            res.status(200).josn(deleted,{message:"Expenses deleted (soft delete)"})        
        }

    }catch{
        res.status(500).json('DELETE EXPENSES ERROR')
    }
}

module.exports = {getExpenses,createExpenses,updateExpenses,deleteExpenses}