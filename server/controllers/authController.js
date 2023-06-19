const JWT = require('jsonwebtoken')

exports.login = (req, res) => {
    const { username, password } = req.body;
    if (password === process.env.PASSWORD) {
        const token = JWT.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1d" });
        return res.json({ token, username });
    } else {
        return res.status(400).json({
            error: "รหัสผ่านไม่ถูกต้อง!"
        });
    }
}

