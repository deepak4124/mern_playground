import jwt from 'jsonwebtoken'

export const adminLogin = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            return res.json({success: false, message: 'Invalid credentials'});
        }

        const token = jwt.sign({email}, process.env.JWT_SECRET)
        res.json({success: true, token});
        console.log("admin logged in");

    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

export default adminLogin;