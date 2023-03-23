import { Router } from "express";
import UserController from "../controllers/User.Controller.js";

const router = Router();

router.get('/users', UserController.getMultiple);

router.get('/users/:id', (req, res) => {
});

router.post('/users', UserController.post);

router.put('/users/:id', (req, res) => {
});

router.delete('/users/:id', (req, res) => {
});

export default router;
