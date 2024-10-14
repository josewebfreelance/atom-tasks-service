import express from "express";
import {register} from "../controllers/configController";

const router = express.Router();

router.post('/api/users', register);

export default router;
