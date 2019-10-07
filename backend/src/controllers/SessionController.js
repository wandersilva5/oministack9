const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            let user = await User.create({ email });
        }

        return res.json(user);
    }
};