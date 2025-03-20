const express = require('express');
const router = express.Router();
const { getStudents, postStudents, deleteStudent, updateStudent } = require('../controllers/controller.js');

// Get all students (Read - GET)
router.get('/', getStudents);

// Create a student (Create - POST)
router.post('/', postStudents);  // Fixed to use postStudents instead of updateStudent

// Delete a student (Delete - DELETE)
router.delete('/:name', deleteStudent);

// Update an existing student (Update - PUT)
router.put('/:name', updateStudent);

// Export the router correctly
module.exports = router;
