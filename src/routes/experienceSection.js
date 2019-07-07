import { Router } from 'express'
import { getAllSectionByExperienceId, saveExperienceSection } from '../controlles/experienceSection.controller'
const router = Router()

router.get('/:experienceId', getAllSectionByExperienceId)
router.post('/', saveExperienceSection)

export default router