import ExperienceSection from '../models/ExperienceSection'
import Experience from '../models/Experience'


export async function getAllSectionByExperienceId(req, res) {
    const { experienceId } = req.params
    try {
        const _experience = await Experience.findOne({ _id: experienceId })
        if (_experience == null) res.status(404).json({ message: "Experience Not Found" })
        const _experienceSection = await ExperienceSection.find({ experienceId: experienceId })
        res.json(_experienceSection)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
}

export async function saveExperienceSection(req, res) {
    const {
        experienceId,
        name,
        type,
        items } = req.body
    console.log(req.body)
    try {
        const _experienceSection = new ExperienceSection({
            experienceId,
            name,
            type
        })
        items.forEach(item => {
            _experienceSection.items.push(item)
        })
        const _saveExperienceSection = await _experienceSection.save()
        res.json(_saveExperienceSection)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
}