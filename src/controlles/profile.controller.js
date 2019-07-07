import Profile from '../models/Profile'

export async function getProfileById(req, res) {
    const { profileId } = req.params
    try {
        const _profile = await Profile.findById(profileId)
        console.log(_profile)
        if (_profile == null) res.status(404).json({ message: "Profile Not Found" })
        res.json(_profile)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

export async function saveProfile(req, res) {
    const { fullName,
        urlImage,
        specialty,
        email,
        phoneNumber,
        objectives } = req.body
    try {
        const _profile = new Profile({
            fullName,
            urlImage,
            specialty,
            email,
            phoneNumber,
            objectives
        })
        const _saveProfile = await _profile.save()
        res.json(_saveProfile)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}