const express = require('express');
const router = express.Router();

const Present = require("../models/present");

/* GET presents list. */
/* ROUTE /presents */
router.get('/', async function (req, res, next) {
  try {
    const presentsFromDB = await Present.find({});
    res.status(200).render('presents', {presentsFromDB});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/* GET new present form. */
/* ROUTE /presents/new */
router.get('/new', async function (req, res, next) {
  try {
    res.status(200).render('new');
  } catch (error) {
    console.error(error);
    next(error);
  }
});


/* POST get present form. */
/* ROUTE /presents/new */
router.post('/new', async function (req, res, next) {
  try {
    const {name, image, price, recipient, description} = req.body
    await Present.create({name, image, price, recipient, description});
    res.status(200).redirect('/presents');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/* GET delete gift. */
/* ROUTE /presents/delete/:id */
router.get('/delete/:id', async function (req, res, next) {
  try {
    const presentFromDB = await Present.findByIdAndDelete(req.params.id);
    res.status(200).redirect('/presents');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/* GET present details. */
/* ROUTE /presents/:id */
router.get('/:id', async function (req, res, next) {
  try {
    const presentFromDB = await Present.findById(req.params.id);
    res.status(200).render('present', presentFromDB);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
