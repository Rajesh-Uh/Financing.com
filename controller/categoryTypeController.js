const ECategoryType = require("../model/categoryTypeModel");

const getCategoryTypes = async (req, res) => {
    try {
        const data = await ECategoryType.findAll({ where: { is_deleted: false } });
        res.status(200).json(data);
    } catch {
        res.status(500).json('GET ERROR');
    }
};

const createCategoryType = async (req, res) => {
    try {
        const data = await ECategoryType.create(req.body);
        res.status(201).json(data);
    } catch {
        res.status(500).json('CREATE ERROR');
    }
};

const updateCategoryType = async (req, res) => {
    try {
        const data = await ECategoryType.update(req.body, {
            where: { category_type_id: req.params.id }
        });
        if (data[0]) {
            const updatedData = await ECategoryType.findOne({ where: { category_type_id: req.params.id } });
            res.status(200).json(updatedData);
        } else {
            res.status(404).json({ error: "CategoryType not found" });
        }
    } catch {
        res.status(500).json('UPDATE ERROR');
    }
};

const deleteCategoryType = async (req, res) => {
    try {
        const [deleted] = await ECategoryType.update(
            { is_deleted: true },
            { where: { category_type_id: req.params.id } }
        );
        if (deleted) {
            res.status(200).json({ message: "CategoryType deleted (soft delete)" });
        } else {
            res.status(404).json({ error: "CategoryType not found" });
        }
    } catch {
        res.status(500).json('DELETE ERROR');
    }
};

module.exports = { getCategoryTypes, createCategoryType, updateCategoryType, deleteCategoryType };