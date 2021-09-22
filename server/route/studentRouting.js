const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController")
const {authRole} = require('../controller/authentication/auth');

const upload = require('../middleware/upload');

router.get('/', studentController.getStudents);
router.get('/getStudent/:id', studentController.getStudent);
router.get('/gradesById/:id', studentController.getStudentGradeById);
router.post('/addTestById', authRole("Staff"), studentController.addStudentTestById);
router.put('/updateTest/:_id', authRole("Staff"), studentController.updateStudentTestById);
<<<<<<< HEAD
router.put('/updateStudent', authRole("Staff"), upload.single('profileImg'), studentController.updateStudent);
=======
router.put('/updateStudent/:id', studentController.updateStudent);
>>>>>>> main
router.delete('/deleteTest/:_id', authRole("Staff"), studentController.deleteStudentTestById);
router.delete('/deleteStudent', authRole("Staff"), studentController.deleteStudent);
router.get('/syllabus',studentController.getSyllabusByCourse)

module.exports = router;