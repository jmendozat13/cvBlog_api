import { Router } from 'express'
import { getAllExperienceByProfileId, saveExperience } from '../controlles/experience.controller'
const router = Router()

router.get('/:profileId', getAllExperienceByProfileId)
router.post('/', saveExperience)

export default router