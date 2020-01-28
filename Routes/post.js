const express = require('express');
const router = express.Router();
const Post = require('../Cotacao/cotar');

router.get('/', (req, res) =>{
    res.send('Teste 1 - Post')
});

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    post.save()

});



module.exports = router;