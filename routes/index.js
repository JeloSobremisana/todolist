var express = require('express');
var router = express.Router();
const axios = require('axios');
const config = require('../config/index');

/* GET home page. */
router.get('/', async function (req, res, next) {
  //  default data for landing page
  const url = `${config.HOST}/todo/get?page=${req.query.page}&limit=${req.query.limit}`;
  const result = await axios.get(url)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    });
  res.render('index', { title: 'Todo List', data: result.data });
});

module.exports = router;
