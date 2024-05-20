export default function getStudentIdsSum(students) {
  return students.reduce((somme, student) => somme + student.id, 0);
}
