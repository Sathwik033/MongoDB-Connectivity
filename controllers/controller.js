const student = require('../models/schema.js');  // Assuming 'student' model is imported correctly

// Get all students
async function getStudents(req, res) {
  try {
    const students = await student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Post a new student
async function postStudents(req, res) {
  try {
    const { name, age, isStudent } = req.body;
    const newStudent = new student({ name, age, isStudent });  // Use 'student' model here
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Delete a student
async function deleteStudent(req, res) {
  try {
    const deletedStudent = await student.findOneAndDelete(req.params.name);  // Use 'student' model here
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update a student
async function updateStudent(req, res) {
  try {
    const { name, age, isStudent } = req.body;
    const updatedStudent = await student.findOneAndUpdate(
      { name: req.params.name }, // Correct filter (finding by name)
      { $set: { name, age, isStudent } }, // Update the fields
      { new: true } // Return the updated document
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// Export functions correctly
module.exports = { getStudents, postStudents, deleteStudent, updateStudent };
