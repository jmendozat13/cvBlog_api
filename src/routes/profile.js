import { Router } from 'express'
import { getProfileById, saveProfile } from '../controlles/profile.controller'
const router = Router()

router.get('/:profileId', getProfileById)
router.post('/', saveProfile)

export default router