const { Router } = require('express')
const fs = require('fs')
const router = Router({ mergeParams: true })

const createLog = () => fs.writeFileSync('data/log.txt', 'Hey there')

router.get('/', (_, res) => res.render('home'))

router.post('/', (_, res) => {
  try {
    createLog()
    
    const data = fs.readFileSync('data/log.txt', 'utf8')
    res.json(data)
  } catch(e) {
    console.log('e', e)
  }
})

module.exports = router