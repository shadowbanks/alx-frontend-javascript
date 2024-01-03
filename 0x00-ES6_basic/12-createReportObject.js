export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => {
      const departments = Object.keys(employeesList);
      return departments.length;
    },
  };

  return obj;
}
