import Experience from '../models/Experience'
import Profile from '../models/Profile'

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
        order } = req.body
    console.log(req.body)
    try {
        const _experience = new Experience({
            profileId: profileId,
            position,
            company,
            startDate,
            endDate,
            present,
            description,
            order
        })
        const _saveExperience = await _experience.save()
        res.json(_saveExperience)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
}