const express = require('express');
const router = express.Router();

const Present = require("../models/present");

/* GET presents listing. */
router.get('/', async function (req, res, next) {
  try {
    const presentsFromDB = await Present.find({});
    res.status(200).render('presents', {presentsFromDB})
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/:id', async function (req, res, next) {
  try {
    const presentFromDB = await Present.findById(req.params.id);
    res.status(200).render('present', presentFromDB)
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
