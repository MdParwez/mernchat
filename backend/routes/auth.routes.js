import express from "express";
import {login,logout,signup} from "../controllers/auth.controller.js"
const router = express.Router();
// @route   POST api/auth
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout",logout);

export default router;