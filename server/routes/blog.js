const express = require('express')
const router = express.Router()
const {create,getblogs,getblog,deleteblog,updateblog} = require('../controllers/blogController')

router.post('/create',create)
router.get('/blogs',getblogs)
router.get('/blog/:slug',getblog)
router.delete('/blog/:slug',deleteblog)
router.put('/blog/:slug',updateblog)

module.exports = router