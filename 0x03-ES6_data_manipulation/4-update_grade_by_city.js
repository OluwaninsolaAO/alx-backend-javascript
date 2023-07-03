export default function updateStudentGradeByCity(students, location, grades) {
  return students
    .filter((student) => student.location === location)
    .map((student) => {
      for (const grade of grades) {
        if (student.id === grade.studentId) {
          student.grade = grade.grade;
          return student;
        }
      }
      student.grade = 'N/A';
      return student;
    });
}
