const ECategory = require("../model/categoryModel");
const ECategoryType = require("../model/categoryTypeModel");
const { restApi, messageTypes, errorTypes } = require("../config/constant");

const getCategory=async(req,res)=>{
    try{
        const data=await ECategory.findAll({
            where:{is_deleted:false
            },
            include:[
                {
                model: ECategoryType,
                attributes: ['category_type_id', 'category_type_name'],
                as: 'categoryType'
                }],
                order:[['category_name','ASC']]
        })
        res.status(200).json(data)
    }catch{
        res.status(500).json('GET ERROR')
    }
}

const createCategory =async(req,res)=>{
   try {
    const data = await ECategory.create(req.body); 
    res.status(201).json(data);
  } catch (err) {
    console.error("Create category error:", err);
    res.status(500).json({ error: "Create category error" });
  }
}

const updateCategory=async(req,res)=>{
    try{
        const data =await ECategory.update(req.body,{
            where:{category_id:req.params.id}
        })
        if(data){
            const updatedData =await ECategory.findOne({where:{category_id:req.params.id}})
            res.status(200).json(updatedData)
        }else {
            res.status(404).json({ error: "Category not found" });
        }
    }catch{
        res.status(500).json('UPDATE ERROR')
    }
}

const deleteCategory=async(req,res)=>{
    try{
       const [deleted] = await ECategory.update(
      { is_deleted: true },
      { where: { category_id: req.params.id } }
    );

    if (deleted) {
      res.status(200).json({ message: "Category deleted (soft delete)" });
    } else {
      res.status(404).json({ error: "Category not found" });
    }
    }catch{
        res.status(500).json('DELETE ERROR')
    }
}

module.exports={getCategory,createCategory,updateCategory,deleteCategory}