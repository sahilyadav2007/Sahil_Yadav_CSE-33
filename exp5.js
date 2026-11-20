const express = require("express"); 
const app = express(); 
app.use(express.json()); 
let students = [ 
{ id: 1, name: "Sahil", age: 21 }, 
{ id: 2, name: "Sahil", age: 20 } 
]; 
// GET - Display all students 
app.get("/students", (req, res) => { 
res.send(students); 
}); 
// POST - Add a new student 
app.post("/students", (req, res) => { 
const student = req.body; 
students.push(student); 
res.send("Student added successfully"); 
}); 
// PUT - Update student details 
app.put("/students/:id", (req, res) => { 
const id = Number(req.params.id); 
const student = students.find(s => s.id === id); 
if (student) { 
student.name = req.body.name; 
student.age = req.body.age; 
res.send("Student updated successfully"); 
} else { 
res.send("Student not found"); 
} 
}); 
// DELETE - Delete a student 
app.delete("/students/:id", (req, res) => { 
const id = Number(req.params.id); 
students = students.filter(s => s.id !== id); 
res.send("Student deleted successfully"); 
}); 
// Start server 
app.listen(3000, () => { 
console.log("Server running on port 3000"); 
}); 