import { Router } from 'express'
import { getSkillsByProfileId, saveSkill } from '../controlles/skill.controller'
const router = Router()

router.get('/:profileId', getSkillsByProfileId)
router.post('/', saveSkill)

export default router