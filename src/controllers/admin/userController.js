import jwt from 'jsonwebtoken';
import admin from '../../config/firebase.js';
// import admin from '../../config/firebase';
import dotenv from 'dotenv';
import passport from '../../config/passport.js';
dotenv.config();
const SECRET_KEY = process.env.JWT_SECREAT;


// export const loginWithOtp = async (req, res) => {
//     const idToken = req.headers.authorization?.split('Bearer ')[1];
//     if (!idToken) {
//         return res.status(401).send({ success: false, message: "Unauthorized: No token provided" });
//     }

//     try {
//         const decodedToken = await admin.auth().verifyIdToken(idToken); // Await added
//         const { uid, phone_number } = decodedToken;

//         const user = { uid, phoneNumber: phone_number };

//         // Ensure SECRET_KEY is properly used here
//         const sessionToken = jwt.sign({ uid: user.uid }, SECRET_KEY);

//         res.status(200).send({ sessionToken, user });
//     } catch (error) {
//         res.status(500).send({ success: false, message: error.message });
//     }
// };

export const loginWithOtp = async (req,res,next) =>{
    passport.authenticate("firebase-token",{session:false},(err,user,info) => {
        if(err || !user){
            return res.status(401).send({
                success: false,
                message: info?.message || "Unauthorized",
              });
        }
        try {
            const sessionToken = jwt.sign({ uid: user.uid }, SECRET_KEY);
      
            return res.status(200).send({
              success: true,
              sessionToken,
              user,
              message:"coming"
            });
          } catch (error) {
            return res.status(500).send({
              success: false,
              message: error.message,
            });
          }
    })(req, res, next);
}

