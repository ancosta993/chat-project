const router = require('express').Router();

router.get('/', (req, res) => {
   res.json({message:'Chat API route reached'})
});

module.exports = router;