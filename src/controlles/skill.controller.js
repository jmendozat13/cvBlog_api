import Skill from '../models/Skill'
import Profile from '../models/Profile'
import Tool from '../models/Tool'
import Progressbar from '../models/Progressbar'

export async function getSkillsByProfileId(req, res) {
    const { profileId } = req.params
    try {
        const _profile = await Profile.findById(profileId)
        if (_profile == null) res.status(404).json({ message: "Profile Not Found" })
        const _skills = await Skill.find({ profileId: profileId })
        res.json(_skills)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

export async function saveSkill(req, res) {
    const { name, profileId, order, type, tools } = req.body
    try {
        const _skill = new Skill({
            name,
            profileId,
            order,
            type
        })
        tools.forEach(tool => {
            console.log(tool.progressbar)
            if (tool.progressbar != null) {
                const _progressbar = new Progressbar({
                    theme: tool.progressbar.theme,
                    role: tool.progressbar.role,
                    style: tool.progressbar.style,
                    valuenow: tool.progressbar.valuenow,
                    valuemin: tool.progressbar.valuemin,
                    valuemax: tool.progressbar.valuemax
                })
                const _tool = new Tool({
                    name: tool.name,
                    progressbar: _progressbar
                })
                _skill.tools.push(_tool)
            } else {
                const _tool = new Tool({
                    name: tool.name
                })
                _skill.tools.push(_tool)
            }
        })
        const _saveSkill = await _skill.save()
        res.json(_saveSkill)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
}