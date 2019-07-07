import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
    res.send('cvBlog_API 2019')
})

export default router