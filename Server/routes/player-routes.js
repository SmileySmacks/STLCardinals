const express = require('express')
const router = express.Router()
const RS = require('../Model/PlayerInformation')
const CP = require('../controller/controllers')

//localhost:3001/
router.get('/view', CP.getAllEntries)
router.post('/add', CP.addEntry)
router.get('/view/:id', CP.getById)
router.put('/update/:id', CP.updateEntry)
router.delete('/delete/:id', CP.deleteEntry)

module.exports = router