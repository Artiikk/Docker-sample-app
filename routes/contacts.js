const { Router } = require('express')
const router = Router({ mergeParams: true })

router.get('/', (_, res) => res.render('contacts'))

module.exports = router