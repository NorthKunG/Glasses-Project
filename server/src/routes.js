const GlassesController = require('./controllers/GlassesController')

module.exports = (app) => {
    /* RESFUL Api dor users management */
    // get all glass
    app.get('/glasses', GlassesController.index)

    // create glass
    app.post('/glass', GlassesController.create)

    // edit glass, suspend, active
    app.put('/glass/:glassId', GlassesController.put)

    // delete glass
    app.delete('/glass/:glassId', GlassesController.remove)

    // get glass by id
    app.get('/glass/:glassId', GlassesController.show)}