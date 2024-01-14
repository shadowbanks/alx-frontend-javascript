export default function createIteratorObject(report) {
  const staffs = [...Object.values(report.allEmployees)];
  const allValues = [].concat(...staffs);
  const myIterator = {
    [Symbol.iterator]: () => {
      let idx = 0;
      return {
        next: () => {
          if (idx < allValues.length) {
            const returnObj = { value: allValues[idx], done: false };
            idx += 1;
            return returnObj;
          }
          return { done: true };
        },
      };
    },
  };
  return myIterator;
}
