import express from 'express';

const router = express.Router();
import {addStudent , updateStudent , deleteStudent, getStudent, getStudentById, getLogin} from '../controllers/student.js'
let student = [];

router.get('/', getStudent)
router.post('login', getLogin)
router.get('/:id',getStudentById)
router.post('/',addStudent)
router.put('/:id',updateStudent)
router.delete('/:id',deleteStudent)
export default router 
