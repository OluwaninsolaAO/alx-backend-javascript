#!/usr/bin/env node
// 2. Reading a file synchronously with Node JS
const { readFileSync } = require('fs');

const delimeter = '\n';

function countStudents(path) {
  try {
    const data = readFileSync(path, 'utf-8');
    const rows = data.split(delimeter);
    const students = [];
    const fields = new Set();
    const header = rows.shift().split(',');
    for (let row of rows) {
      row = row.split(',');
      const student = Object.fromEntries(
        header.map((key, index) => [key, row[index]]),
      );
      students.push(student);
      fields.add(student.field);
    }

    console.log(`Number of students: ${students.length}`);
    fields.forEach((field) => {
      const studentsInField = students.filter(
        (student) => student.field === field,
      );
      console.log(
        `Number of students in ${field}: ${
          studentsInField.length
        }. List: ${studentsInField
          .map((student) => student.firstname)
          .join(', ')}`,
      );
    });
  } catch (err) {
    // throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
