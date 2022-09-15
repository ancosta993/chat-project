const router = require('express').Router();

router.get('/', (req, res) => {
   res.json({message:'User API route reached'})
});

module.exports = router;