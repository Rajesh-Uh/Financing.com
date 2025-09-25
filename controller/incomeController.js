const EIncome = require("../model/incomeModel");
const ECategory = require("../model/categoryModel");

const getIncomes = async(req,res)=>{
    try{
        const data = await EIncome.findAll({
            where:{is_deleted:false},
            include:[{
                model: ECategory,
                as: "category",
                attributes: ["category_id", "category_name"],
            }]
        })
        res.status(200).json(data);
    }catch(error){
        
        res.status(500).json(error)

    }
}

const createIncome = async(req,res)=>{
    try{
        const category = await ECategory.findOne({
            where:{ category_id:req.body.category_id,is_deleted:false}
        })
        if(!category){
            res.status(400).json({ error: "Invalid category_id" });
            return;
        }
        const data = await EIncome.create(req.body)
        res.status(201).json(data)     
    }catch{
        res.status(500).json('CREATE INCOME ERROR')
    }
}

const updateIncome = async(req,res)=>{
    try{
        const data = await EIncome.update(req.body,{
            where:{income_id:req.params.id}
        })              
        if(data){
            const updatedData = await EIncome.findOne({where:{income_id:req.params.id}})
            res.status(200).json(updatedData)
        }else{
            res.status(404).json({ error: "Income not found" });
        }           
    }catch{
        res.status(500).json('UPDATE INCOME ERROR')
    }
}

const deleteIncome = async(req,res)=>{
    try{
        const deleted = await EIncome.update(
        { is_deleted: true },   
        { where: { income_id: req.params.id } }
        )
        if(deleted){
            res.status(200).json({ message: "Income deleted (soft delete)" });
        }
    }catch{
        res.status(500).json('DELETE INCOME ERROR')
    }
}   

module.exports={getIncomes,createIncome,updateIncome,deleteIncome}