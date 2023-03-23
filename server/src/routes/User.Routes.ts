import { Router } from "express";
import UserController from "../controllers/User.Controller.js";
import isAdmin from "../middleware/isAdmin.js";
import isAuth from "../middleware/IsAuth.js";
import User from "../models/User.js";

const router = Router();

router.get('/users', UserController.getMultiple);

router.get('/users/:id', (req, res) => {
});

router.post('/users', UserController.post);

router.put('/users/:id', (req, res) => {
});

router.delete('/users/:id', (req, res) => {
});

router.post('/users/login', UserController.login);
router.post('/users/test', isAuth, isAdmin, (req, res) => {
    res.json({message: 'Успешно'})
});
export default router;
