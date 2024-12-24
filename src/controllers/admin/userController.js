import jwt from 'jsonwebtoken';
import admin from '../../config/firebase.js';
// import admin from '../../config/firebase';
import dotenv from 'dotenv';
dotenv.config();
const SECRET_KEY = process.env.JWT_SECREAT;


export const loginWithOtp = async (req, res) => {
    const idToken = req.headers.authorization?.split('Bearer ')[1];
    if (!idToken) {
        return res.status(401).send({ success: false, message: "Unauthorized: No token provided" });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken); // Await added
        const { uid, phone_number } = decodedToken;

        const user = { uid, phoneNumber: phone_number };

        // Ensure SECRET_KEY is properly used here
        const sessionToken = jwt.sign({ uid: user.uid }, SECRET_KEY, { expiresIn: '1h' });

        res.status(200).send({ sessionToken, user });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};
