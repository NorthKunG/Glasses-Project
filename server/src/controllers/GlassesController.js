const { Glass } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const glasses = await Glass.findAll()
            res.send(glasses)
        } catch (error) {
            res.status(500).send({
                error: 'The glasses information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const glass = await Glass.create(req.body)
            res.send(glass.toJSON())
        } catch (error) {
            res.status(500).send({
                error: 'Create glass incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Glass.update(req.body, {
                where: {
                    id: req.params.glassId
                }
            })
            res.send(req.body)
        } catch (error) {
            res.status(500).send({
                error: 'Update glass incorrect'
            })
        }
    },

    async remove(req, res) {
        try {
            const glass = await Glass.findOne({
                where: {
                    id: req.params.glassId
                }
            })

            if (!glass) {
                return res.status(403).send({
                    error: 'The glass information was incorrect'
                })
            }

            await glass.destroy()
            res.send(glass)
        } catch (error) {
            res.status(500).send({
                error: 'The glass information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const glass = await Glass.findByPk(req.params.glassId)
            res.send(glass)
        } catch (error) {
            res.status(500).send({
                error: 'The glass information was incorrect'
            })
        }
    }
}