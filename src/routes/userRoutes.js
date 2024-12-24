import express from 'express';
// import { loginWithOtp } from '../controllers/admin/userController';
import { loginWithOtp } from '../controllers/admin/userController.js';
const router = express.Router();

router.post('/login',loginWithOtp);

export default router;

