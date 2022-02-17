import express from 'express';
import { getUser,addUser, deleteUser, updateUser, getLogin } from '../controllers/user.js';

const router = express.Router();

const user = [{
    name : "enayat",
    role : "admin",
    password : "admin"}];

router.get('/', getUser)
router.post('/login',getLogin)
router.post('/',addUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
export default router 
