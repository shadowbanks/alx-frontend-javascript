/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchedGrades = newGrades.filter((grade) => grade.studentId === student.id);
      student.grade = matchedGrades.length ? matchedGrades[0].grade : 'N/A';
      return student;
    });
}
