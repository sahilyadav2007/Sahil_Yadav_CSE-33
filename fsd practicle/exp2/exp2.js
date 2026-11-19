// Importing File System Module
const filesys = require("fs");

// Creating File
filesys.writeFileSync("student.txt", "name:ABES");
console.log("File created successfully");

// Reading File
const filedata = filesys.readFileSync("student.txt", "Utf8");
console.log(filedata);

// Updating File
const u = filesys.writeFileSync("student.txt", "name:Sahil");
console.log("File updated successfully");

// Reading Updated Data
const newfiledata = filesys.readFileSync("student.txt", "Utf8");
console.log(newfiledata);
