const {Brand} = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res, next) {
        const {name} = req.body;

        const candidate = await Brand.findOne({where: {name}});
        if (candidate) {
            return next(ApiError.badRequest(`Brand ${name} already exists`));
        }

        const brand = await Brand.create({name});
        return res.json(brand);
    }

    async getAll(req, res) {
        const brands = await Brand.findAll();
        return res.json(brands);
    }
}

module.exports = new BrandController();