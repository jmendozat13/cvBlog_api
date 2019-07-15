import Experience from '../models/Experience'
import ExperienceSection from '../models/ExperienceSection'
import Profile from '../models/Profile'
import Company from '../models/Company'

export async function getAllExperienceByProfileId(req, res) {
    const { profileId } = req.params
    try {
        const _profile = await Profile.findOne({ _id: profileId })
        if (_profile == null) res.status(404).json({ message: "Profile Not Found" })
        const _experience = await Experience.find({ profileId: profileId })
        res.json(_experience)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
}

export async function saveExperience(req, res) {
    const {
        profileId,
        position,
        company,
        startDate,
        endDate,
        present,
        description,
        order,
        experienceSection } = req.body

    try {
         const _company = new Company({
            name: company.name,
            description: company.description,
            website: company.website
        })

        const _experience = new Experience({
            profileId: profileId,
            position,
            startDate,
            endDate,
            present,
            description,
            order,
            company: _company
        })

        experienceSection.forEach(section => {
            const _experienceSection = new ExperienceSection({
                experienceId: _experience._id,
                name: section.name,
                type: section.type
            })
            section.items.forEach(item => {
                _experienceSection.items.push(item)
            })
            _experience.experienceSection.push(_experienceSection)
        })

        const _saveExperience = await _experience.save()
        res.json(_saveExperience)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
}