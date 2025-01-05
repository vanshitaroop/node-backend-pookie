import passport from "passport";
import { Strategy as CustomStrategy } from 'passport-custom';
import admin from "firebase-admin";

passport.use("firebase-token",new CustomStrategy(async (req,done) => {
    try {
        const idToken = req.headers.authorization?.split("Bearer ")[1];
      if (!idToken) {
        return done(null, false, { message: "No token provided" });
      }

      const decodedToken = await admin.auth().verifyIdToken(idToken);
      const { uid, phone_number: phoneNumber } = decodedToken;

      const user = { uid, phoneNumber };
      return done(null, user);
    } catch (error) {
        return done(error,false);
    }
}));
export default passport;