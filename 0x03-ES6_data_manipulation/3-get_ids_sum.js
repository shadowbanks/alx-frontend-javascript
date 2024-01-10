export default function getStudentIdsSum(students) {
  return students.map((student) => student.id).reduce((total, current) => total + current, 0);
}
